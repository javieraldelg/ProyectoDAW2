import express from "express";
import routes from "./routes/v1/index.js";
const app = express();

app.use(express.json());

app.use("/api", routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

while(true) {
    console.log("Hello world");
}