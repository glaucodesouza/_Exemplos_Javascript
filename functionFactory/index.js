// factory Functions
function createCellphone(cellPhoneBrand,cellPhoneScreen,cellPhoneBatery){
  return {
    cellPhoneBrand,
    cellPhoneScreen,
    cellPhoneBatery,
    call(){
      console.log("calling...");
    }
  }
}
const cellPthone1 = createCellphone('Zenfone', 5.5, 5000);
console.log(cellPthone1);