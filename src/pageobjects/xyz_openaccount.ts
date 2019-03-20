import { Basepage } from "../common/BasePage";
import { element, by } from "protractor";

export class xyzopenaccount extends Basepage {

    select_name(){
        this.selectdropdowncssText('option', "cssContainingText","option","Anna Kern")
        }

    select_currency(){
        this.selectdropdowncssText('option', 'cssContainingText',"option","Dollar")
        }

    click_process(){
        this.clicker("//button[@type='submit']","xpath")
    }

    pop_up(value:string){
        this.alert(value)
    }

    click_customer(){
        this.clicker("//button[contains(text(),'Customers')]","xpath")
    }

}