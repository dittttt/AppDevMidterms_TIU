const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');

// READ
const readUsersFromFile = () => {
  const data = fs.readFileSync(usersFilePath, 'utf8');
  return JSON.parse(data);
};

// WRITE
const writeUsersToFile = (users) => {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

module.exports = {
  readUsersFromFile,
  writeUsersToFile
};
