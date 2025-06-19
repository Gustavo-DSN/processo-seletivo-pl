import express from "express";
import {
	listContacts,
	createOneContact,
	updateOneContact,
	removeOneContact,
} from "../controllers/contact.controllers.js";

const router = express.Router();

router.get("/", listContacts);

router.post("/", createOneContact);

router.patch("/:id", updateOneContact);

router.delete("/:id", removeOneContact);

export default router;
