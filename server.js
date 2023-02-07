import express from "express";


const porta = process.env.PORT || 8080;

const app = express();
app.use(express.json())

app.listen(porta,() => {
    // http://localhost:3000/
    console.log(`Servidor escutando em http://localhost:${porta}/`);
})

app.get("/",(req,res)=>{

    res.status(200).sendFile('index.html', { root: '.' })

})

app.post("/",(req,res)=> {
    const corpoMensagem = req.body;
    
    res.status(200).send(`Recebeu: ${corpoMensagem.mensagem}`);
})