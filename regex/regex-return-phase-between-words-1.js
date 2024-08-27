/*
REGEX for matching only the content between <code> and </code>.
<code>conteudo da string</code>

use code runner extension
for testing in vs code
*/
const str = '<code>conteudo da string</code>';
const regex = /<code>(.*?)<\/code>/;
const match = str.match(regex);

if (match) {
  // match[1] contém o texto que está entre as tags <code> e </code>
  console.log(match[1]);
} else {
  console.log('Nenhuma correspondência encontrada');
}
/*result
conteudo da  string
*/