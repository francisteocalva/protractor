"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const { combine, timestamp, label, prettyPrint, printf } = winston_1.format;
class CutomLogger {
}
CutomLogger.myFormat = printf(info => {
    return `${info.timestamp} ${info.level}: ${info.message}`;
});
CutomLogger.logger = winston_1.createLogger({
    level: 'info',
    //format: format.simple(),
    format: combine(timestamp(), CutomLogger.myFormat),
    transports: [
        // - Write to all logs with level `info` and above to `combined.log`
        new winston_1.transports.File({ filename: 'Test.log' }),
        // - Write all logs error (and above) to Console/terminal
        new winston_1.transports.Console()
    ]
});
exports.CutomLogger = CutomLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1vbi9Mb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBd0Q7QUFDeEQsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBQyxNQUFNLEVBQUcsR0FBRyxnQkFBTSxDQUFDO0FBQ2xFLE1BQWEsV0FBVzs7QUFFUixvQkFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUNyQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUM1RCxDQUFDLENBQUMsQ0FBQztBQUNNLGtCQUFNLEdBQUcsc0JBQVksQ0FBQztJQUN6QixLQUFLLEVBQUUsTUFBTTtJQUNiLDBCQUEwQjtJQUMxQixNQUFNLEVBQUUsT0FBTyxDQUNiLFNBQVMsRUFBRSxFQUNYLFdBQVcsQ0FBQyxRQUFRLENBQ3JCO0lBQ0QsVUFBVSxFQUFFO1FBRVosb0VBQW9FO1FBQ3BFLElBQUksb0JBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDLENBQUM7UUFDaEQseURBQXlEO1FBQ3JELElBQUksb0JBQVUsQ0FBQyxPQUFPLEVBQUU7S0FFdkI7Q0FDSixDQUFDLENBQUM7QUFwQlAsa0NBcUJDIn0=