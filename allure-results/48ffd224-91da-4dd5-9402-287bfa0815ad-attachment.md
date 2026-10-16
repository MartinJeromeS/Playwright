# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Windowhandling.spec.js >> Handling Windows
- Location: tests\Windowhandling.spec.js:3:5

# Error details

```
Error: page.goto: net::ERR_NETWORK_CHANGED at https://demo.automationtesting.in/Windows.html
Call log:
  - navigating to "https://demo.automationtesting.in/Windows.html", waiting until "load"

```

# Test source

```ts
  1  | import {test} from "@playwright/test"
  2  | 
  3  | test('Handling Windows', async ({page})=>{
  4  | 
> 5  |     await page.goto('https://demo.automationtesting.in/Windows.html')
     |                ^ Error: page.goto: net::ERR_NETWORK_CHANGED at https://demo.automationtesting.in/Windows.html
  6  | 
  7  |     const [newPage] = await Promise.all([page.waitForEvent('popup'), page.locator("//button[.='    click   ']").click()])
  8  | 
  9  |     const newPageUrl = newPage.url()
  10 | 
  11 |     console.log('Url of the new page is ', newPageUrl)
  12 | 
  13 |     console.log('Title of the new page is' , await newPage.title())
  14 |    
  15 |    const textInNewPage = await newPage.locator("//p[contains(text(),'If you want to create ro')]").innerText()
  16 | 
  17 |    //console.log('Random text in new page is : ', textInNewPage)
  18 | 
  19 |   
  20 |    await page.bringToFront()
  21 | 
  22 |    const textInParentPage = await page.locator("//a[@class='navbar-brand']/../following-sibling::div/h1").textContent()
  23 | 
  24 |    console.log('Random text from parent page is :' , textInParentPage)
  25 | 
  26 |    console.log('Url of the parent page is : ',page.url())
  27 | 
  28 |    console.log('Title of the current page is : ', await page.title())
  29 | 
  30 |    await page.locator("//a[@href='#Seperate']").click()
  31 | 
  32 | 
  33 |    const [seperateNewPage] = await Promise.all([page.waitForEvent('popup'), page.locator("//button[.='click']").click()])
  34 |    
  35 |    console.log("New popup window's url is ",seperateNewPage.url())
  36 | 
  37 |    await page.bringToFront()
  38 | 
  39 | 
  40 | 
  41 | 
  42 | 
  43 | 
  44 | })
  45 | 
```