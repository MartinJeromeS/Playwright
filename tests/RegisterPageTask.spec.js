import {test} from '@playwright/test'


test('Register page test',async({page})=>{

    await page.goto('https://demo.automationtesting.in/Register.html')
    await page.getByPlaceholder('First Name').fill('Martin')
    await page.getByPlaceholder('Last Name').fill('Jerome S')
    await page.locator("//textarea[@ng-model='Adress']").fill('No: 452/4, Adaikala Annai nagar, Ponmalaipatti, Trichy - 620004')
    await page.locator("input[type='email']").fill('abc@gmail.com')
    await page.locator("input[ng-model='Phone']").fill('78393939303')
    await page.locator("input[value='Male']").check()
    await page.locator('#checkbox1').click()
    await page.locator('#msdd').click()
    await page.locator("//a[.='Danish']").click()
    await page.locator("//a[.='Finnish']").click()
    await page.locator("//label[.='Languages']").click()
    await page.keyboard.press('Escape')

    await page.waitForTimeout(10000)
    const skillDD = page.locator("//select[@id='Skills']")
    await skillDD.selectOption('iPhone')
    const countryDD = page.locator("#countries")
    await countryDD.selectOption('Select Country')
    await page.locator("//span[@role='combobox']").click()
    await page.locator("input[type='search']").fill('India')
    await page.locator("//li[.='India']").click()
    const yearDD = page.locator("select#yearbox")
    yearDD.selectOption({value : '1998'})
    const monthDD = page.getByPlaceholder("Month")
    monthDD.selectOption('September')
    const dateDD = page.locator('#daybox')
    dateDD.selectOption({index : 19})
    await page.locator('#firstpassword').fill('gautham123')
    await page.locator('#secondpassword').fill('gautham123')
    await page.getByRole('button',{name : 'Submit'}).click()



})


