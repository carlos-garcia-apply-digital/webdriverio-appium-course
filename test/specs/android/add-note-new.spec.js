import addNoteScreen from "../../screen-objects/android/add-note.screen";

describe('Add Notes', () => {
    it('Skip Tutorial', async() => {
        await addNoteScreen.skipButton.click();
        await expect(addNoteScreen.addNoteButton).toBeDisplayed();
    })

    it('Add note', async() => {
        await addNoteScreen.addNoteButton.click();
        await addNoteScreen.newNoteTextOption.click();
        await expect(addNoteScreen.editingText).toBeDisplayed();

        await addNoteScreen.noteTitle.setValue("Fav Anime List");
        await addNoteScreen.noteBody.setValue("Jojo's\nCastlevania\nGoblin Slayer\nDemon Slayer");

        await addNoteScreen.saveNote();
        
        await expect(addNoteScreen.editButton).toBeDisplayed();
        await expect(addNoteScreen.viewNote).toHaveText("Jojo's\nCastlevania\nGoblin Slayer\nDemon Slayer");
    })
})