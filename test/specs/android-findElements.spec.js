describe('Android Elements Tests', ()=>{
    it('Find element by accessibility id', async()=>{
        //Find element by accessibility id
        const appOption = await $('~App');
        //Click element
        await appOption.click();
        //Assertion
        const actionBar = await $('~Action Bar');
        await actionBar.isExisting();
    })

    it('Find element by classname', async()=>{
        //find element by class name
        const className = await $('android.widget.TextView');
        console.log(await className.getText());
        //Assertion
        await expect(className).toHaveText("API Demos");
    })

    xit('Find elements by Xpath', async()=>{
        //xpath - (//tagname[@attribute=value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
        //find by resourceId
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();
        //find by text
        await $('//android.widget.TextView[@text="Command two"]').click();
        //find by class - assertion
        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText("You selected: 1 , Command two");
    })

    it('Find elements by UIAutomator', async() => {
        //find by text contains
        await $('android=new UiSelector().textContains("Dialogs")').click();

    })

    it('Find multiple elements', async() => {
        const expectedList = [
            "API Demos", 
            "Access'ibility",
            "Accessibility",
            "Animation",
            "App",
            "Content",
            "Graphics",
            "Media",
            "NFC",
            "OS",
            "Preference",
            "Text",
            "Views"
        ];
        const actualList = [];
        //find multiple elements
        const menuOptions = await $$('android.widget.TextView');
        //loop through them
        for(const element of menuOptions){
            actualList.push(await element.getText()); 
        }
        //assert list
        expect(actualList).toEqual(expectedList);
    })

    it.only('Exercise working with text input field', async() => {
        //access autocomplete screen
        await $('~Views').click();
        await $('//android.widget.TextView[@text="Auto Complete"]').click();
        await $('//android.widget.TextView[@content-desc="1. Screen Top"]').click();
        //enter country name
        const textField = await $('//android.widget.AutoCompleteTextView[@resource-id="io.appium.android.apis:id/edit"]');
        await textField.setValue('Mexico');
        //assert autocomplete value
        const autoCompleteText = await textField.getText();
        expect(autoCompleteText).toEqual('Mexico');
        //Solution way
        await expect(textField).toHaveText('Mexico');
    })
})