describe('Android Native Feature Tests', () => {
    it('Access an Activity directly', async() => {
        //Access activity
        await driver.startActivity('io.appium.android.apis','io.appium.android.apis.app.AlertDialogSamples')

        //pause
        await driver.pause(3000);
        //assertion
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    })

    it('Working with Dialog boxes', async() => {
        //Access activity
        await driver.startActivity('io.appium.android.apis','io.appium.android.apis.app.AlertDialogSamples')
        //click on first dialog
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();
        
        //get alert text
        console.log('ALERT TEXT --> ', await driver.getAlertText());

        // //accept alert
        // await driver.acceptAlert();
        // //dismiss alert
        // await driver.dismissAlert();
        //click on the OK button
        await $('//*[@resource-id="android:id/button1"]').click();

        //assertion - alert box should is no longer there
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    })

    it('Vertical scrolling', async() => {
        await $('~App').click();
        await $('~Activity').click();

        // //scroll to the end (not stable if element gets moved)
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        // await $('~Secure Surfaces').click();
        
        //scrollTextIntoView - more stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();
        
        //assertion
        await expect($('~Secure Dialog')).toExist();
    })

    it('Horizontal scrolling', async() => {
        //Access activity
        await driver.startActivity('io.appium.android.apis','.view.Gallery1');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await driver.pause(3000);
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
        await driver.pause(3000);
    })

    it.only('Scrolling Exercise - Android', async() => {
        //Navigate to date widget screen
        await $('~Views').click();
        await $('~Date Widgets').click();
        await $('~1. Dialog').click();

        const dateDisplay = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        //get current date and open widget
        const currentDate = await dateDisplay.getText();
        console.log('Date Displayed: ' + currentDate);
        await $('//*[@resource-id="io.appium.android.apis:id/pickDate"]').click();

        //scroll to next month
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await driver.pause(3000);
        //select new date
        await $('//*[@text="10"]').click();
        await $('//*[@text="OK"]').click();

        //assert date is updated
        const newDate = await dateDisplay.getText();
        console.log('Date Displayed: ' + newDate);
        await expect(newDate).not.toEqual(currentDate);
    })
});