const { v4: uuidv4 } = require("uuid");
const { request, response } = require("express");
const express = require("express");

const fs = require("fs");
const morgan = require("morgan");
const path = require("path");

const app = express();

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);

app.use(express.json());

// app.use(morgan("combined", { stream: accessLogStream }));

morgan.token("body", (req, res) => JSON.stringify(req.body));
app.use(
  morgan(
    ":method :url :status :response-time ms - :res[content-length] :body - :req[content-length]"
  )
);

// const requestLogger = (request, response, next) => {
//   console.log("Method:", request.method);
//   console.log("Path:  ", request.path);
//   console.log("Body:  ", request.body);
//   console.log("---");
//   next();
// };

// app.use(requestLogger);

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/", (request, response) => {
  response.send("<h1>No</h1>");
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((n) => n.id === id);
  person
    ? response.json(person)
    : response.status(404).json({ Error: "No data Found" });
});

app.get("/info", (request, response) => {
  const peopleCount = persons.length;
  const currentTime = new Date();
  response.send(
    `Phonebook has info for ${peopleCount} people <br/>  ${currentTime}`
  );
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);
  response.status(204).end();
});

app.post("/api/persons", (request, response) => {
  const person = request.body;
  person.id = uuidv4();
  if (request.body.name && request.body.number) {
    const duplicate = persons.find((n) => n.name === request.body.name);

    if (duplicate) {
      response.json({ error: "name must be unique" });
    } else {
      persons = persons.concat(person);
      response.json(persons);
    }
  } else {
    console.log("no data");
    response.json({ error: "The name or number is missing" });
    response.status(404);
  }
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});
