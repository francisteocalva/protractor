"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../common/BasePage");
class xyzmain extends BasePage_1.Basepage {
    title_page(column) {
        let value = this.GetDataExcel(column);
        this.verifyTextPresentinElement("strong[class='mainHeading']", "css", value);
        //this.clicker("label[class='mat-checkbox-layout']", "css")
    }
    bank_manager_login() {
        this.clicker("//button[contains(text(),'Bank Manager Login')]", "xpath");
    }
}
exports.xyzmain = xyzmain;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHl6X2hvbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZW9iamVjdHMveHl6X2hvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBOEM7QUFFOUMsTUFBYSxPQUFRLFNBQVEsbUJBQVE7SUFFakMsVUFBVSxDQUFDLE1BQWM7UUFDckIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNyQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsNkJBQTZCLEVBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzFFLDJEQUEyRDtJQUMvRCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpREFBaUQsRUFBQyxPQUFPLENBQUMsQ0FBQTtJQUMzRSxDQUFDO0NBTUo7QUFoQkQsMEJBZ0JDIn0=