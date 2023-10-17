class ListScreen {
    get createListButton() {
        return $('//*[@name="Create list"]');
    }

    get listNameInput() {
        return $('//*[@value="List Name"]');
    }

    get createButton(){
        return $('~Create');
    }

    async createNewList(listTitle){
        await this.createListButton.click();
        await this.listNameInput.addValue(listTitle);
        await this.createButton.click();
        await expect(await $(`~${listTitle}`)).toExist();
    }

    async addItemToList(listTitle, itemTitle){
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
    }
}
export default new ListScreen();