
import {test} from "@playwright/test"


test('Handling Frames',async({page})=>{

    await page.goto("https://demo.automationtesting.in/Frames.html")
    await page.locator("//a[@href='#Multiple']").click()
    const outerFrame = page.frameLocator("//div[@id='Multiple']/iframe")
    const innerFrame = outerFrame.frameLocator("//div[@class='iframe-container']//iframe")
    await innerFrame.locator("//div[@class='container']//input[@type='text']").fill('Trendnologies')
    

})


