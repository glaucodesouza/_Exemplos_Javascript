//WRONG WAY
let datCreate = new Date(linha.createdAt);
let newCreat = new Date(datCreate.getTime() - (3*3600000));
linha.createdAt = newCreat;

//CORRECT WAY
if(linha.modifiedAt){
  //Adjustment for date which is storing +3 hours for Sao paulo users.
  //let newMod = new Date(datMod.getTime() - (3*3600000)); //WRONG...
  const newMod = new Date(`${linha.modifiedAt} GMT`);
  linha.modifiedAt = newMod;
}
