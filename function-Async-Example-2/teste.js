const axios = require('axios');
const { callApiArtilheiro } = require("./credenciais_api");

function obterArtilheiro(position){
  axios(callApiArtilheiro(position))
  .then(function(resposta) {
    console.log(resposta.data.nome_popular);
  });
};
const artilheiro = obterArtilheiro(1);

//----------------------------------------------------------
// Async function - Example 2
//----------------------------------------------------------
  // axios(credenciais_api)
  // //sucesso
  // //.then: metodo para chamar a function de callback
  // .then(function(resposta) {
  //   console.log(resposta.data.nome_popular);
  // });
