import {By, Builder, Capabilities, WebDriver} from 'selenium-webdriver'
import {Clicker} from './miniPageObjects'

const clicker = new Clicker()
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

test('Legacy button functionality', async () => {
    await clicker.navigate('https://orteil.dashnet.org/cookieclicker/')

    await clicker.click(By.xpath("//div[@id='langSelect-EN']")) 

    await clicker.click(By.xpath("//div[text()='Legacy']"))

    let legacyBtnWorks= clicker.click(By.xpath("//div[text()='Legacy']"))

    expect(legacyBtnWorks).toBeTruthy
})



test('Click the cookie to make cookies', async () => {

    await clicker.navigate('https://orteil.dashnet.org/cookieclicker/')

    await clicker.repeatClick(15, (driver.findElement(By.id("bigCookie"))))
    
    let cookiesMade = await driver.findElement(By.xpath('//div[@id="cookies"]')).getText()
    
    expect(cookiesMade).toBe(15)

})

test('Purchase cursor', async ()=> {
    await clicker.navigate('https://orteil.dashnet.org/cookieclicker/')
    
    await clicker.repeatClick(15, (driver.findElement(By.id("bigCookie"))))

    await clicker.driver.findElement(By.xpath("//div[text()='Cursor']")).click()

    let clickersPurchased = await clicker.driver.findElement(By.xpath("//div[@id='productOwned0']")).getText()

    expect(clickersPurchased).toBe(1)

})

afterAll(async () => {
    await driver.quit()
})