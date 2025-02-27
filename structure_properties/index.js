// method o read structure properties
// and print only string objects inside this structure 
const movie = {
  title: 'vingadores',
  year: 2018,
  director: 'Robin',
  character: 'Thor'
}
debugger;
showProperties(movie);

function showProperties(obj){
  for(prop in obj)
    if(typeof obj[prop] === 'string')
      console.log(prop, obj[prop])
}