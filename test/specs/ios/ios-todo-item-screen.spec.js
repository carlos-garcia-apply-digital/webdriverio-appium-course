import listScreen from "../../screen-objects/ios/list.screen";

describe('Todo List', () => {
    const listTitle = "Things to do";
    before('Create a ToDo List', async() => {
        await listScreen.createNewList(listTitle);
    })
    it('Add items to List', async() => {
        const itemTitle = 'Pay internet'
        await listScreen.addItemToList(listTitle, itemTitle);
    });
});