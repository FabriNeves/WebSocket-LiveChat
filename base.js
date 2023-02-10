

  // Criar p para Data 
  const newData = document.createElement("p");
  newData.className = "Data";
  newData.appendChild(document.createTextNode(objMensagem.Data));
  newCabecalho.appendChild(newData);//Atribuir nome ao cabecalho
  //console.log(newCabecalho);


  // const chaves = Object.keys(objMensagem);
// chaves.forEach((chave) => {
//   const novoElemento = document.createElement("span");
//   novoElemento.className = String(chave);
//   const novoTexto = document.createTextNode(objMensagem[chave]);
//   novoElemento.appendChild(novoTexto);
//   newDiv.appendChild(novoElemento);
// })  