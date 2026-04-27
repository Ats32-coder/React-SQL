import { Router } from "express";
import * as controller from "../controllers/itemsController";

const router = Router();

router.get("/", controller.getItems);
router.post("/", controller.createItem);
router.put("/:id", controller.updateItem);
router.delete("/:id", controller.removeItem);

export default router;