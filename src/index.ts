import express from "express"
import cors from "cors";
import dotenv from "dotenv"
import ageRoutes from "./routes/age.routes"
import { limiter } from "./middleware/limiter.middleware";

const app = express()

dotenv.config();

app.use(cors());
app.use(express.json({ limit: "50mb" }))

app.use("/", limiter, ageRoutes)

app.get("/", (_req, res) => {
  res.send("API Is Running!!!")
})
console.log("process.env.PORT =>", process.env.PORT)

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
)
