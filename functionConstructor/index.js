// constructor Functions
// it is similar to factory functions

function cellPhone(cellPhoneBrand,cellPhoneScreen,cellPhoneBatery){
  this.cellPhoneBrand = cellPhoneBrand,
  this.cellPhoneScreen = cellPhoneScreen,
  this.cellPhoneBatery = cellPhoneBatery,
  this.call = function(){
    console.log("calling...");
  }
}

// create new object here using new command
const cellPthone1 = new cellPhone('Zenfone', 5.5, 5000);
console.log(cellPthone1);