"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const BaseTest_1 = require("./BaseTest");
const Logger_1 = require("../common/Logger");
class Basepage extends BaseTest_1.BaseTest {
    //select element and check if visible in the current page
    ElementContainer(elementID, loctype, class1, value) {
        if (loctype === "css") {
            return protractor_1.element.all(protractor_1.by.css(elementID)).first();
        }
        else if (loctype === "xpath") {
            return protractor_1.element(protractor_1.by.xpath(elementID));
        }
        else if (loctype === "id") {
            return protractor_1.element(protractor_1.by.id(elementID));
        }
        else if (loctype === "model") {
            return protractor_1.element(protractor_1.by.model(elementID));
        }
        else if (loctype === "buttonText") {
            return protractor_1.element(protractor_1.by.buttonText(elementID));
        }
        else if (loctype === "tagName") {
            return protractor_1.element(protractor_1.by.tagName(elementID));
        }
        else if (loctype === "binding") {
            return protractor_1.element(protractor_1.by.binding(elementID));
        }
        else if (loctype === "repeater") {
            return protractor_1.element.all(protractor_1.by.repeater(elementID));
        }
        else if (loctype === "className") {
            return protractor_1.element(protractor_1.by.className(elementID));
        }
        else if (loctype === "LinkText") {
            return protractor_1.element(protractor_1.by.linkText(elementID));
        }
        else if (loctype === "cssContainingText") {
            return protractor_1.element(protractor_1.by.cssContainingText(class1, value));
        }
        else {
            console.log("Error");
        }
    }
    //clicks the element
    clicker(elementID, loctype) {
        let checker = this.ElementContainer(elementID, loctype);
        //checker.click();
        if (expect(checker.isEnabled()).toBe(true)) {
            checker.click();
            Logger_1.CutomLogger.logger.log('info', "Button was clicked");
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
    enterText(elementID, loctype, value) {
        let checker = this.ElementContainer(elementID, loctype);
        checker.sendKeys(value);
        Logger_1.CutomLogger.logger.log('info', value + " " + "was entered");
    }
    //clear text in textbox
    clearText(elementID, loctype) {
        let checker = this.ElementContainer(elementID, loctype);
        checker.clear();
        Logger_1.CutomLogger.logger.log('info', "Text was cleared");
    }
    //select from dropdown list, using chain locator
    selectdropdown(elementID, loctype, value) {
        let checker = this.ElementContainer(elementID, loctype);
        checker.$(value).click();
        Logger_1.CutomLogger.logger.log('info', "Value was selected");
    }
    //select from dropdown list, using chain locator - text present in the dropdown - for csscontaining text
    selectdropdowncssText(elementID, loctype, class1, value) {
        let checker = this.ElementContainer(elementID, loctype, class1, value);
        checker.click();
        Logger_1.CutomLogger.logger.log('info', "Value was selected");
    }
    //scroll to the element desired or hover
    scrollWeb(elementID, loctype) {
        let checker = this.ElementContainer(elementID, loctype);
        protractor_1.browser.actions().mouseMove(checker).perform();
        //browser.actions().mouseMove(element(by.id("adding-a-custom-filter"))).perform();
    }
    //validate text inside the element
    verifyTextPresentinElement(elementID, loctype, objectName) {
        let checker = this.ElementContainer(elementID, loctype);
        // checker.getText().then(function(txt){
        //     expect(txt).toBe(objectName)
        //     CutomLogger.logger.log('info',objectName +" "+ "was Present in the element")
        //     //console.log(txt)
        // })
        expect(checker.getText()).toBe(objectName);
        Logger_1.CutomLogger.logger.log('info', objectName + " " + "was Present in the element");
    }
    //working progress - Validation of element in the page
    verifyELementPresent(elementID, loctype, objectName) {
        let checker = this.ElementContainer(elementID, loctype);
        //expect(checker.isDisplayed()).toBe("");;
        if (checker.isDisplayed()) {
            expect(checker.getText()).toBe(objectName);
            // checker.getText().then(function (text) {
            //     if (expect(objectName).toBe(text)) {
            //     }
            // })
            //    expect (checker.getText()).toBe(objectName).then(function(){
            //        console.log(objectName + " "+ "element holder is present in the page")
            //    })
        }
    }
    alert(text) {
        protractor_1.browser.sleep(2000);
        if (text === "Accept")
            protractor_1.browser.switchTo().alert().accept();
        else if (text === "Decline") {
            protractor_1.browser.switchTo().alert().dismiss();
        }
    }
    //Working progress - search table in web
    search_table(elementID, loctype, objectName) {
        let checker = this.ElementContainer(elementID, loctype);
        checker.each(function (row) {
            let cells = row.$$('td');
            cells.get(0).getText().then(function (txt) {
                if (txt === objectName) {
                    cells.get(4).$$("button[ng-click='deleteCust(cust)']").click();
                    Logger_1.CutomLogger.logger.log('info', "Button was clicked");
                    // cells.get(1).$$("span[class='ng-binding']").getText().then(function (text) {
                    //     console.log(text)
                    // })  
                }
            });
        });
    }
}
exports.Basepage = Basepage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL0Jhc2VQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQTBFO0FBQzFFLHlDQUFzQztBQUN0Qyw2Q0FBNkM7QUFHN0MsTUFBYSxRQUFTLFNBQVEsbUJBQVE7SUFDbEMseURBQXlEO0lBQ3pELGdCQUFnQixDQUFDLFNBQWlCLEVBQUUsT0FBZSxFQUFDLE1BQWMsRUFBQyxLQUFhO1FBQ3hFLElBQUksT0FBTyxLQUFLLEtBQUssRUFBRTtZQUNuQixPQUFPLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNqRDthQUNJLElBQUksT0FBTyxLQUFLLE9BQU8sRUFBRTtZQUMxQixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO2FBQ0ksSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3ZCLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDcEM7YUFDSSxJQUFJLE9BQU8sS0FBSyxPQUFPLEVBQUU7WUFDMUIsT0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUN2QzthQUNJLElBQUksT0FBTyxLQUFLLFlBQVksRUFBRTtZQUMvQixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQzVDO2FBQ0ksSUFBSSxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQzVCLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDekM7YUFDSSxJQUFJLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDNUIsT0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUN6QzthQUNJLElBQUksT0FBTyxLQUFLLFVBQVUsRUFBRTtZQUM3QixPQUFPLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUM5QzthQUNJLElBQUksT0FBTyxLQUFLLFdBQVcsRUFBRTtZQUM5QixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQzNDO2FBQ0ksSUFBSSxPQUFPLEtBQUssVUFBVSxFQUFFO1lBQzdCLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDMUM7YUFDSSxJQUFJLE9BQU8sS0FBSyxtQkFBbUIsRUFBRTtZQUN0QyxPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3REO2FBQ0c7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQ3ZCO0lBRVQsQ0FBQztJQUVELG9CQUFvQjtJQUNwQixPQUFPLENBQUMsU0FBaUIsRUFBRSxPQUFlO1FBQ3RDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDeEQsa0JBQWtCO1FBQ2xCLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4QyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDaEIsb0JBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxvQkFBb0IsQ0FBQyxDQUFBO1NBQ3REO0lBQ0wsQ0FBQztJQUNELG1DQUFtQztJQUNuQyw4REFBOEQ7SUFDOUQsK0RBQStEO0lBQy9ELGlDQUFpQztJQUNqQyxvREFBb0Q7SUFDcEQsbUNBQW1DO0lBQ25DLFFBQVE7SUFFUixJQUFJO0lBRUosdUJBQXVCO0lBQ3ZCLFNBQVMsQ0FBQyxTQUFpQixFQUFFLE9BQWUsRUFBRSxLQUFhO1FBQ3ZELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDeEQsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixvQkFBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEtBQUssR0FBRSxHQUFHLEdBQUUsYUFBYSxDQUFDLENBQUE7SUFDM0QsQ0FBQztJQUtGLHVCQUF1QjtJQUN2QixTQUFTLENBQUMsU0FBaUIsRUFBRSxPQUFlO1FBQ3hDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDeEQsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hCLG9CQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsa0JBQWtCLENBQUMsQ0FBQTtJQUNyRCxDQUFDO0lBR0QsZ0RBQWdEO0lBQ2hELGNBQWMsQ0FBQyxTQUFpQixFQUFFLE9BQWUsRUFBRSxLQUFhO1FBQzVELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDeEQsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6QixvQkFBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLG9CQUFvQixDQUFDLENBQUE7SUFDdkQsQ0FBQztJQUVELHdHQUF3RztJQUN4RyxxQkFBcUIsQ0FBQyxTQUFpQixFQUFFLE9BQWUsRUFBQyxNQUFhLEVBQUMsS0FBWTtRQUMvRSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBQyxNQUFNLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDckUsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ2Ysb0JBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxvQkFBb0IsQ0FBQyxDQUFBO0lBQ3ZELENBQUM7SUFFRCx3Q0FBd0M7SUFDeEMsU0FBUyxDQUFDLFNBQWlCLEVBQUUsT0FBZTtRQUN4QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3hELG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQy9DLGtGQUFrRjtJQUN0RixDQUFDO0lBSUQsa0NBQWtDO0lBQ2xDLDBCQUEwQixDQUFDLFNBQWlCLEVBQUUsT0FBZSxFQUFFLFVBQWtCO1FBQzdFLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDeEQsd0NBQXdDO1FBQ3hDLG1DQUFtQztRQUNuQyxtRkFBbUY7UUFDbkYseUJBQXlCO1FBQ3pCLEtBQUs7UUFDTCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNDLG9CQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsVUFBVSxHQUFFLEdBQUcsR0FBRSw0QkFBNEIsQ0FBQyxDQUFBO0lBQ2hGLENBQUM7SUFHRCxzREFBc0Q7SUFDdEQsb0JBQW9CLENBQUMsU0FBaUIsRUFBRSxPQUFlLEVBQUUsVUFBa0I7UUFDdkUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN4RCwwQ0FBMEM7UUFDMUMsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDdkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUMxQywyQ0FBMkM7WUFDM0MsMkNBQTJDO1lBQzNDLFFBQVE7WUFDUixLQUFLO1lBRUwsa0VBQWtFO1lBQ2xFLGdGQUFnRjtZQUNoRixRQUFRO1NBQ1g7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLElBQVc7UUFDYixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNuQixJQUFHLElBQUksS0FBRyxRQUFRO1lBQ2xCLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDL0IsSUFBRyxJQUFJLEtBQUcsU0FBUyxFQUFDO1lBQ3pCLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUE7U0FDbkM7SUFDTCxDQUFDO0lBRUwsd0NBQXdDO0lBQ3BDLFlBQVksQ0FBQyxTQUFpQixFQUFFLE9BQWUsRUFBRSxVQUFtQjtRQUNoRSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3RELE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ3RCLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDeEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFRO2dCQUM1QyxJQUFJLEdBQUcsS0FBSyxVQUFVLEVBQUU7b0JBQ3RCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7b0JBQzlELG9CQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsb0JBQW9CLENBQUMsQ0FBQTtvQkFDbkQsK0VBQStFO29CQUMvRSx3QkFBd0I7b0JBQ3hCLE9BQU87aUJBQ1Y7WUFDRCxDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ1IsQ0FBQztDQUVKO0FBOUpELDRCQThKQyJ9