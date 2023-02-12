// import { emitirTextoEditor } from "./socket-front-documento.js";
const divUserName = document.getElementById("idUser");


const socket = io();
divUserName.addEventListener("keyup",()=> {
  console.log("Load");
  divUserName.value = socket.id;
}
);
class mensagem {
  constructor(texto, id, Data) {
    this.Data = Data;
    this.texto = texto;
    this.id = id;
  }
}

const Msg = document.getElementById("mensagem");
//const divUser = document.getElementById("users");

Msg.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    const stringHora = updateHora();
    const fullMsg = `${stringHora}| ${Msg.value} | ${socket.id}`
    const objMensagem = new mensagem(Msg.value, socket.id, stringHora);
    //console.table(objMensagem);
    addElementObj("mensagens", objMensagem);
    //addElement("mensagens", fullMsg);
    Msg.value = "";
    socket.emit("mensagem", objMensagem);
  }
})

socket.on("texto_editor_clientes", (texto) => {
  addElementObj("mensagens", texto);
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
  const arrayMeses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  //13:01:59 - Feb 03 - 1999
  const hr = dateToday.getHours();
  const min = dateToday.getMinutes();
  const s = dateToday.getSeconds();
  const mes = dateToday.getMonth();
  const dia = dateToday.getDay();
  const ano = dateToday.getFullYear();
  return `${hr}:${min}:${s} - ${arrayMeses[mes]} ${dia} - ${ano}`;
}

function addElementObj(IdElemento, objMensagem) {
  let newDiv = document.createElement("div");
  newDiv.className = "msg";
  const currentDiv = document.getElementById(String(IdElemento));

  // Aonde a festa acontece 
  // Criar cabeçalho 
  const newCabecalho = document.createElement("div");
  newCabecalho.className = "cabecalho";

  // Criar p para Nome
  const newNome = document.createElement("p");
  newNome.className = "id";
  newNome.appendChild(document.createTextNode(objMensagem.id));
  console.log(newNome);
  newCabecalho.appendChild(newNome)// Atribuir nome ao cabecalho

  const newData = document.createElement("p");
  newData.className = "Data";
  newData.appendChild(document.createTextNode(objMensagem.Data));
  newCabecalho.appendChild(newData);//Atribuir nome ao cabecalho

  // fim do cabecalho 
  newDiv.appendChild(newCabecalho);
  // Criar  paragrafo para o texto
  const newP = document.createElement("p");
  newP.className = "texto";
  newP.appendChild(document.createTextNode(objMensagem.texto));
  newDiv.appendChild(newP)// Atribuir a div atual
  // aonde termina

  currentDiv.insertBefore(newDiv,currentDiv.firstChild);

  //eElement.insertBefore(newFirstElement, eElement.firstChild);
}


function updateSocketName (socketHash){ 
   
  divUserName.value = socketHash;
  console.log(divUserName.value);
}
