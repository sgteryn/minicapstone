import {By} from 'selenium-webdriver'
import {BasePage} from './basePage'
// import { id } from './jest.config'


export class Clicker extends BasePage {
//Locators Here

englishBtn: By = By.xpath("//div[@id='langSelect-EN']")
cookie: By = By.id("bigCookie")
legacyBtn: By = By.xpath("//div[text()='Legacy']")
buyCursorBtn: By = By.xpath("//div[text()='Cursor']")


constructor() {
super({url: 'https://orteil.dashnet.org/cookieclicker/'})
}
//methods

async repeatClick(num, clickItem) {
    for (let i = 0; i < num; i++){
        await this.click(clickItem)
    }
}

}
