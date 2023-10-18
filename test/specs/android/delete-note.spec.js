import addNoteScreen from "../../screen-objects/android/add-note.screen";
import deleteNoteScreen from "../../screen-objects/android/delete-note.screen";

describe('Delete Notes', () => {
    before('Skip tutorial and create note', async() => {
        await addNoteScreen.skipTutorial();
        await addNoteScreen.addNote("Anime List", "Jojo's\nCastlevania\nGoblin Slayer\nDemon Slayer");
    })
    
    it('Delete note', async() => {
        
        await deleteNoteScreen.deleteNote();
        await deleteNoteScreen.confirmDeletion("Anime List");
        
    })
})