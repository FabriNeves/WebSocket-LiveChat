// import { emitirTextoEditor } from "./socket-front-documento.js";

const socket = io();

class mensagem {
  constructor(texto, id, Data) {
    this.texto = texto;
    this.id = id;
    this.Data = Data;
  }
}

const Msg = document.getElementById("mensagem");
const divUser = document.getElementById("users");

Msg.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    const stringHora = updateHora();
    const fullMsg = `${stringHora}| ${Msg.value} | ${socket.id}`
    addElement("mensagens", fullMsg);
    Msg.value = "";
    socket.emit("mensagem", fullMsg);
  }
})

socket.on("texto_editor_clientes", (texto) => {  
  addElement("mensagens", texto);
  console.log(texto);
})




function addElement(IdElemento, conteudo) {
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode(conteudo);
  newDiv.appendChild(newContent);
  const currentDiv = document.getElementById(String(IdElemento));
  console.log(currentDiv);
  currentDiv.appendChild(newDiv);
}

function updateHora() {
  const dateToday = new Date();
  const hr = dateToday.getHours();
  const min = dateToday.getMinutes();
  const s = dateToday.getSeconds();
  return `${hr}:${min}:${s}`;
}
