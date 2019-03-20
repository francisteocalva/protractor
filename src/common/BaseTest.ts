import { browser, element, by } from "protractor";
//import { Row, Column } from "./node_modules/"
import{  CutomLogger} from "../common/Logger"

export class BaseTest {

    papa = require('papaparse');
    fs = require('fs');
    file = this.fs.readFileSync('C:\\Users\\francis.calva\\Desktop\\Demo-RP\\Demo-F\\Demo\\testdata\\testdata.csv', 'utf8');


    //Get Web URL from csv file
    StartTest(row: number) {
        let results = this.papa.parse(this.file, {
        });
        browser.manage().window().maximize();
        let f = results.data[row][1]
        let CombData = f
        this.fs.truncate('C:\\Users\\francis.calva\\Desktop\\Demo-RP\\Demo-F\\Demo\\Test.log', 0, function(){console.log('Truncated the Log')})
        return CombData
        
    }

    //Get data from csv file, column required
    GetDataExcel(col: number) {
        let results = this.papa.parse(this.file, {
        });
        let f = results.data[1][col]
        let CombData = f
        return CombData
    }

    //Get data from csv file, row and column requred
    GetDataExcelwR(col: number,row:number) {
        let results = this.papa.parse(this.file, {
        });
        let f = results.data[row][col]
        let CombData = f
        return CombData
    }







}