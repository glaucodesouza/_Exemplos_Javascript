//Tips and Tricks

//Format Day and Month with 2 digits
var dt = new Date();
year  = dt.getFullYear();
month = (dt.getMonth() + 1).toString().padStart(2, "0");
day   = dt.getDate().toString().padStart(2, "0");

//Format short locale Date
let dataLonga = new Date(); //Sun Jan 21 2024 14:53:45 GMT-0300 (Horário Padrão de Brasília)
let dataAtualShort = dataLonga.toLocaleDateString('pt-BR'); //'21-01-2024

//more tips here
//https://stackoverflow.com/questions/6040515/how-do-i-get-month-and-date-of-javascript-in-2-digit-format
