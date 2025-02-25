//if today is 01/31/2025
//will get 2025-01-31T17:43:37'
let lastModifiedOn = new Date().toISOString().substring(0, 19);

//if today is 01/31/2025
//will get 2025-01-31
let lastModifiedOn = new Date().toISOString().substring(0, 10);

//if you want an older date
//will get 1900-01-01
new Date('January 01, 1900 00:00:00').toISOString().substring(0, 19)

//if you want a date in 1970
//will get Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)
new Date("01/01/1970")

//if you want a date in 1970
//will get '1970-01-01T00:00:00'
new Date("01/01/1970").toISOString().substring(0, 19)

