const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    username: "bulbul ahmed",
    email: "ladkfjdk@gmail.com",
  },
  {
    id: uuidv4(),
    username: "maria",
    email: "mariafjdk@gmail.com",
  },
  {
    id: uuidv4(),
    username: "rakib",
    email: "ragfjdk@gmail.com",
  },
];

module.exports = users;
