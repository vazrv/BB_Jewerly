import express from "express";
import routes from "./routes/index.js";

const app = express();
const port = 5000;
app.get("/api", (_, res) => {
  res.send("server is running!");
});
app.use("/api", routes);
app.use((err, res) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
