import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Contact = sequelize.define("Contact", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: {
                args: [/^([A-Za-zÀ-ÿ]{3,})(\s+[A-Za-zÀ-ÿ]{3,})+$/],
                msg: "Nome deve contar nome e sobrenome e cada um deve ter 3 letras no mínimo.",
            },
        },
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: {
                args: [8, 20],
                msg: "Telefone deve ter entre 8 a 20 caracteres",
            },
        },
    },
});

export default Contact;
