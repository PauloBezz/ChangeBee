import "dotenv/config";
import express from "express";

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ ola: "Olá mundo!" });
});

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
