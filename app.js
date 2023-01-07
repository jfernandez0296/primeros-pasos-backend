const express = require("express");
const app = express();
const port = 8080;

app.get("/my-first-endpoint", (req, res) => {
  res.status(200).send({
    message: "Curso encontrado satisfactoriamente",
    top: {
      version_top: 26,
      students: 10,
      names: [
        "Felipe",
        "Laura",
        "Jailer",
        "Jaime",
        "Juan",
        "Andrés",
        "Nicolas",
        "Carlos",
        "Ivan",
        "Diana"
      ]
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/my-first-endpoint`);
});
