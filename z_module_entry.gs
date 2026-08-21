/** SATRIA BUILDER - lowercase module loader */
function doGet(){
  const base=HtmlService.createHtmlOutputFromFile('index').getContent();
  const moduleFiles=['m7kaih','mbelajarmandiri','mliterasi'];
  const fragments=moduleFiles.map(function(name){return HtmlService.createHtmlOutputFromFile(name).getContent();}).join('\n');
  const html=base.replace('</body>',fragments+'</body>');
  return HtmlService.createHtmlOutput(html).setTitle(APP.name).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
