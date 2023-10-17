describe('iOS Find Element', () => {
    it('Find element by accessibility id', async() => {
        await $('~Alert Views').click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
        await driver.pause(3000);
    })

    it('Find element by tag name', async() => {
        //single element
        console.log(await $('XCUIElementTypeStaticText').getText());

        //multiple elements
        const textElements = await $$('XCUIElementTypeStaticText');
        for (const element of textElements) {
            console.log(await element.getText());
        }
    })

    it('Find element by xpath', async() => {
        //xpath - (//tagname[@attribute=value])
        await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
        await $('//XCUIElementTypeStaticText[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
        await driver.pause(3000);
    })

    it('Find element by class chain', async() => {
        // const alertText = '**/XCUIElementTypeStaticText[`label == "Alert Views"`]';
        const alertText = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]';
        const simpleText = '**/XCUIElementTypeStaticText[`label == "Simple"`]';
        await $(`-ios class chain:${alertText}`).click();
        await $(`-ios class chain:${simpleText}`).click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
        await driver.pause(3000);
    })

    it('Find element by predicate string', async() => {
        //const alertText = 'label == "Alert Views"';
        const alertText = 'value BEGINSWITH[c] "alert"';
        const simpleText = '**/XCUIElementTypeStaticText[`label == "Simple"`]';
        await $(`-ios predicate string:${alertText}`).click();
        await $(`-ios class chain:${simpleText}`).click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
        await driver.pause(3000);
    })

    it.only('Find elements exercise', async() => {
        //Navigate
        await $('~Search').click();        
        const defaultText = 'value BEGINSWITH[c] "default"';
        await $(`-ios predicate string:${defaultText}`).click();
        
        //Give Text
        const inputText = 'I love this course!'
        const searchField = await $('XCUIElementTypeSearchField');
        await searchField.addValue(inputText);
        await driver.pause(3000);
        //assertion
        await expect(searchField).toHaveAttr("value");
        //await expect(searchField.getValue()).toEqual(inputText);
        // let value = await searchField.getValue();
        // console.log(value);

        const clearText = '**/XCUIElementTypeButton[`label == "Clear text"`]';
        await expect($(`-ios class chain:${clearText}`)).toBeDisplayed();

        //Clear Text
        await searchField.clearValue();
        //assertion
        await expect(searchField).not.toHaveAttr("value");
        // value = await searchField.getValue();
        // console.log(value);

        await expect($(`-ios class chain:${clearText}`)).not.toBeDisplayed();
    })
})