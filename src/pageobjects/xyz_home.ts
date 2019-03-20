import { Basepage } from "../common/BasePage";

export class xyzmain extends Basepage{

    title_page(column?:number){
        let value = this.GetDataExcel(column)
        this.verifyTextPresentinElement("strong[class='mainHeading']","css",value)
        //this.clicker("label[class='mat-checkbox-layout']", "css")
    }

    bank_manager_login(){
        this.clicker("//button[contains(text(),'Bank Manager Login')]","xpath")
    }





}