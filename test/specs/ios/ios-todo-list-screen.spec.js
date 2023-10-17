import listScreen from "../../screen-objects/ios/list.screen";

describe('Todo List', () => {
    it('Create a Todo List', async() => {
        const listTitle = "Things to do today";
        await listScreen.createListButton.click();
        await listScreen.listNameInput.addValue(listTitle);
        await listScreen.createButton.click();

        await expect(await $(`~${listTitle}`)).toExist();
    });
});