import { Basepage } from "../common/BasePage";

export class xyzaddcustomer extends Basepage {

    add_customer_tab() {
        this.clicker("//button[contains(text(),'Add Customer')]", "xpath")
    }

    enter_first_name(column: number) {
        let value = this.GetDataExcel(column)
        this.enterText("fName", "model", value)
    }

    enter_last_name(column: number) {
        let value = this.GetDataExcel(column)
        this.enterText("lName", "model", value)
    }

    post_cd(column: number) {
        let value = this.GetDataExcel(column)
        this.enterText("postCd", "model", value)
    }

    addcustomerbutton(){
        this.clicker("button[type='submit']","css")
        //this.clicker("label[class='mat-checkbox-layout']", "css")
    }

    pop_up(value:string){
        this.alert(value)
    }

    click_open_account(){
        this.clicker("//button[contains(text(),'Open Account')]","xpath")
    }


}