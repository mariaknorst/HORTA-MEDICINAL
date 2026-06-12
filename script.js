
function pesquisar(){
const s=document.getElementById('sintoma').value.toLowerCase();
let r='Sintoma não encontrado.';
if(s.includes('ansiedade')) r='🌼 Camomila, Melissa e Capim-cidreira';
else if(s.includes('insonia')) r='🌙 Camomila e Capim-cidreira';
else if(s.includes('tosse')) r='🍃 Guaco';
else if(s.includes('dor de garganta')) r='🍃 Hortelã e Gengibre';
else if(s.includes('dor de estomago')) r='🌿 Hortelã';
document.getElementById('resultado').innerHTML=r;
}
