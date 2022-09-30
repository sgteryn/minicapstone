import {By, Builder, Capabilities, WebDriver, until} from 'selenium-webdriver'
import {Clicker} from './miniPageObjects'

const clicker = new Clicker()
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()


test('Legacy button functionality', async () => {
    await clicker.navigate('https://orteil.dashnet.org/cookieclicker/')

    await clicker.click(By.xpath("//div[@id='langSelect-EN']")) 

    await clicker.click((By.xpath("//*[@id='legacyButton']"))); 
    clicker.driver.wait(until.stalenessOf(clicker.driver.wait(until.elementLocated(By.xpath("//*[@id='legacyButton']")))));
    

    let legacyBtnWorks= clicker.driver.wait(until.elementLocated(By.xpath("//*[@id='legacyButton']")))

    expect(legacyBtnWorks).toBeTruthy
    
})

test('Ascend button present', async () => {
    // await clicker.navigate('https://orteil.dashnet.org/cookieclicker/')

    // await clicker.click(By.xpath("//div[@id='langSelect-EN']")) 

    // await clicker.driver.wait(until.elementLocated(By.xpath("//*[@id='legacyButton']"))).click()

    await clicker.driver.findElement(By.xpath("//*[@id='ascendBG']"))

    let AscendButtonPresent = clicker.driver.findElement(By.xpath("//*[@id='ascendBG']"))

    expect(AscendButtonPresent).toBeTruthy()
})


test('Click the cookie to make cookies', async () => {

    await clicker.navigate('https://orteil.dashnet.org/cookieclicker/')

    await clicker.driver.findElement(By.xpath("//button[@id='bigCookie']")).click()
    
    let cookiesMade = await driver.findElement(By.xpath('//div[@id="cookieNumbers"]')).getText()
    
    expect(cookiesMade).toBe(1)

})

test('Purchase cursor', async ()=> {
    await clicker.navigate('https://orteil.dashnet.org/cookieclicker/')
    
    // await clicker.repeatClick(15, (driver.findElement(By.xpath("//button[@id='bigCookie']"))))

    await clicker.driver.findElement(By.xpath("//div[text()='Cursor']")).click()

    let clickersPurchased = await clicker.driver.findElement(By.xpath("//div[@id='productOwned0']")).getText()

    expect(clickersPurchased).toBe(1)

})

afterAll(async () => {
    await clicker.driver.quit()
})