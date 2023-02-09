import io from "./server.js";
import { escreveHashUser } from "../public/js/documento.js";

let Hash;

io.on("connection", (socket) => {
    Hash = socket.id;
  console.log("Um cliente se conectou! ID:", socket.id);

  socket.on("texto_editor", (texto) => {
    socket.broadcast.emit("texto_editor_clientes", texto);
  });
});

export default Hash;