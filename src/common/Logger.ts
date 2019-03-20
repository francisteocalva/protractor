import {createLogger, format, transports} from 'winston'
const { combine, timestamp, label, prettyPrint,printf  } = format;
export class CutomLogger{

  public static myFormat = printf(info => {
    return `${info.timestamp} ${info.level}: ${info.message}`;
  });
    static logger = createLogger({
        level: 'info',
        //format: format.simple(),
        format: combine(
          timestamp(),
          CutomLogger.myFormat
        ),
        transports: [

        // - Write to all logs with level `info` and above to `combined.log`
        new transports.File({ filename: 'Test.log'}),
				// - Write all logs error (and above) to Console/terminal
        new transports.Console()

        ]
    });
}