import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

// === CONFIG ===
const EMAIL_FROM = 'nag.subbarayudu@thinkhat.ai';
const EMAIL_TO = ['thinkhatnag@gmail.com','nag.subbarayudu@thinkhat.ai','cherukuri.chidambaram@thinkhat.ai', 'hepsiba.kambhampati@thinkhat.ai','sarat.tumu@thinkhat.ai','bheema.badri@thinkhat.ai',];
const EMAIL_PASS = 'hdnc heiy lwpk wxap';
const BASE_DIR = '/Users/nagasubarayudu/Desktop/IOS';

// === STEP 1: Generate Allure Report ===
console.log("🔧 Generating Allure Report...");
if (!fs.existsSync(path.join(BASE_DIR, 'allure-results'))) {
  console.error("❌ No allure-results folder found. Please run your tests first.");
  process.exit(1);
}
execSync(`allure generate ${path.join(BASE_DIR, 'allure-results')} --clean -o ${path.join(BASE_DIR, 'allure-report')}`, { stdio: 'inherit' });

// === STEP 2: Extract Test Summary and Test Cases ===
const summaryPath = path.join(BASE_DIR, 'allure-report', 'widgets', 'summary.json');
if (!fs.existsSync(summaryPath)) {
  console.error('❌ summary.json not found.');
  process.exit(1);
}
const stats = JSON.parse(fs.readFileSync(summaryPath, 'utf-8')).statistic;
const { total, passed, failed, broken, skipped, unknown } = stats;

// Get test cases details from history.json
const historyPath = path.join(BASE_DIR, 'allure-report', 'data', 'test-cases');
let testCasesHtml = '';
if (fs.existsSync(historyPath)) {
  const testCaseFiles = fs.readdirSync(historyPath);
  testCasesHtml = '<h3>Test Cases Details:</h3><ul>';
  
  testCaseFiles.forEach(file => {
    const testData = JSON.parse(fs.readFileSync(path.join(historyPath, file), 'utf-8'));
    const status = testData.status.toUpperCase();
    const name = testData.name;
    const description = testData.description || 'No description available';
    
    testCasesHtml += `
      <li>
        <strong>${name}</strong> (${status})
        <br>Description: ${description}
      </li>`;
  });
  testCasesHtml += '</ul>';
}

//=== STEP 5: Send Email with Summary + Test Cases ===
console.log("📬 Sending email...");

async function sendMail() {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_FROM,
      pass: EMAIL_PASS,
    },
  });

  const htmlBody = `
    <h2>🧪 Test Report Summary of IOS NOKI E2E check</h2>
    <p><strong>Results:</strong></p>
    <ul>
      <li>✅ Passed: ${passed}</li>
      <li>❌ Failed: ${failed}</li>
      <li>⚠️ Broken: ${broken}</li>
      <li>⏭️ Skipped: ${skipped}</li>
      <li>❓ Unknown: ${unknown}</li>
      <li>🔢 Total: ${total}</li>
    </ul>
    ${testCasesHtml}
        <p><strong> 🧪 the sanity check for NOKi IOS </strong></p>

  `;

  const mailOptions = {
    from: EMAIL_FROM,
    to: EMAIL_TO,
    subject: '🧪 Test Summary Report',
    html: htmlBody
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent:', info.response);
  } catch (err) {
    console.error('❌ Failed to send email:', err.message);
  }
}

sendMail();