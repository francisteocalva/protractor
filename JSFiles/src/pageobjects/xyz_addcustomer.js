"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../common/BasePage");
class xyzaddcustomer extends BasePage_1.Basepage {
    add_customer_tab() {
        this.clicker("//button[contains(text(),'Add Customer')]", "xpath");
    }
    enter_first_name(column) {
        let value = this.GetDataExcel(column);
        this.enterText("fName", "model", value);
    }
    enter_last_name(column) {
        let value = this.GetDataExcel(column);
        this.enterText("lName", "model", value);
    }
    post_cd(column) {
        let value = this.GetDataExcel(column);
        this.enterText("postCd", "model", value);
    }
    addcustomerbutton() {
        this.clicker("button[type='submit']", "css");
        //this.clicker("label[class='mat-checkbox-layout']", "css")
    }
    pop_up(value) {
        this.alert(value);
    }
    click_open_account() {
        this.clicker("//button[contains(text(),'Open Account')]", "xpath");
    }
}
exports.xyzaddcustomer = xyzaddcustomer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHl6X2FkZGN1c3RvbWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VvYmplY3RzL3h5el9hZGRjdXN0b21lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUE4QztBQUU5QyxNQUFhLGNBQWUsU0FBUSxtQkFBUTtJQUV4QyxnQkFBZ0I7UUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLDJDQUEyQyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ3RFLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxNQUFjO1FBQzNCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQzNDLENBQUM7SUFFRCxlQUFlLENBQUMsTUFBYztRQUMxQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBRUQsT0FBTyxDQUFDLE1BQWM7UUFDbEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVELGlCQUFpQjtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUMsS0FBSyxDQUFDLENBQUE7UUFDM0MsMkRBQTJEO0lBQy9ELENBQUM7SUFFRCxNQUFNLENBQUMsS0FBWTtRQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDckIsQ0FBQztJQUVELGtCQUFrQjtRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsMkNBQTJDLEVBQUMsT0FBTyxDQUFDLENBQUE7SUFDckUsQ0FBQztDQUdKO0FBbkNELHdDQW1DQyJ9