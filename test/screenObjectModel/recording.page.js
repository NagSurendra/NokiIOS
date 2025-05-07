import { verifyAndClick, verify ,waitForElement  } from '/Users/nagasubarayudu/Desktop/IOS/helpers/helper.js';
import LoginPage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/login.page.js'
import EncounterPage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/encounter.page.js'
import HomePage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/home.page.js'
import { faker } from '@faker-js/faker';
import QuickActions from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/quickActions.page.js'

class RecordingPage {
    get search() 
    { 
        return $('~Search'); 
    }
    get ok() 
    { 
        return $('~OK'); 
    }
    get back() 
    { 
        return $('//XCUIElementTypeButton[@name="backArrow"]'); 
    }
    get RecordingBack() 
    { 
        return $('~Left'); 
    }
    get ContinueBtn()
    {
        return $('//XCUIElementTypeButton[@name="CONTINUE"]')
    }
    get saveAsDraftBtn()
    {
        return $('//XCUIElementTypeButton[@name="SAVE AS A DRAFT"]')
    }
    get discardBtn()
    {
        return $('//XCUIElementTypeButton[@name="DISCARD"]')
    }
    get templateSoapNote() 
    { 
        return $('//XCUIElementTypeTextField[@value="SOAP Note"]'); 
    }
    get launguageSelectior() 
    { 
        return $('//XCUIElementTypeTextField[@value="English"]'); 
    }
    get launguageSelectText() 
    { 
        return $('//XCUIElementTypeStaticText[@name="Select a scribe Language"]'); 
    }
    get doneBtn() 
    { 
        return $('~Done'); 
    }
    get englishLanOpt() 
    { 
        return $('~English'); 
    }
    get spanishLanOpt() 
    { 
        return $('~Español'); 
    }
    get confirmationText() {
        return $('//XCUIElementTypeTextView[@value="Please ensure you have verbal consent from the patient before using Noki\'s AI ambient scribe for clinical documentation. View Consent"]');
    }
    
    get confirmationTextCheckBox() 
    { 
        return $('~checkmark.square.fill'); 
    }
    
    get startConversationBtn() 
    { 
        return $('//XCUIElementTypeButton[@name="Start Conversation"]'); 
    }
    get txtConfm() 
    {
        return $("~Please ensure you have verbal consent from the patient before using Noki's AI ambient scribe for clinical documentation. View Consent"); 
    }
    get pauseBtn() 
    { 
        return $('~Pause'); 
    }
    get patientCreatedOk() 
    { 
        return $('~OK'); 
    }
    get resumeRecording() 
    { 
        return $('//XCUIElementTypeButton[@name="Resume Recording"]'); 
    }
    get resumeRecordingConformationYes() 
    { 
        return $('//XCUIElementTypeButton[@name="YES"]'); 
    }
   
     get resumeRecordingConformationNO() 
    { 
        return $('//XCUIElementTypeButton[@name="NO"]'); 
    }

    get stopBtn() 
    { 
        return $('~stopRecord'); 
    }
    get PlayBtn() 
    { 
        return $('~playBtnIcon'); 
    }
    get PrevEncounterRef() 
    { 
        return $("~Would you like to use the previous encounter's SOAP note as context?"); 
    }
    get PrevEncounterRefNo() 
    { 
        return $('//XCUIElementTypeButton[@name="NO"]'); 
    }
    get PrevEncounterRefYes() 
    { 
        return $('//XCUIElementTypeButton[@name="YES"]'); 
    }
    get notEnoughTranscript() 
    { 
        return $('~Not enough transcript to generate clinical notes.'); 
    }
    get notEnoughTranscriptOk() 
    { 
        return $('//XCUIElementTypeButton[@name="OK"]');
    }

    get SoapNoteBtn() 
    { 
        return $('~SOAP Note'); 
    }
    get soapNoteTable(){

        return $('~scrollView')
    }
    get patientInformation() 
    { 
        return $('//XCUIElementTypeStaticText[@name="main label" and @label="Patient Information"]'); 
    }
    get subjective() 
    { 
        return $('//XCUIElementTypeStaticText[@name="main label" and @label="Subjective"]'); 
    }
    get objective() 
    { 
        return $('//XCUIElementTypeStaticText[@name="Objective"]'); 
    }
    get assessment() 
    { 
        return $('//XCUIElementTypeStaticText[@name="Assessment"]'); 
    }
    get plan() 
    { 
        return $('//XCUIElementTypeStaticText[@name="Plan"]'); 
    }
    get additinalInformation() 
    { 
        return $('//XCUIElementTypeStaticText[@name="Additional Information"]'); 
    }
    get name() 
    { 
        return $('//XCUIElementTypeTextField[@value="Name :"]'); 
    }
    get age() 
    { 
        return $('//XCUIElementTypeTextField[@value="Age :"]'); 
    }
    get gender() 
    { 
        return $('//XCUIElementTypeTextField[@value="Gender :"]'); 
    }
    get encounterDate() 
    { 
        return $('//XCUIElementTypeTextField[@value="Encounter Date :"]'); 
    }

    get chiefComplain() 
    { 
        return $('~Chief Complaint CC'); 
    }
    get historyofprsentIllness() 
    { 
        return $('~History of Present Illness HPI'); 
    }
    get pastMedicalHistory() 
    { 
        return $('~Past Medical History'); 
    }
    get socialHistory() 
    { 
        return $('~Social History'); 
    }
    get familyHistory() 
    { 
        return $('~Review of Systems ROS'); 
    }  
    get reviewofSystems() 
    { 
        return $('~Review of Systems ROS'); 
    }
    get vitalSigns() 
    { 
        return $('~Vital Signs'); 
    }
    get generallAppearance() 
    { 
        return $('~General Appearance'); 
    }
    get physicalApperence() 
    { 
        return $('~Physical Examination'); 
    }
    get Diognosis() 
    { 
        return $('(//XCUIElementTypeStaticText[@name="Diagnosis :"])[3]'); 
    }
    get clinicalImpression() 
    { 
        return $('~Treatment Plan'); 
    }
    get treatmentPlan() 
    { 
        return $('~Treatment Plan'); 
    }
    get patitentEducation() 
    { 
        return $('~Patient Education'); 
    }
    get followUp() 
    { 
        return $('~Follow-Up'); 
    }
    get medications() 
    { 
        return $('~Medications'); 
    }

    get allergies() 
    { 
        return $('~Allergies'); 
    }
    get immunization() 
    { 
        return $('~Immunizations'); 
    }
    get referal() 
    { 
        return $('//XCUIElementTypeTextView[@name="Referral"]'); 
    }
   
    get Transcript() 
    { 
        return $('~Transcript'); 
    }
    get Cdss() 
    { 
        return $('~CDSS'); 
    }
    get CDSSLimitExceded(){
            return $('~No CDSS Data Found')
    }
    get SuggestedDiagnosisAndInterventions() 
    { 
        return $('~Suggested Diagnosis and Interventions'); 
    }
    get SuggestedQuestions() 
    { 
        return $('~Suggested Questions'); 
    }
    get SuggestedMedications() 
    { 
        return $('~Suggested Medications'); 
    }
    get SuggestedFollowups() 
    { 
        return $('~Suggested Diagnostic Testing'); 
    }


    get originalTrnscript() 
    { 
        return $('//XCUIElementTypeButton[@name="Show Original Transcript"]'); 
    }
    get originalTrnscriptTableView() 
    { 
        return $(''); 
    }
    get claeanedTranscript() 
    { 
        return $('//XCUIElementTypeButton[@name="Show Cleaned Transcript"]'); 
    }
    get claeanedTranscriptTableView() 
    { 
        return $('//XCUIElementTypeButton[@name="Show Cleaned Transcript"]'); 
    }
    get copyBtn() 
    { 
        return $('~copy'); 
    }
    get update() 
    { 
        return $('~pencil.line'); 
    }
    get AddPatientInformation() 
    { 
        return $('~+  Add Patient Information'); 
    }
    get AddPatientInformationInSpanish() 
    { 
        return $('~+  Add Información del Paciente'); 
    }
    get save() 
    { 
        return $('//XCUIElementTypeStaticText[@name="Save"]'); 
    }
    get cancel() 
    { 
        return $('//XCUIElementTypeStaticText[@name="Cancel"]'); 
    }
    get title() 
    { 
        return $('(//XCUIElementTypeTextView[@value="Title"])[1]'); 
    }
    get Discription() 
    { 
        return $('(//XCUIElementTypeTextView[@value="Description"])[1]'); 
    }
    get titleInSpanish() 
    { 
        return $('(//XCUIElementTypeTextView[@value="Título"])[1]'); 
    }
    get discriptionInSpanish() 
    { 
        return $('(//XCUIElementTypeTextView[@value="Descripción"])[1]'); 
    }
    get add() 
    { 
        return $('(//XCUIElementTypeButton[@name="selected"])[1]'); 
    }
    get clearPatientInfo() 
    { 
        return $('(//XCUIElementTypeStaticText[@name="❌"])[1]'); 
    }
    get patientInfoRequiredPopUp() 
    { 
        return $('~Patient Information is Required'); 
    }
    get soapNoteUpdatedSucessPopUP() 
    { 
        return $('~Soap Note Updated Successfully'); 
    }
  
    get resumeConversationForMultipleConverstionScenario() 
    { 
        return $('//XCUIElementTypeButton[@name="Resume Conversation"]'); 
    }
    get  resumeConversationForMultipleConverstionScenarioYes() 
    { 
        return $('//XCUIElementTypeButton[@name="Yes"]'); 
    }
    get  resumeConversationForMultipleConverstionScenarioNo() 
    { 
        return $('//XCUIElementTypeButton[@name="No"]'); 
    }
    get popUpForForTheFinalazeEncounterOfDraftTranscript() 
    { 
        return $('~Please continue or delete the draft to finalize the encounter.'); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }


    get mailBtn() 
    { 
        return $('~mail'); 
    }
    get emailSentOk() 
    { 
        return $('~OK'); 
    }
    get printBtn() 
    { 
        return $('~print'); 
    }
    get printPagePrintBtn() 
    { 
        return $('~Print'); 
    }
    get printConformation() 
    { 
        return $('(//XCUIElementTypeButton[@name="Print"])[2]'); 
    }
    get printDownload() 
    { 
        return $('~Download'); 
    }
    get printDownloadCopyOption() 
    { 
        return $('//XCUIElementTypeCell[@name="Copy"]'); 
    }
    get printDownloadMarkup() 
    { 
        return $('//XCUIElementTypeStaticText[@name="Markup"]'); 
    }
    get printDownloadPrint() 
    { 
        return $('//XCUIElementTypeStaticText[@name="Print"]'); 
    }
    get printDownloadAddTags() 
    { 
        return $('//XCUIElementTypeStaticText[@name="Add Tags"]'); 
    }
    get printDownloadSaveToFiles() 
    { 
        return $('//XCUIElementTypeStaticText[@name="Save to Files"]'); 
    }
    get printDownloadExitActions() 
    { 
        return $('//XCUIElementTypeButton[@name="Edit Actions…"]'); 
    }
    get pdfSavedOk() 
    { 
        return $('~OK'); 
    }

    get printPageOptions() 
    { 
        return $('//XCUIElementTypeStaticText[@name="Options"]'); 
    }
    get printCancel() 
    { 
        return $('~Cancel'); 
    }
    get printPageCancel() 
    { 
        return $('~Cancel'); 
    }
    get printPageBackBtn() 
    { 
        return $('~Left'); 
    }
    
    get SoapNoteScreenTxtField() 
    { 
        return $('//XCUIElementTypeTextView[@value="Click on the mic and start speaking.."]'); 
    }

    get Mic() 
    { 
        return $('~micIcon'); 
    }
    get send() 
    { 
        return $('~sendVoiceBtn'); 
    }
    get AddConversation() 
    { 
        return $('//XCUIElementTypeButton[@name="Add Conversation"]'); 
    }
  
    get AddConversationConfirmationYes() 
    { 
        return $('//XCUIElementTypeButton[@name="Yes"]'); 
    }
    
    get AddConversationNo() 
    { 
        return $('//XCUIElementTypeButton[@name="No"]'); 
    }


    get finaliseEncounter() 
    { 
        return $('~finalizedBtn'); 
    }

    get finaliseEncounterTxt() 
    { 
        return $('~Are you sure to finalize the encounter and disable all the actions available ?'); 
    }
    get finaliseEncounterOk() 
    { 
        return $('//XCUIElementTypeButton[@name="Ok"]'); 
    }
    get finaliseEncounterCancel() 
    { 
        return $('//XCUIElementTypeButton[@name="Cancel"]'); 
    }
    get finaliseEncounteSuccesseTxt() 
    { 
        return $('//XCUIElementTypeStaticText[@name="Success"]'); 
    }
    get finaliseEncounterSuccess() 
    { 
        return $('~Encounter Finalised Successfully'); 
    }
    get finaliseEncounterConformed() 
    { 
        return $('~OK'); 
    }
    get PatientInfo() 
    { 
        return $('//XCUIElementTypeStaticText[@name="main label" and @label="Patient Information"]'); 
    }
    get Subject() 
    { 
        return $('//XCUIElementTypeStaticText[@name="main label" and @label="Subjective"]'); 
    }
    get Object() 
    { 
        return $('//XCUIElementTypeStaticText[@name="main label" and @label="Objective"]'); 
    }
    get Assessment() 
    { 
        return $('//XCUIElementTypeStaticText[@name="main label" and @label="Assessment"]'); 
    }
    get Plan() 
    { 
        return $('//XCUIElementTypeStaticText[@name="main label" and @label="Plan"]'); 
    }
    get AdditionalInfo() 
    { 
        return $('//XCUIElementTypeStaticText[@name="main label" and @label="Additional Information"]'); 
    }
    get connectionLost() 
    { 
        return $('~Connection Lost!'); 
    }
    get connectionLostOk(){

        return $('(//XCUIElementTypeButton[@name="Close"])[2]');
    }

    get backToPatientScreen() 
    { 
        return $('~Left'); 
    }
    get networkFailure() 
    { 
        return $("~No internet connection found. Please check your connection."); 
    }
    get acknowledgeCheckBox()
    {
        return $('~square')
    }
    get networkFailureOk() 
    { 
        return $('(//XCUIElementTypeButton[@name="Close"])[2]'); 
    }
    get bloodGroup() 
    { 
        return $('//XCUIElementTypeStaticText[@name="main label" and @label="BloodGroup"]'); 
    }

    //multiple conversations 

    get cdssFromCurrentConversation() 
    { 
        return $(''); 
    }
 
    async Audio(){
        await driver.pause(4000);
        await driver.navigateTo('https://www.youtube.com/watch?v=5t6Yr4eZ9wY');
        await driver.pause(120000);
        await driver.activateApp("com.thinkhat.devNoki");
    }
    async recordAudio() {
        
            await this.Audio(); 
            await this.stopBtn.click();
        
    }
    async ctsConformation() {
        try{
        if (await this.notEnoughTranscript.isDisplayed()) 
            {
                console.error("Recording failed: Please provide a proper medical conversation")
            } 
            else 
            {
                await waitForElement(this.SoapNoteBtn);
                console.log("Recording successful: Transcript generated");
            }
        } 
        catch (error) 
        {
            console.error("Error in recordAudio:", error);
            throw error; 
        }
        await verifyAndClick(this.Transcript);
        await verifyAndClick(this.Cdss);
        await driver.pause(2000);
        const elements = 
            this.SuggestedDiagnosisAndInterventions||
            this.SuggestedDiagnosticTesting||
            this.SuggestedMedications||
            this.SuggestedQuestions
       
        if(elements.isDisplayed()) { 
            console.log("CDSS is generated properly")     
        } 
        else if (this.CDSSLimitExceded.isDisplayed()){
            console.error("\x1b[31m%s\x1b[0m", "Kindly please verify the CDSS is off / your CDSS subscription is over")            
        }
        await driver.pause(3000);
        await verifyAndClick(this.Transcript)
        await verifyAndClick(this.originalTrnscript)
        await driver.execute('mobile: swipe', { direction: 'up' });
        await verifyAndClick(this.claeanedTranscript)
        await driver.execute('mobile: swipe', { direction: 'up' });
        await this.SoapNoteBtn.click()
        await driver.execute('mobile: swipe', { direction: 'up' });
        await driver.execute('mobile: swipe', { direction: 'down' });
        await driver.execute('mobile: swipe', { direction: 'down' });

    }
    async multipleConversation() 
    { 
       
        await this.AddConversation.click()
        await this.AddConversationNo.click()
        await this.AddConversation.click()
        await this.AddConversationConfirmationYes.click()
        await verify(this.pauseBtn)
        await this.recordAudioAndSaveAsDraft()
        await HomePage.encounter.click()
        await driver.pause(5000)
        await EncounterPage.clickDraftTranscript()
        await this.finaliseEncounter.click()
        await verify(this.popUpForForTheFinalazeEncounterOfDraftTranscript)
        await this.ok.click()
        await this.resumeConversationForMultipleConverstionScenario.click()
        await this.resumeConversationForMultipleConverstionScenarioYes.click()
        await this.recordAudio()
        await driver.pause(120000)
        await this.ctsConformation()
    }
    async finalizeEncounter() 
    {
        await verifyAndClick(this.SoapNoteScreenTxtField);
        await verifyAndClick(this.doneBtn)
        await verify(this.send);
        await verifyAndClick(this.copyBtn);
        await verifyAndClick(this.update)
        await verify(this.save)
        await verifyAndClick(this.AddPatientInformation)
        await verify(this.title)
        await verify(this.Discription)
        await verifyAndClick(this.add)
        await verifyAndClick(this.ok)
        await verifyAndClick(this.clearPatientInfo)
        await verifyAndClick(this.cancel)
        await verifyAndClick(this.mailBtn);
        await verifyAndClick(this.emailSentOk);
        await verifyAndClick(this.printBtn);
        await verify(this.printDownload);
        await verifyAndClick(this.printPageCancel);
        await verifyAndClick(this.printPageBackBtn);
        await this.multipleConversation()
        await QuickActions.quickAction()
       
        await verifyAndClick(this.SoapNoteBtn)
        await this.finaliseEncounter.click()
        await this.finaliseEncounterOk.click()
        await verify(this.finaliseEncounteSuccesseTxt);
        await this.finaliseEncounterConformed.click();
        try 
        {
            if(this.update.isDisplayed())
            {
                await verify(this.update)
                console.error("%c even after finalized encounter is confirmed we are able to see the update Button", "color: red");                
            }    
        } 
        catch (error) 
        {
            console.error("An error occurred:", error);   
        }
        await this.backToPatientScreen.click();
    }
    async recordAudioAndSaveAsDraft(){    
        await driver.navigateTo('https://www.youtube.com/watch?v=5t6Yr4eZ9wY');
        await driver.pause(30000);
        await driver.activateApp("com.thinkhat.devNoki");                                                 
        await driver.pause(3000)
        await this.RecordingBack.click()
        await verifyAndClick(this.saveAsDraftBtn)
    }
    async recordAudioForExicistingPatient(){
        await this.recordAudio()
        await verify(this.PrevEncounterRef)
        await verifyAndClick(this.PrevEncounterRefNo)
    }
    async recordAudioForDraft(){
        await this.resumeRecording.click()
        await verifyAndClick(this.resumeRecordingConformationYes)
        await this.recordAudio()
    }
    async startConversation(){
        await verifyAndClick(this.acknowledgeCheckBox)
        await verifyAndClick(this.startConversationBtn)
    }
    async sleepModeConformation(){
        await driver.activateApp('com.thinkhat.heynoki');
        await HomePage.encounter.click()
        await verifyAndClick(EncounterPage.draft)
        try {
            await verify(this.SoapNoteBtn)
        } catch (error) {
            console.error("the soap note is not yet realy displayed or somthing unexpected happened")
        }
    }
    async copyMailPrint(){
        await verifyAndClick(this.copyBtn);
        await verifyAndClick(this.mailBtn);
        await verifyAndClick(this.emailSentOk);
        await verifyAndClick(this.printBtn);
        await verify(this.printDownload);
        await driver.pause(10000)
        await verifyAndClick(this.printPageCancel);
        await verifyAndClick(this.printPageBackBtn);
    }
}
export default new RecordingPage();
