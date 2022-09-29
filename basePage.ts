//Below are dependencies imported from the selenium-webdriver to be available to use in this page for relevant and necessary code.
import {Builder, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver'
const chromedriver = require('chromedriver')

interface Options {
    driver?: WebDriver;
    url?: string;
}

export class BasePage {
    driver: WebDriver
    url: string

    constructor(options?: Options) {
        if(options && options.driver) this.driver = options.driver
        else
        this.driver = new Builder().withCapabilities(Capabilities.chrome()).build()
        if(options && options.url) this.url = options.url
    }
    //This method below allows the test automation to navigate to the url set forth, it also makes provisions in the case that a url is not provided with a promise.reject
    async navigate(url?: string): Promise<void> {
        if (url) return await this.driver.get(url)
        else if (this.url) return await this.driver.get(this.url)
        else return Promise.reject('You need a url to visit the page please add one in the page objects or in your test')
    }
     //This method below allows the test automation to go to a specified element and show that it is present, returning that specified element
    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy))
        let element = await this.driver.findElement(elementBy)
        await this.driver.wait(until.elementIsVisible(element))
        return element
    }
    // The method below is allowing the test automation to click a specified element.
    async click(elementBy: By): Promise<void> {
        return(await this.getElement(elementBy)).click()
    }  

    async setInput(elementBy:By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy)
        await input.clear()
        return input.sendKeys(keys)
    }

    async getText(elementBy: By): Promise<string> {
        return (await this.getElement(elementBy)).getText()
    }

    async getAttribute(elementBy: By, attribute: string) {
        return (await this.getElement(elementBy)).getAttribute(attribute)
    }
}