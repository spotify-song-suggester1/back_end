const server = require("./server");

const PORT = process.env.PORT || 80;
console.log(server.listen)
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});