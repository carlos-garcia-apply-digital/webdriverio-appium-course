class AddNoteScreen{
    get skipButton() {
        return $('//*[@text="SKIP"]');
    }

    get addNoteButton() {
        return $('//*[@text="Add note"]');
    }

    get newNoteTextOption(){
        return $('//*[@text="Text"]');
    }

    get editingText(){
        return $('//*[@text="Editing"]');
    }
    
    get noteTitle(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }
    get noteBody(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }
    get editButton(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }
    get viewNote(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }

    async saveNote(){
        await driver.back();
        await driver.back();
    }

    async skipTutorial(){
        await this.skipButton.click();
        await expect(this.addNoteButton).toBeDisplayed();
    }

    async addNote(noteTitle, noteBody){
        await this.addNoteButton.click();
        await this.newNoteTextOption.click();
        await expect(this.editingText).toBeDisplayed();

        await this.noteTitle.setValue(noteTitle);
        await this.noteBody.setValue(noteBody);

        await this.saveNote();
        
        await expect(this.editButton).toBeDisplayed();
        await expect(this.viewNote).toHaveText(noteBody);
    }
}
export default new AddNoteScreen();