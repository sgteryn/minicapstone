import {By, Builder, Capabilities, WebDriver, until} from 'selenium-webdriver'
import {Clicker} from './miniPageObjects'

const clicker = new Clicker()


test('Click the cookie to make cookies', async () => {

    await clicker.navigate('https://orteil.dashnet.org/cookieclicker/')

    await clicker.click(clicker.englishBtn)
    

 
    await clicker.repeatClick(15, (clicker.cookie))


    await clicker.click(By.xpath("//*[@id='statsButton']"))

    await clicker.getElement((By.xpath("//*[@id='statsGeneral']//child::div[1]")))
    clicker.driver.wait(until.stalenessOf(clicker.driver.wait(until.elementLocated((By.xpath("//*[@id='statsGeneral']//child::div[1]"))))));

    
    let cookiesInBank = await clicker.driver.findElement(By.xpath("//*[@id='statsGeneral']//child::div[1]")).getText()
    
    expect(cookiesInBank).toContain("15")

})

test('Purchase cursor', async ()=> {
    
                   

    await clicker.driver.findElement(clicker.buyCursorBtn).click()

    let clickersPurchased = await clicker.driver.findElement(By.xpath("//div[@id='productOwned0']")).getText()

    expect(clickersPurchased).toBe(1)

})


test('Legacy button functionality', async () => {
   

    await clicker.click(clicker.legacyBtn); 
    clicker.driver.wait(until.stalenessOf(clicker.driver.wait(until.elementLocated(clicker.legacyBtn))));
    

    let legacyBtnWorks= clicker.driver.wait(until.elementLocated(clicker.legacyBtn))

    expect(legacyBtnWorks).toBeTruthy
    
})

test('Ascend button present', async () => {
   
    await clicker.driver.findElement(clicker.ascendBtn)

    let AscendButtonPresent = clicker.driver.findElement(clicker.ascendBtn)

    expect(AscendButtonPresent).toBeTruthy()
})

afterAll(async () => {
    await clicker.driver.quit()
})