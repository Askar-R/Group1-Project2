import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const router = express.Router();
const app = express();
const port = 5000;
const path = __dirname;
import {
  getAllData,
  searchByName,
  insertNewName,
  updateNameById,
  deleteRowById,
} from "./dbService.js";

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

router.get("/", (req, res) => {
  res.sendFile(path + "index.html");
});

app.use(express.static(path));
app.use("/", router);
// app.get('/', (request, response) => {
//   response.json({ info: 'Node.js, Express, and Postgres API' });
// });

app.get("/getAll", getAllData);
app.get("/search/:username", searchByName);
app.post("/insert", insertNewName);
app.put("/update", updateNameById);
app.delete("/delete/:id", deleteRowById);

app.listen(port, () => {
  console.log(`App running.`);
});
