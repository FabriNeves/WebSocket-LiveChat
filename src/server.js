import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";

const app = express();

const porta = process.env.porta || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
// metodos de URL
const diretorioPublic = path.join(caminhoAtual,"../..","public");
app.use(express.static(diretorioPublic));

const servidorHttp = http.createServer(app);

servidorHttp.listen(porta,() => {
    console.log(`Servidor local na porta http://localhost:${porta}`);
})

const io = new Server(servidorHttp);

export default io;