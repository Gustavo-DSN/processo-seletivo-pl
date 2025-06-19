import Contact from "../models/Contact.models.js";

export const getAllContacts = async (req, res) => {
	try {
		const contacts = await Contact.findAll();

		res.status(200).json(contacts);
	} catch (error) {
		res.status(500).json({
			error: "Erro ao tentar listar contatos",
			details: error.message,
		});
	}
};

export const createContact = async (req, res) => {
	try {
		const { name, phone } = req.body;

		if (!name || !phone) {
			return res.status(400).json({
				error: "Nome e telefone são obrigatórios.",
			});
		}

		const createdContact = await Contact.create(req.body);

		res.status(201).json(createdContact);
	} catch (error) {
		res.status(400).json({
			error: "Erro ao tentar criar um contato",
			details: error.errors?.[0]?.message,
		});
	}
};

export const updateContactById = async (req, res) => {
	try {
		const contact = await Contact.findByPk(req.params.id);

		if (!contact)
			return res.status(404).json({ error: "Contato não encontrado" });

		await contact.update(req.body);

		res.status(200).json(contact);
	} catch (error) {
		res.status(400).json({
			error: "Erro ao tentar atualizar o contato",
			details: error.errors?.[0]?.message,
		});
	}
};

export const removeContactById = async (req, res) => {
	try {
		const contact = await Contact.findByPk(req.params.id);

		if (!contact)
			return res.status(404).json({ error: "Contato não encontrado" });

		await contact.destroy();

		res.status(204).send();
	} catch (error) {
		res.status(400).json({
			error: "Erro ao tentar remover um contato",
			details: error.message,
		});
	}
};
