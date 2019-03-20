"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../common/BasePage");
class customer extends BasePage_1.Basepage {
    filter_box(column) {
        let value = this.GetDataExcel(column);
        this.enterText("//input[@placeholder='Search Customer']", "xpath", value);
    }
    get_dataTable(column) {
        let value = this.GetDataExcel(column);
        this.search_table("cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer", "repeater", value);
    }
}
exports.customer = customer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHl6X2N1c3RvbWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VvYmplY3RzL3h5el9jdXN0b21lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUE4QztBQUc5QyxNQUFhLFFBQVMsU0FBUSxtQkFBUTtJQUVsQyxVQUFVLENBQUMsTUFBYTtRQUNwQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMseUNBQXlDLEVBQUMsT0FBTyxFQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzNFLENBQUM7SUFFRCxhQUFhLENBQUMsTUFBYTtRQUN2QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsMEVBQTBFLEVBQUMsVUFBVSxFQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhILENBQUM7Q0FDTjtBQVpELDRCQVlDIn0=