# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: RegisterPageTask.spec.js >> Register page test
- Location: tests\RegisterPageTask.spec.js:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://demo.automationtesting.in/Register.html", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e7] [cursor=pointer]:
        - /url: http://www.automationtesting.in
        - img "image not displaying" [ref=e8]
      - heading "Automation Demo Site" [level=1] [ref=e10]
    - navigation [ref=e11]:
      - list [ref=e14]:
        - listitem [ref=e15]:
          - link "Home" [ref=e16] [cursor=pointer]:
            - /url: Index.html
        - listitem [ref=e17]:
          - link "Register" [ref=e18] [cursor=pointer]:
            - /url: Register.html
        - listitem [ref=e19]:
          - link "WebTable" [ref=e20] [cursor=pointer]:
            - /url: WebTable.html
        - listitem [ref=e21]:
          - link "SwitchTo" [ref=e22] [cursor=pointer]:
            - /url: SwitchTo.html
          - generic [ref=e23]: 
        - listitem [ref=e24]:
          - link "Widgets" [ref=e25] [cursor=pointer]:
            - /url: Widgets.html
          - generic [ref=e26]: 
        - listitem [ref=e27]:
          - link "Interactions" [ref=e28] [cursor=pointer]:
            - /url: Interactions.html
          - generic [ref=e29]: 
        - listitem [ref=e30]:
          - link "Video" [ref=e31] [cursor=pointer]:
            - /url: SwitchTo.html
          - generic [ref=e32]: 
        - listitem [ref=e33]:
          - link "WYSIWYG" [ref=e34] [cursor=pointer]:
            - /url: WYSIWYG.html
          - generic [ref=e35]: 
        - listitem [ref=e36]:
          - link "More" [ref=e37] [cursor=pointer]:
            - /url: "#"
          - generic [ref=e38]: 
        - listitem [ref=e39]:
          - link "Practice Site" [ref=e40] [cursor=pointer]:
            - /url: http://practice.automationtesting.in/
  - generic [ref=e42]:
    - heading "Register" [level=2] [ref=e43]
    - generic [ref=e44]:
      - insertion [ref=e46]
      - generic [ref=e49]:
        - generic [ref=e50]:
          - generic [ref=e51]: Full Name*
          - textbox "First Name" [ref=e53]
          - textbox "Last Name" [ref=e55]
        - generic [ref=e56]:
          - generic [ref=e57]: Address
          - textbox [ref=e59]
        - generic [ref=e60]:
          - generic [ref=e61]: Email address*
          - textbox [ref=e63]
        - generic [ref=e64]:
          - generic [ref=e65]: Phone*
          - textbox [ref=e67]
        - generic [ref=e68]:
          - generic [ref=e69]: Gender*
          - generic [ref=e70]:
            - generic [ref=e71]:
              - radio "Male" [ref=e72]
              - text: Male
            - generic [ref=e73]:
              - radio "FeMale" [ref=e74]
              - text: FeMale
        - generic [ref=e75]:
          - generic [ref=e76]: Hobbies
          - generic [ref=e77]:
            - generic [ref=e78]:
              - checkbox [ref=e79]
              - generic [ref=e80]: Cricket
            - generic [ref=e81]:
              - checkbox [ref=e82]
              - generic [ref=e83]: Movies
            - generic [ref=e84]:
              - checkbox [ref=e85]
              - generic [ref=e86]: Hockey
        - generic [ref=e87]: Languages
        - generic [ref=e92]:
          - generic [ref=e93]: Skills
          - combobox [ref=e95]:
            - option "Select Skills" [selected]
            - option "Adobe InDesign"
            - option "Adobe Photoshop"
            - option "Analytics"
            - option "Android"
            - option "APIs"
            - option "Art Design"
            - option "AutoCAD"
            - option "Backup Management"
            - option "C"
            - option "C++"
            - option "Certifications"
            - option "Client Server"
            - option "Client Support"
            - option "Configuration"
            - option "Content Managment"
            - option "Content Management Systems (CMS)"
            - option "Corel Draw"
            - option "Corel Word Perfect"
            - option "CSS"
            - option "Data Analytics"
            - option "Desktop Publishing"
            - option "Design"
            - option "Diagnostics"
            - option "Documentation"
            - option "End User Support"
            - option "Email"
            - option "Engineering"
            - option "Excel"
            - option "FileMaker Pro"
            - option "Fortran"
            - option "HTML"
            - option "Implementation"
            - option "Installation"
            - option "Internet"
            - option "iOS"
            - option "iPhone"
            - option "Linux"
            - option "Java"
            - option "Javascript"
            - option "Mac"
            - option "Matlab"
            - option "Maya"
            - option "Microsoft Excel"
            - option "Microsoft Office"
            - option "Microsoft Outlook"
            - option "Microsoft Publisher"
            - option "Microsoft Word"
            - option "Microsoft Visual"
            - option "Mobile"
            - option "MySQL"
            - option "Networks"
            - option "Open Source Software"
            - option "Oracle"
            - option "Perl"
            - option "PHP"
            - option "Presentations"
            - option "Processing"
            - option "Programming"
            - option "PT Modeler"
            - option "Python"
            - option "QuickBooks"
            - option "Ruby"
            - option "Shade"
            - option "Software"
            - option "Spreadsheet"
            - option "SQL"
            - option "Support"
            - option "Systems Administration"
            - option "Tech Support"
            - option "Troubleshooting"
            - option "Unix"
            - option "UI / UX"
            - option "Web Page Design"
            - option "Windows"
            - option "Word Processing"
            - option "XML"
            - option "XHTML"
        - generic [ref=e96]:
          - generic [ref=e97]: Country*
          - combobox [ref=e99]:
            - option "Select Country" [selected]
        - generic [ref=e100]:
          - generic [ref=e101]: "Select Country :"
          - generic [ref=e102]:
            - combobox [aria-hidden] [ref=e103]
            - combobox [ref=e106] [cursor=pointer]
        - generic [ref=e107]:
          - generic [ref=e108]: Date Of Birth
          - combobox [ref=e110]:
            - option "year" [selected]
            - option "1916"
            - option "1917"
            - option "1918"
            - option "1919"
            - option "1920"
            - option "1921"
            - option "1922"
            - option "1923"
            - option "1924"
            - option "1925"
            - option "1926"
            - option "1927"
            - option "1928"
            - option "1929"
            - option "1930"
            - option "1931"
            - option "1932"
            - option "1933"
            - option "1934"
            - option "1935"
            - option "1936"
            - option "1937"
            - option "1938"
            - option "1939"
            - option "1940"
            - option "1941"
            - option "1942"
            - option "1943"
            - option "1944"
            - option "1945"
            - option "1946"
            - option "1947"
            - option "1948"
            - option "1949"
            - option "1950"
            - option "1951"
            - option "1952"
            - option "1953"
            - option "1954"
            - option "1955"
            - option "1956"
            - option "1957"
            - option "1958"
            - option "1959"
            - option "1960"
            - option "1961"
            - option "1962"
            - option "1963"
            - option "1964"
            - option "1965"
            - option "1966"
            - option "1967"
            - option "1968"
            - option "1969"
            - option "1970"
            - option "1971"
            - option "1972"
            - option "1973"
            - option "1974"
            - option "1975"
            - option "1976"
            - option "1977"
            - option "1978"
            - option "1979"
            - option "1980"
            - option "1981"
            - option "1982"
            - option "1983"
            - option "1984"
            - option "1985"
            - option "1986"
            - option "1987"
            - option "1988"
            - option "1989"
            - option "1990"
            - option "1991"
            - option "1992"
            - option "1993"
            - option "1994"
            - option "1995"
            - option "1996"
            - option "1997"
            - option "1998"
            - option "1999"
            - option "2000"
            - option "2001"
            - option "2002"
            - option "2003"
            - option "2004"
            - option "2005"
            - option "2006"
            - option "2007"
            - option "2008"
            - option "2009"
            - option "2010"
            - option "2011"
            - option "2012"
            - option "2013"
            - option "2014"
            - option "2015"
          - combobox [ref=e112]:
            - option "Month" [selected]
            - option "January"
            - option "February"
            - option "March"
            - option "April"
            - option "May"
            - option "June"
            - option "July"
            - option "August"
            - option "September"
            - option "October"
            - option "November"
            - option "December"
          - combobox [ref=e114]:
            - option "Day" [selected]
            - option "1"
            - option "2"
            - option "3"
            - option "4"
            - option "5"
            - option "6"
            - option "7"
            - option "8"
            - option "9"
            - option "10"
            - option "11"
            - option "12"
            - option "13"
            - option "14"
            - option "15"
            - option "16"
            - option "17"
            - option "18"
            - option "19"
            - option "20"
            - option "21"
            - option "22"
            - option "23"
            - option "24"
            - option "25"
            - option "26"
            - option "27"
            - option "28"
            - option "29"
            - option "30"
            - option "31"
        - generic [ref=e115]:
          - generic [ref=e116]: Password
          - textbox [ref=e118]
        - generic [ref=e119]:
          - generic [ref=e120]: Confirm Password
          - textbox [ref=e122]
        - generic [ref=e123]:
          - button "Submit" [ref=e124] [cursor=pointer]
          - button "Refresh" [ref=e125] [cursor=pointer]
      - generic [ref=e126]:
        - generic [ref=e127]: Photo
        - button "Choose File" [ref=e131]
  - contentinfo [ref=e132]:
    - generic [ref=e134]:
      - generic [ref=e135]:
        - text: "\"@ 2016\""
        - link "Automation Testing" [ref=e136] [cursor=pointer]:
          - /url: "#"
        - text: "\"All Rights Reserved.\""
      - generic [ref=e137]:
        - link "" [ref=e138] [cursor=pointer]:
          - /url: https://www.facebook.com/automationtesting2016/
        - link "" [ref=e140] [cursor=pointer]:
          - /url: https://twitter.com/krishnasakinala
        - link "" [ref=e142] [cursor=pointer]:
          - /url: https://www.linkedin.com/nhome/?trk=hb_signin
        - link "" [ref=e144] [cursor=pointer]:
          - /url: https://plus.google.com/105286300926085335367
        - link "" [ref=e146] [cursor=pointer]:
          - /url: https://www.youtube.com/channel/UCmQRa3pWM9zsB474URz8ESg
```

# Test source

```ts
  1  | import {test} from '@playwright/test'
  2  | 
  3  | 
  4  | test('Register page test',async({page})=>{
  5  | 
> 6  |     await page.goto('https://demo.automationtesting.in/Register.html')
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  7  |     await page.getByPlaceholder('First Name').fill('Martin')
  8  |     await page.getByPlaceholder('Last Name').fill('Jerome S')
  9  |     await page.locator("//textarea[@ng-model='Adress']").fill('No: 452/4, Adaikala Annai nagar, Ponmalaipatti, Trichy - 620004')
  10 |     await page.locator("input[type='email']").fill('abc@gmail.com')
  11 |     await page.locator("input[ng-model='Phone']").fill('78393939303')
  12 |     await page.locator("input[value='Male']").check()
  13 |     await page.locator('#checkbox1').click()
  14 |     await page.locator('#msdd').click()
  15 |     await page.locator("//a[.='Danish']").click()
  16 |     await page.locator("//a[.='Finnish']").click()
  17 |     await page.locator("//label[.='Languages']").click()
  18 |     await page.keyboard.press('Escape')
  19 | 
  20 |     await page.waitForTimeout(10000)
  21 |     const skillDD = page.locator("//select[@id='Skills']")
  22 |     await skillDD.selectOption('iPhone')
  23 |     const countryDD = page.locator("#countries")
  24 |     await countryDD.selectOption('Select Country')
  25 |     await page.locator("//span[@role='combobox']").click()
  26 |     await page.locator("input[type='search']").fill('India')
  27 |     await page.locator("//li[.='India']").click()
  28 |     const yearDD = page.locator("select#yearbox")
  29 |     yearDD.selectOption({value : '1998'})
  30 |     const monthDD = page.getByPlaceholder("Month")
  31 |     monthDD.selectOption('September')
  32 |     const dateDD = page.locator('#daybox')
  33 |     dateDD.selectOption({index : 19})
  34 |     await page.locator('#firstpassword').fill('gautham123')
  35 |     await page.locator('#secondpassword').fill('gautham123')
  36 |     await page.getByRole('button',{name : 'Submit'}).click()
  37 | 
  38 | 
  39 | 
  40 | })
  41 | 
  42 | 
  43 | 
```