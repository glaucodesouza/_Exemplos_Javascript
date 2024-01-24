//Create especific date
let dataTest = new Date('January 01, 1900 00:00:00');

//asking if a date value == 1900-01-01
//using substring
if (req.data.DataFim.substring(0, 10) === '1900-01-01') {
    req.data.DataFim = null
}
