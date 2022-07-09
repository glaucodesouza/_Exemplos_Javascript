

function retirarEspeciais(str, tipo){
    let outString;
debugger;
    if(tipo == "whitelist"){
        //Negação de whitelist
        outString = str.replace(/[^A-zÀ-ú\s]/gi, '');
        return outString;
    } else if(tipo == "blacklist"){
        //blacklist
        outString = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
        return outString;
    } else if(tipo == "blacklist2"){
        //blacklist
        outString = str.replace(/['"\{\}\[\]\\\/]/gi, '');
        return outString;
    };

};

debugger;
let strOriginal = '["teste-fornecedor abc"]';
console.log(strOriginal);
strOriginal = retirarEspeciais(strOriginal, "blacklist2");
console.log(strOriginal);
debugger;