/** SATRIA BUILDER - module HTML loader */
function doGet(){
  const base=HtmlService.createHtmlOutputFromFile('index').getContent();
  const moduleFiles=['MODUL_7KAIH','MODUL_BELAJAR_MANDIRI','MODUL_KEGIATAN_LITERASI'];
  const fragments=moduleFiles.map(function(name){return HtmlService.createHtmlOutputFromFile(name).getContent();}).join('\n');
  const html=base.replace('</body>',fragments+'</body>');
  return HtmlService.createHtmlOutput(html).setTitle(APP.name).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
