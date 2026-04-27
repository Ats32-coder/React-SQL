import express from "express";
import cors from "cors";
import itemsRoutes from "./routes/items";

const app = express(); // Loome serveri
const PORT = 4000; // Määrame pordi (kus server töötab)

app.use(cors()); // Lubame päringud teistelt lehtedelt
app.use(express.json()); // Ütleme serverile, et ta oskab JSON andmeid lugeda

app.use("/api/items", itemsRoutes); //Kui keegi läheb /api/items aadressile, siis kasutatakse itemsRoutes faili koodi

app.listen(PORT, () => { //Server tööle
  console.log(`Server töötab aadressil http://localhost:${PORT}`); // Näitame konsoolis, et server töötab
}); 