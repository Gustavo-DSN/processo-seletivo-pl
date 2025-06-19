import dotenv from "dotenv";
import express from "express";
import { connectMySql } from "./config/database.js";
import contactRoutes from "./routes/contact.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const sequelize = await connectMySql();

await sequelize.sync();

app.use("/contatos", contactRoutes);

app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});
