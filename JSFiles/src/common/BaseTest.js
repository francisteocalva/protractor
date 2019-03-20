"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class BaseTest {
    constructor() {
        this.papa = require('papaparse');
        this.fs = require('fs');
        this.file = this.fs.readFileSync('C:\\Users\\francis.calva\\Desktop\\Demo-RP\\Demo-F\\Demo\\testdata\\testdata.csv', 'utf8');
    }
    //Get Web URL from csv file
    StartTest(row) {
        let results = this.papa.parse(this.file, {});
        protractor_1.browser.manage().window().maximize();
        let f = results.data[row][1];
        let CombData = f;
        this.fs.truncate('C:\\Users\\francis.calva\\Desktop\\Demo-RP\\Demo-F\\Demo\\Test.log', 0, function () { console.log('Truncated the Log'); });
        return CombData;
    }
    //Get data from csv file, column required
    GetDataExcel(col) {
        let results = this.papa.parse(this.file, {});
        let f = results.data[1][col];
        let CombData = f;
        return CombData;
    }
    //Get data from csv file, row and column requred
    GetDataExcelwR(col, row) {
        let results = this.papa.parse(this.file, {});
        let f = results.data[row][col];
        let CombData = f;
        return CombData;
    }
}
exports.BaseTest = BaseTest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL0Jhc2VUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWtEO0FBSWxELE1BQWEsUUFBUTtJQUFyQjtRQUVJLFNBQUksR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUIsT0FBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixTQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsa0ZBQWtGLEVBQUUsTUFBTSxDQUFDLENBQUM7SUF1QzVILENBQUM7SUFwQ0csMkJBQTJCO0lBQzNCLFNBQVMsQ0FBQyxHQUFXO1FBQ2pCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFDeEMsQ0FBQyxDQUFDO1FBQ0gsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzVCLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQTtRQUNoQixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxvRUFBb0UsRUFBRSxDQUFDLEVBQUUsY0FBVyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQTtRQUN2SSxPQUFPLFFBQVEsQ0FBQTtJQUVuQixDQUFDO0lBRUQseUNBQXlDO0lBQ3pDLFlBQVksQ0FBQyxHQUFXO1FBQ3BCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFDeEMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM1QixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUE7UUFDaEIsT0FBTyxRQUFRLENBQUE7SUFDbkIsQ0FBQztJQUVELGdEQUFnRDtJQUNoRCxjQUFjLENBQUMsR0FBVyxFQUFDLEdBQVU7UUFDakMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUN4QyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzlCLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQTtRQUNoQixPQUFPLFFBQVEsQ0FBQTtJQUNuQixDQUFDO0NBUUo7QUEzQ0QsNEJBMkNDIn0=