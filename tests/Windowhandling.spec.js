import {test} from "@playwright/test"

test('Handling Windows', async ({page})=>{

    await page.goto('https://demo.automationtesting.in/Windows.html')

    const [newPage] = await Promise.all([page.waitForEvent('popup'), page.locator("//button[.='    click   ']").click()])

    const newPageUrl = newPage.url()

    console.log('Url of the new page is ', newPageUrl)

    console.log('Title of the new page is' , await newPage.title())
   
   const textInNewPage = await newPage.locator("//p[contains(text(),'If you want to create ro')]").innerText()

   console.log('Random text in new page is : ', textInNewPage)

  
   await page.bringToFront()

   const textInParentPage = await page.locator("//a[@class='navbar-brand']/../following-sibling::div/h1").textContent()

   console.log('Random text from parent page is :' , textInParentPage)

   console.log('Url of the parent page is : ',page.url())

   console.log('Title of the current page is : ', await page.title())

   await page.locator("//a[@href='#Seperate']").click()


   const [seperateNewPage] = await Promise.all([page.waitForEvent('popup'), page.locator("//button[.='click']").click()])
   
   console.log("New popup window's url is ",seperateNewPage.url())

   await page.bringToFront()






})
