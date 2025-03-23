import express from "express";
import mainRouter from "./routers/main_router.js";
import sequelize from "./db.js";
import cors from "cors";
import fileUpload from "express-fileupload";
import path from "path";
import { fileURLToPath } from "url";
import allModels from "./models/all_models.js";
import { config } from "dotenv";

config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use("/static", express.static(path.resolve(__dirname, "static")));
app.use(express.urlencoded({ extended: false }));
app.use("/delivery_api", mainRouter);
app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});

// Подключение к базе данных
async function connectToDatabase() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Database connected successfully.');
    } catch (e) {
        console.error('Database connection failed:', e);
    }
}

// Подключаемся к базе данных
connectToDatabase();

// Экспортируем приложение
export default app;