"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseTest_1 = require("../common/BaseTest");
const protractor_1 = require("protractor");
const xyz_home_1 = require("../pageobjects/xyz_home");
const xyz_addcustomer_1 = require("../pageobjects/xyz_addcustomer");
const xyz_openaccount_1 = require("../pageobjects/xyz_openaccount");
const xyz_customer_1 = require("../pageobjects/xyz_customer");
let xmain = new xyz_home_1.xyzmain();
let xAC = new xyz_addcustomer_1.xyzaddcustomer();
let xOC = new xyz_openaccount_1.xyzopenaccount();
let cus = new xyz_customer_1.customer();
describe('XYZ Bank', function () {
    let base = new BaseTest_1.BaseTest();
    beforeAll(function () {
        protractor_1.browser.get(base.StartTest(1));
    });
    it('TC01- Validate XYZ Bank Title page', function () {
        xmain.title_page(2);
        xmain.bank_manager_login();
    });
    it('TC02- Validate Add Customer', function () {
        xAC.add_customer_tab();
        xAC.enter_first_name(3);
        xAC.enter_last_name(4);
        xAC.post_cd(5);
        xAC.addcustomerbutton();
        xAC.pop_up("Accept");
        xAC.click_open_account();
    });
    it('TC03- Validate Open Account', function () {
        xOC.select_name();
        xOC.select_currency();
        xOC.click_process();
        xOC.pop_up("Accept");
        xOC.click_customer();
    });
    it('TC04- Validate Autofilter', function () {
        cus.filter_box(6);
    });
    it('TC05- Validate Delete button', function () {
        cus.get_dataTable(6);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHl6YmFuay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L3h5emJhbmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBOEM7QUFDOUMsMkNBQXFDO0FBQ3JDLHNEQUErQztBQUMvQyxvRUFBZ0U7QUFDaEUsb0VBQWdFO0FBQ2hFLDhEQUF1RDtBQUV2RCxJQUFJLEtBQUssR0FBRyxJQUFJLGtCQUFPLEVBQUUsQ0FBQztBQUMxQixJQUFJLEdBQUcsR0FBRyxJQUFJLGdDQUFjLEVBQUUsQ0FBQTtBQUM5QixJQUFJLEdBQUcsR0FBRyxJQUFJLGdDQUFjLEVBQUUsQ0FBQTtBQUM5QixJQUFJLEdBQUcsR0FBRyxJQUFJLHVCQUFRLEVBQUUsQ0FBQTtBQUV4QixRQUFRLENBQUMsVUFBVSxFQUFFO0lBQ2pCLElBQUksSUFBSSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFBO0lBRzdCLFNBQVMsQ0FBQztRQUVOLG9CQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUMsQ0FBQTtJQUdGLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRTtRQUNqQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ25CLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO0lBQzlCLENBQUMsQ0FBQyxDQUFBO0lBR04sRUFBRSxDQUFDLDZCQUE2QixFQUFFO1FBQzNCLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1FBQ3RCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN2QixHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3RCLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtRQUN2QixHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3BCLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO0lBQzNCLENBQUMsQ0FBQyxDQUFBO0lBR0YsRUFBRSxDQUFDLDZCQUE2QixFQUFFO1FBQzlCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNqQixHQUFHLENBQUMsZUFBZSxFQUFFLENBQUE7UUFDckIsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQ25CLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDcEIsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFBO0lBQ3ZCLENBQUMsQ0FBQyxDQUFBO0lBR0YsRUFBRSxDQUFDLDJCQUEyQixFQUFFO1FBQzdCLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDcEIsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsOEJBQThCLEVBQUU7UUFDakMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN0QixDQUFDLENBQUMsQ0FBQTtBQUlQLENBQUMsQ0FBQyxDQUFBIn0=