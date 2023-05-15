var guests = [
  {name: 'John Doe', age: 30},
  {name: 'Lily Bush', age: 20},
  {name: 'William Gate', age: 25}
];

var originals = [
{paiVsId: '67863D10CCD72F00F0000002E6930800',filhoVsId:	'14DB3B10CCD72F00F00000027B401400',	paiVersion: 0,	filhoVersion: 1},
{paiVsId: '14DB3B10CCD72F00F00000027B401400',filhoVsId:	'F1173C10CCD72F00F00000027B401400',	paiVersion: 1,	filhoVersion: 2},
{paiVsId: '14DB3B10CCD72F00F00000027B401400',filhoVsId:	'2B183C10CCD72F00F00000027B401400',	paiVersion: 1,	filhoVersion: 3},
{paiVsId: 'F1173C10CCD72F00F00000027B401400',filhoVsId:	'E6C93C10CCD72F00F00000027B400700',	paiVersion: 2,	filhoVersion: 41},
{paiVsId: '2B183C10CCD72F00F00000027B401400',filhoVsId:	'0EDD3C10CCD72F00F00000027B400700',	paiVersion: 3,	filhoVersion: 42},
{paiVsId: 'E6C93C10CCD72F00F00000027B400700',filhoVsId:	'A4F23C10CCD72F00F00000027B400700',	paiVersion: 41,	filhoVersion: 43},
{paiVsId: '0EDD3C10CCD72F00F00000027B400700',filhoVsId:	'5EF93C10CCD72F00F00000027B400700',	paiVersion: 42,	filhoVersion: 44},
];

var modified1 = [];
for (const original of originals) {
    
}

// factory Functions
function createModified(paiVsId,filhoVsId,paiVersion,filhoVersion,lane,children){
  return {
    paiVsId,
    filhoVsId,
    paiVersion,
    filhoVersion,
    lane,
    children
  }
};
debugger;
var formattedsFlow = [];
// prepareFormatted();

console.log(originals);
currentChildren = [];
for (let original of originals) {
  if (original.lane == undefined &&
      original.paiVersion == 0 ) {
      // original.filhoVersion > original.paiVersion) {]
        let newFormattedPai = createModified(original.paiVsId,original.filhoVsId,original.paiVersion,original.filhoVersion,1,currentChildren);        
        formattedsFlow.push(newFormattedPai);
        prepareFormatted2(newFormattedPai);

        debugger;
  } else {
    break;
  }
};

function prepareFormatted2(record){
  // currentChildren = [];
  // debugger;
  currentChildren.clear;

  debugger;
  console.log(record.paiVersion);
  console.log(record.filhoVersion);
  console.log(record.filhoVsId);
  let cont2 = 2;
  let indexFilho = originals.findIndex((original) => original.paiVersion == record.filhoVersion);
  if (indexFilho >= 0) {
    let filho = originals.find((original) => original.paiVersion == record.filhoVersion);
    debugger;
    currentChildren.push(filho.filhoVersion);
    filho.children = currentChildren;
    filho.lane = record.lane + 1;
    formattedsFlow.push(filho);
    debugger;
    prepareFormatted2(filho);
  } else {
    debugger;
    return;
  };

  for (let recordFilho of originals) {
    if (recordFilho.lane == undefined &&
        recordFilho.filhoVsId == record.filhoVsId &&
        recordFilho.filhoVersion > record.paiVersion) {
          debugger;
          console.log(recordFilho.paiVersion);
          console.log(recordFilho.filhoVersion);
          console.log(recordFilho.filhoVsId);
          let cont2 = 2;
          let indexFilho = originals.findIndex((original) => original.paiVersion == recordFilho.filhoVersion);
          if (indexFilho) {
            let filho = originals.find((original) => original.paiVersion == recordFilho.filhoVersion);
            prepareFormatted2(filho);
          } else {
            return;
          };
    } else {
      break;
    }
  }
};

// function prepareFormatted2(original){
//   currentChildren = [];
//   debugger;
//   for (let record of originals) {
//     if (record.lane == null &&
//         record.filhoVsId == original.filhoVsId &&
//         record.filhoVersion > original.paiVersion) {
//           debugger;
//           console.log(record.paiVersion);
//           console.log(record.filhoVersion);
//           console.log(record.filhoVsId);
//           let cont2 = 2;

//           for (let original2 of originals) {
//             if (original.filhoVersion == original2.paiVersion) {
//               currentChildren.push(original.filhoVersion);
//               const newFormatted = createModified(original2.paiVsId,original2.filhoVsId,original2.paiVersion,original2.filhoVersion,cont2,currentChildren);
//               formattedsFlow.push(newFormatted);
//               cont2++;
//             } else {
              
//             }
//           }
//     } else {
//       break;
//     }
//   }
// };

function prepareFormatted(){
  console.log(originals);
  currentChildren = [];
  for (let original of originals) {
    if (original.lane == null &&
        original.filhoVersion > original.paiVersion) {
          let cont2 = 2;
          for (let original2 of originals) {
            if (original.filhoVersion == original2.paiVersion) {
              currentChildren.push(original.filhoVersion);
              const new1 = insertModified1(original2.paiVsId,original2.filhoVsId,original2.paiVersion,original2.filhoVersion,cont2,currentChildren);
              original.push(new1);
              cont2++;
            } else {
              
            }
          }
    } else {
      break;
    }
  }
  
};