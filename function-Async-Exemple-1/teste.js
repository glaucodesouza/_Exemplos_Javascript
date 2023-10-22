const axios = require(`axios`);
const { credenciais_api } = require("./credenciais_api");

//----------------------------------------------------------
//Wrog way to call API:
//Because it is a promise and can not use resp in a sync way
//----------------------------------------------------------
// const resp = axios.get(`https://swapi.co/api/people/1`);
const resp =  axios(credenciais_api)
console.log(resp);

//----------------------------------------------------------
//Correct:
//----------------------------------------------------------
  //configuracoes igual do nosso teste no postman
  // url: preencher com a url da API externa
  // method: preencher com o tipo do metodo de busca dos dados,
  // async: preencher verdadeiro ou falso
  // crossDomain: preencher se a api tem um URL diferente do seu app,
  // headers: e onde tem as suas autorizacoes de autenticacao da API
  // fazemos a chamada da API
  axios(credenciais_api)
  //sucesso
  //.then: metodo para chamar a function de callback
  .then(function(resposta) {
    console.log(resposta.data.nome_popular);
  });
