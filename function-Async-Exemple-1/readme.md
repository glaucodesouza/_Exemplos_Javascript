//----------------------------------------------------------
//PREMISSAS
//----------------------------------------------------------

0-criar o arquivo .gitignore na raiz do projeto
1-criar pasta do projeto function-async-1
2-npm init -y (criar package.json)
3-npm i -s axios (instalar o axios para trabalhar com APIs em Ajax)
4-usar API do site swapi.co (https://pipedream.com/apps/swapi)

//----------------------------------------------------------
//OPCIONAL
//----------------------------------------------------------
4-Instalar extension Code Runner (p/ executar Javascript direto no terminal do VS CODE)
  Como executar: Ctrl + Alt + n

//----------------------------------------------------------
//ARQ DE CREDENCIAIS DA API
//----------------------------------------------------------
const credenciais_api = {
  url: "https://api.api-futebol.com.br/v1/campeonatos/10",
  method: "GET",
  async: true,
  crossDomain: true,
  headers: {
    "Authorization": "Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  }
};
exports.credenciais_api = credenciais_api;

//----------------------------------------------------------
//YOUTUBE VIDEO - MINUTE 4:00
//----------------------------------------------------------
https://youtu.be/hOhX8__dMt0