import express from "express";
import cors from "cors";
import itemsRoutes from "./routes/items";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use("/api/items", itemsRoutes);

app.listen(PORT, () => {
  console.log(`Server töötab aadressil http://localhost:${PORT}`);
});