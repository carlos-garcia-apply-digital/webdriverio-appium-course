class DeleteNoteScreen {
    async deleteNote(){
        await $('~More').click();
        await $('//*[@text="Delete"]').click();
        await driver.acceptAlert();
    }

    async confirmDeletion(noteTitle){
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
        await $('//*[@text="Trash Can"]').click();        
        await expect($(`//*[@text="${noteTitle}"]`)).toBeDisplayed();
    }
}
export default new DeleteNoteScreen();