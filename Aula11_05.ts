const run = document.getElementById("run");
run.addEventListener("click", () => {
  Excel.run(async (context) => {
    const sheet = context.workbook.worksheets.getActiveWorksheet();
    sheet.name = "Planilhita1";
    sheet.tabColor = "#CC0066";

    const range = sheet.getRange("B5:E7");
    range.format.fill.color = "Red";

    const range2 = context.workbook.getSelectedRange();
    range2.format.fill.color = "Pink";
  });
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  Excel.run(async (context) => {
    const sheet = context.workbook.worksheets.getActiveWorksheet();
    sheet.getUsedRange().format.fill.clear();
  });
});