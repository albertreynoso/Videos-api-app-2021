import express from "express";
import app from "./app";
import "./database";

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("hey budy");
});
app.listen(app.get("port"), () => {
  console.log("server on port: ", app.get("port"));
});
