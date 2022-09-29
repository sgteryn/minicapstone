// import {Builder, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver'

require('./basePage')
import {By} from 'selenium-webdriver'

const chromedriver = require('chromedriver')

import {BasePage} from './basePage'


export class Clicker extends BasePage {
//Locators Here
constructor() {
super({url: 'https://orteil.dashnet.org/cookieclicker/'})
}
//methods
}


// interface Options {
//     driver?: WebDriver;
//     url?: string;
// }

// export class miniPageObjects {
//     driver: WebDriver
//     url: string

//     constructor(options?: Options) {
//         if(options && options.driver) this.driver = options.driver
//         else
//         this.driver = new Builder().withCapabilities(Capabilities.chrome()).build()
//         if(options && options.url) this.url = options.url
//     }

// }