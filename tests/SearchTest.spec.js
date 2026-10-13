
import {test} from '@playwright/test'
import { Loginpage } from '../Page/Loginpage'
import { Searchpage } from '../Page/SearchPage'


test('SearchPage Test', async({page})=>{

    const login = new Loginpage(page)
    const search = new Searchpage(page)

    await login.launchUrl()
    await login.enterUsername('MartinJerome')
    await login.enterPassword('G@utham1918')
    await login.clickLoginButton()

    await search.selectLocation('Brisbane')
    await search.selectHotel('Hotel Cornice')
    await search.selectRoomType('Double')
    await search.numberOfRoomsDD('2 - Two')
    await search.checkInDate('10112026')
    await search.checkOutDate('15112026')
    await search.adultCountDD('2 - Two')
    await search.childCountDD('1 - One')
    await search.clickSearchButton()
    await search.clickResetButton()
})
