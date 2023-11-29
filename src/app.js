import  express  from "express";
import { engine } from 'express-handlebars';
import config from "./config/config.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import home from "./routes/home.router.js"
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = config.server.port;

const app = express();


app.use(upload.single('file'));

app.use(express.static(__dirname + "/public"));
app.engine('handlebars', engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
app.use("/", home);
export default app;