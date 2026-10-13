import {test} from '@playwright/test'
import { Loginpage } from '../Page/Loginpage'

test('LoginPage Test', async({page})=>{

    const login = new Loginpage(page)

    await login.launchUrl()
    await login.enterUsername('MartinJerome')
    await login.enterPassword('G@utham1918')
    await login.clickLoginButton()

})