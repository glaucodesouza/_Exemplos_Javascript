

function retirarEspeciais(str, tipo){
    let outString;

    if(tipo == "whitelist"){
        //Negação de whitelist
        outString = str.replace(/^A-zÀ-ú\s/gi, '');
        return outString;

    } else if(tipo == "blacklist"){
        //blacklist
        outString = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
        return outString;

    } else if(tipo == "blacklist2"){
        //blacklist2
        outString = str.replace(/['"\{\}\[\]\\\/]/gi, '');
        return outString;
    };

};

debugger;
let strOriginal1 = '["teste-fornecedor abc"]';
let strOriginal2 = '["teste-fornecedor abc"]';
let strOriginal3 = '["teste-fornecedor abc"]';

strOriginal1 = retirarEspeciais(strOriginal1, "whitelist");
console.log(strOriginal1);

strOriginal2 = retirarEspeciais(strOriginal2, "blacklist");
console.log(strOriginal2);

strOriginal3 = retirarEspeciais(strOriginal3, "blacklist2");
console.log(strOriginal3);
