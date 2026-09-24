import "dotenv/config";
import express from "express";

const app = express();
const { PORT } = process.env || 4000;


app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`)
});