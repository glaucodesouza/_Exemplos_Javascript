const d = new Date(853113600000).toISOString().substring(0, 19);
console.log(d);
//result is: 1997-01-13T00:00:00

const d2 = new Date(1550102300000).toISOString().substring(0, 19);
console.log(d);
//result is: 1997-01-13T00:00:00


function formatarDataApiParaArquivo(dataApi) {
  // receives in milliseconds, dataApi=853113600000
  // returns format: dd/mm/aaaa
  let d = new Date(dataApi).toISOString().substring(0,19);
  return d.substring(8, 10)+ '/' + d.substring(5, 7) + '/' + d.substring(0, 4);
}