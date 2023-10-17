describe('Todo List', () => {
    it('Create a Todo List', async() => {
        const listTitle = "Things to do today";
        await $('//*[@name="Create list"]').click();
        await $('//*[@value="List Name"]').addValue(listTitle);
        await $('~Create').click();

        await expect(await $(`~${listTitle}`)).toExist();
    });
});