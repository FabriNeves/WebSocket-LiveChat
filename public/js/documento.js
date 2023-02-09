import { emitirTextoEditor } from "./socket-front-documento.js";


const textoEditor = document.getElementById("mensagem");
const divUser  = document.getElementById("users");

textoEditor.addEventListener("keydown",() =>{
  console.log(textoEditor.value);
})
textoEditor.addEventListener("keyup", () => {

  emitirTextoEditor(textoEditor.value);
});

function atualizaTextoEditor(texto) {
  textoEditor.value = texto;
}

function escreveHashUser (id) {
  divUser.innerHTML(`<p>${id}</p>`);  
}

export { atualizaTextoEditor};
export default  escreveHashUser;
