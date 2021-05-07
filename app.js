var Processor = require("./Processor");
var Reader = require("./Reader");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var Writer = require("./Writer");
var PdfWriter = require("./PdfWriter");

var writer = new Writer();
var reader = new Reader();

async function main() {
  try {
    var data = await reader.Read("./Pasta1.csv");
    var processedData = Processor.Process(data);
    var users = new Table(processedData);

    var html = await HtmlParser.Parse(users);

    writer.Write(Date.now() + ".html", html);
    PdfWriter.WritePDF(Date.now() + ".PDF", html);
  } catch (err) {
    console.log(err);
  }
}

main();
