import Contact from "../models/Contact.models.js";

class ContactController {
	static async getAllContacts(req, res) {
		try {
			const contacts = await Contact.findAll();
			res.status(200).json(contacts);
		} catch (error) {
			res.status(500).json({
				error: "Erro ao tentar listar contatos",
				details: error.message,
			});
		}
	}

	static async createContact(req, res) {
		try {
			const { name, phone } = req.body;

			if (!name || !phone) {
				return res.status(400).json({
					error: "Nome e telefone são obrigatórios.",
				});
			}

			const createdContact = await Contact.create({ name, phone });
			res.status(201).json(createdContact);
		} catch (error) {
			res.status(400).json({
				error: "Erro ao tentar criar um contato",
				details: error.errors?.[0]?.message || error.message,
			});
		}
	}

	static async updateContactById(req, res) {
		try {
			const contact = await Contact.findByPk(req.params.id);

			if (!contact) {
				return res
					.status(404)
					.json({ error: "Contato não encontrado" });
			}

			const { name, phone } = req.body;
			await contact.update({ name, phone });

			res.status(200).json(contact);
		} catch (error) {
			res.status(400).json({
				error: "Erro ao tentar atualizar o contato",
				details: error.errors?.[0]?.message || error.message,
			});
		}
	}

	static async removeContactById(req, res) {
		try {
			const contact = await Contact.findByPk(req.params.id);

			if (!contact) {
				return res
					.status(404)
					.json({ error: "Contato não encontrado" });
			}

			await contact.destroy();
			res.sendStatus(204);
		} catch (error) {
			res.status(400).json({
				error: "Erro ao tentar remover um contato",
				details: error.message,
			});
		}
	}
}

export default ContactController;
