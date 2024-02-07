// console.log("test");
// var now = moment();
// console.log("moment()", now);
// console.log(momment().subtract(6, "months"));
var d = new Date();
var e = d.toLocaleDateString("pt-BR");
console.log("d=New Date()", d);
console.log("e = d.toLocaleDateString('pt-BR')", e);
console.log("Dia", d.getDate());
console.log("Mês", d.getMonth() + 1);
console.log("Ano", d.getFullYear());

// console.log(d.toLocaleDateString('pt-BR'))

// var SixMonthsAgo = d.getMonth() - 6;
// var DateSixMonthsAgo = new Date(d.getFullYear(),d.getMonth() - 6, d.getDate());
// console.log(DateSixMonthsAgo.toLocaleDateString('pt-BR'))

// console.log(d.getMonth() - 6)
// console.log(d.getMonth() - 7)
// console.log(d.getMonth() - 8)
// console.log(d.getMonth() - 9)
// console.log(d.getMonth() - 10)
// console.log(d.getMonth() - 11)
const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate();

const addMonths = (input, months) => {
  const date = new Date(input);
  date.setDate(1);
  date.setMonth(date.getMonth() + months);
  date.setDate(
    Math.min(
      input.getDate(),
      getDaysInMonth(date.getFullYear(), date.getMonth() + 1),
    ),
  );
  return date;
};

console.log(
  addMonths(new Date("2020-01-31T00:00:00"), -6).toLocaleDateString("pt-BR"),
);
// "2019-07-31T06:00:00.000Z"

console.log(
  addMonths(new Date("2020-01-31T00:00:00"), 1).toLocaleDateString("pt-BR"),
);
// "2020-02-29T06:00:00.000Z"

console.log(
  addMonths(new Date("2020-05-31T00:00:00"), -6).toLocaleDateString("pt-BR"),
);
// "2019-11-30T06:00:00.000Z"

console.log(
  addMonths(new Date("2020-02-29T00:00:00"), -12).toLocaleDateString("pt-BR"),
);
// "2019-02-28T06:00:00.000Z"

console.log(addMonths(new Date(), -6).toLocaleDateString("pt-BR"));
console.log(addMonths(new Date(), -7).toLocaleDateString("pt-BR"));
console.log(addMonths(new Date(), -8).toLocaleDateString("pt-BR"));
console.log(addMonths(new Date(), -9).toLocaleDateString("pt-BR"));
console.log(addMonths(new Date(), -9).toLocaleDateString("pt-BR"));

// decrement 10 days from today
console.log("Example of getTime()-10 days...");
var date = new Date();
console.log("date inicial:", date);
var day = date.getTime() - 10 * 24 * 60 * 60 * 1000;
date.setTime(day);
console.log("date -10 dias:", date);

// decrement 12 days from today
console.log("Example of getDate()-12 days...");
var date2 = new Date();
console.log("date inicial:", date2);
var day2 = date2.getDate() - 12;
date2.setDate(day2);
console.log("date -12 dias:", date2);
