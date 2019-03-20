import { Basepage } from "../common/BasePage";
import { element, by } from "protractor";

export class customer extends Basepage {

    filter_box(column:number){
        let value = this.GetDataExcel(column)
        this.enterText("//input[@placeholder='Search Customer']","xpath",value)
    }

    get_dataTable(column:number) {
        let value = this.GetDataExcel(column)
        this.search_table("cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer","repeater",value)

      }
}