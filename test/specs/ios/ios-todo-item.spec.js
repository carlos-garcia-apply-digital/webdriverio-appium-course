describe('Todo List', () => {
    it('Create a Todo List and items', async() => {
        //Create list
        const listTitle = "Things to do";
        await $('//*[@name="Create list"]').click();
        await $('//*[@value="List Name"]').addValue(listTitle);
        await $('~Create').click();

        await expect(await $(`~${listTitle}`)).toExist();

        //Add item
        const itemTitle = 'Pay internet'
        await $(`~${listTitle}`).click();
        await $('//*[@name="Create item"]').click();
        await $('//*[@value="Title"]').addValue(itemTitle);
        await $('//*[@value="Due"]').click();
        
        //the app does not work well with more recent versions of iOS. Doing the date picker tap manually for now
        //Another solution is to get iOS 14.5
        //await $('~Date Picker').click();
        await $('~Saturday, October 28').click();
        await $('//XCUIElementTypeWindow[@index=2]').click();
        await $('~Create').click();

        //assertion
        await expect(await $(`~${itemTitle}`)).toExist();
        await expect(await $('~Due October 28, 2023')).toExist();
    });
});