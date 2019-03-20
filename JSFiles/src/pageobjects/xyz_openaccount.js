"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../common/BasePage");
class xyzopenaccount extends BasePage_1.Basepage {
    select_name() {
        this.selectdropdowncssText('option', "cssContainingText", "option", "Anna Kern");
    }
    select_currency() {
        this.selectdropdowncssText('option', 'cssContainingText', "option", "Dollar");
    }
    click_process() {
        this.clicker("//button[@type='submit']", "xpath");
    }
    pop_up(value) {
        this.alert(value);
    }
    click_customer() {
        this.clicker("//button[contains(text(),'Customers')]", "xpath");
    }
}
exports.xyzopenaccount = xyzopenaccount;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHl6X29wZW5hY2NvdW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VvYmplY3RzL3h5el9vcGVuYWNjb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUE4QztBQUc5QyxNQUFhLGNBQWUsU0FBUSxtQkFBUTtJQUV4QyxXQUFXO1FBQ1AsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBQyxRQUFRLEVBQUMsV0FBVyxDQUFDLENBQUE7SUFDOUUsQ0FBQztJQUVMLGVBQWU7UUFDWCxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxFQUFFLG1CQUFtQixFQUFDLFFBQVEsRUFBQyxRQUFRLENBQUMsQ0FBQTtJQUMzRSxDQUFDO0lBRUwsYUFBYTtRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsMEJBQTBCLEVBQUMsT0FBTyxDQUFDLENBQUE7SUFDcEQsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFZO1FBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNyQixDQUFDO0lBRUQsY0FBYztRQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsd0NBQXdDLEVBQUMsT0FBTyxDQUFDLENBQUE7SUFDbEUsQ0FBQztDQUVKO0FBdEJELHdDQXNCQyJ9