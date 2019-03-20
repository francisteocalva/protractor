import { BaseTest } from "../common/BaseTest";
import { browser } from "protractor";
import {xyzmain} from "../pageobjects/xyz_home"
import { xyzaddcustomer } from "../pageobjects/xyz_addcustomer";
import { xyzopenaccount } from "../pageobjects/xyz_openaccount";
import { customer } from "../pageobjects/xyz_customer";

let xmain = new xyzmain();
let xAC = new xyzaddcustomer()
let xOC = new xyzopenaccount()
let cus = new customer()

describe('XYZ Bank', function () {
    let base = new BaseTest()


beforeAll(function () {
    
    browser.get(base.StartTest(1));    
})


it('TC01- Validate XYZ Bank Title page', function () {
        xmain.title_page(2)
        xmain.bank_manager_login()
    })


it('TC02- Validate Add Customer', function () {
       xAC.add_customer_tab()
       xAC.enter_first_name(3)
       xAC.enter_last_name(4)
       xAC.post_cd(5)
       xAC.addcustomerbutton()
       xAC.pop_up("Accept")
       xAC.click_open_account()
    })

 
    it('TC03- Validate Open Account', function () {
        xOC.select_name()
        xOC.select_currency()
        xOC.click_process()
        xOC.pop_up("Accept")
        xOC.click_customer()
     })    


     it('TC04- Validate Autofilter', function () {
        cus.filter_box(6)
     })    

     it('TC05- Validate Delete button', function () {
       cus.get_dataTable(6)
     })   



})