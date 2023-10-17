describe.skip('Add Notes', () => {
    it('Skip Tutorial', async() => {
        await $('//*[@text="SKIP"]').click();
        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    })

    it('Add note', async() => {
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').setValue("Fav Anime List");
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').setValue("Jojo's\nCastlevania\nGoblin Slayer\nDemon Slayer");

        await driver.back();
        await driver.back();

        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Jojo's\nCastlevania\nGoblin Slayer\nDemon Slayer");
    })

    it('Delete note', async() => {
        await $('~More').click();
        await $('//*[@text="Delete"]').click();

        await driver.acceptAlert();
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
        await $('//*[@text="Trash Can"]').click();
        
        await expect($('//*[@text="Fav Anime List"]')).toBeDisplayed();
    })
})