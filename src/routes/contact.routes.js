import express from "express";
import ContactControllers from "../controllers/contact.controllers.js";

const router = express.Router();

router.get("/", ContactControllers.getAllContacts);

router.post("/", ContactControllers.createContact);

router.patch("/:id", ContactControllers.updateContactById);

router.delete("/:id", ContactControllers.removeContactById);

export default router;
