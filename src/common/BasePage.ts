import { WebElement, element, by, browser, protractor } from "protractor";
import { BaseTest } from "./BaseTest";
import{  CutomLogger} from "../common/Logger"


export class Basepage extends BaseTest {
    //select element and check if visible in the current page
    ElementContainer(elementID: string, loctype: string,class1?:string,value?:string) {
            if (loctype === "css") {
                return element.all(by.css(elementID)).first();
            }
            else if (loctype === "xpath") {
                return element(by.xpath(elementID));
            }
            else if (loctype === "id") {
                return element(by.id(elementID));
            }
            else if (loctype === "model") {
                return element(by.model(elementID));
            }
            else if (loctype === "buttonText") {
                return element(by.buttonText(elementID));
            }
            else if (loctype === "tagName") {
                return element(by.tagName(elementID));
            }
            else if (loctype === "binding") {
                return element(by.binding(elementID));
            }
            else if (loctype === "repeater") {
                return element.all(by.repeater(elementID));
            }
            else if (loctype === "className") {
                return element(by.className(elementID));
            }
            else if (loctype === "LinkText") {
                return element(by.linkText(elementID));
            }
            else if (loctype === "cssContainingText") {
                return element(by.cssContainingText(class1,value));
            }
            else{
                console.log("Error")
            }
      
    }

    //clicks the element
    clicker(elementID: string, loctype: string) {
        let checker = this.ElementContainer(elementID, loctype);
        //checker.click();
        if (expect(checker.isEnabled()).toBe(true)) {
            checker.click();
            CutomLogger.logger.log('info',"Button was clicked")
        }
    }
    // //click multiple element present
    // clickerM(elementID: string, loctype: string,order:number) {
    //     let checker = this.ElementContainer(elementID, loctype);
    //     //checker.frist().click();
    //     if (expect(checker.isEnabled()).toBe(true)) {
    //         checker.order().click();
    //     }

    // }

    //enter text in textbox
    enterText(elementID: string, loctype: string, value: string) {
        let checker = this.ElementContainer(elementID, loctype);
        checker.sendKeys(value);
        CutomLogger.logger.log('info',value +" "+ "was entered")
     }


    

    //clear text in textbox
    clearText(elementID: string, loctype: string) {
        let checker = this.ElementContainer(elementID, loctype);
        checker.clear();
        CutomLogger.logger.log('info',"Text was cleared")
    }


    //select from dropdown list, using chain locator
    selectdropdown(elementID: string, loctype: string, value: string) {
        let checker = this.ElementContainer(elementID, loctype);
        checker.$(value).click();
        CutomLogger.logger.log('info',"Value was selected")
    }

    //select from dropdown list, using chain locator - text present in the dropdown - for csscontaining text
    selectdropdowncssText(elementID: string, loctype: string,class1:string,value:string) {
        let checker = this.ElementContainer(elementID, loctype,class1,value);
        checker.click()
        CutomLogger.logger.log('info',"Value was selected")
    }

    //scroll to the element desired or hover
    scrollWeb(elementID: string, loctype: string) {
        let checker = this.ElementContainer(elementID, loctype);
        browser.actions().mouseMove(checker).perform();
        //browser.actions().mouseMove(element(by.id("adding-a-custom-filter"))).perform();
    }

    

    //validate text inside the element
    verifyTextPresentinElement(elementID: string, loctype: string, objectName: string){
        let checker = this.ElementContainer(elementID, loctype);
        // checker.getText().then(function(txt){
        //     expect(txt).toBe(objectName)
        //     CutomLogger.logger.log('info',objectName +" "+ "was Present in the element")
        //     //console.log(txt)
        // })
        expect(checker.getText()).toBe(objectName);
        CutomLogger.logger.log('info',objectName +" "+ "was Present in the element")
    }


    //working progress - Validation of element in the page
    verifyELementPresent(elementID: string, loctype: string, objectName: string) {
        let checker = this.ElementContainer(elementID, loctype);
        //expect(checker.isDisplayed()).toBe("");;
        if (checker.isDisplayed()) {
            expect(checker.getText()).toBe(objectName)
            // checker.getText().then(function (text) {
            //     if (expect(objectName).toBe(text)) {
            //     }
            // })

            //    expect (checker.getText()).toBe(objectName).then(function(){
            //        console.log(objectName + " "+ "element holder is present in the page")
            //    })
        }
    }

    alert(text:string){
        browser.sleep(2000)
        if(text==="Accept")
        browser.switchTo().alert().accept();
        else if(text==="Decline"){
        browser.switchTo().alert().dismiss()    
        }
    }

//Working progress - search table in web
    search_table(elementID: string, loctype: string, objectName?: string){
        let checker = this.ElementContainer(elementID,loctype)
        checker.each(function (row) {
            let cells = row.$$('td')
            cells.get(0).getText().then(function (txt: any) {
              if (txt === objectName) {
                cells.get(4).$$("button[ng-click='deleteCust(cust)']").click()
                CutomLogger.logger.log('info',"Button was clicked")
                // cells.get(1).$$("span[class='ng-binding']").getText().then(function (text) {
                //     console.log(text)
                // })  
            }
            })
          })
    }

}
