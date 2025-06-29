import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const dbProcess = {
	host: process.env.DB_HOST,
	dialect: "mysql",
	logging: false,
};

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASS,
	dbProcess
);

export async function connectMySql() {
	try {
		const temp = new Sequelize(
			"",
			process.env.DB_USER,
			process.env.DB_PASS,
			dbProcess
		);

		await temp.query(
			`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`
		);
		await temp.close();

		await sequelize.authenticate();
		console.log("Conexão com MySQL estabelecida com sucesso.");

		return sequelize;
	} catch (err) {
		console.error("Erro ao conectar ao banco:", err);
		process.exit(1);
	}
}

export default sequelize;
