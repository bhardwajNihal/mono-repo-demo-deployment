import express from "express";
const app = express();
import { Client} from "@repo/db/client"

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from the http server");
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  await Client.user.create({
    data: {
      username,
      password,
    },
  });

  res.status(200).json({message : "user signed up successfully!"})
});

app.listen(8000, () => {
  console.log("server listening on port 8000");
});
