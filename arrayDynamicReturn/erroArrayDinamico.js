function retornaArray(p_qtde_linhas){
    let arrayLocalFuncao = [];

    for (let i=0;i< p_qtde_linhas;i++) {
        arrayLocalFuncao[i] = i;
    }
    return arrayLocalFuncao;
};
    
    debugger;
    
    //SUCESSO Aqui funciona o For in
    let array1 = retornaArray(1);
    for(let i in array1){
        console.log(array1[i]);
    }

    //ERRO Aqui Nao funciona o For in
    array1 = retornaArray(0);
    for(let i in array1){
        console.log(array1[i]);
    }
    
    debugger;