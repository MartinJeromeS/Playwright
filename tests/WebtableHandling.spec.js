
import {test} from "@playwright/test"

test('Printing the content frommWebTable',async({page})=>{

    await page.goto('https://assertqa.com/practice/webtables')
    const table = page.locator("table[id='employees-table']")

    const header = await page.locator("table[id='employees-table'] thead").allTextContents()
    console.log("The Table's header are : ", header)

    const tableContent = await page.locator("table[id='employees-table'] tbody").allTextContents()
    console.log("The entire table content are : ", tableContent)

    const employee3_Data = await page.locator("table[id='employees-table'] tbody tr:nth-child(3)").allTextContents()
    console.log("The data in 3rd row is : ", employee3_Data)

    const salary = await page.locator("table[id='employees-table'] tbody tr td:nth-child(6)").allTextContents()
    console.log("Salary of all the employees are : ", salary)


    

})

