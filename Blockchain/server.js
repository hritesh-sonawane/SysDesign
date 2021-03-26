const Blockchain = require("./blockchain");
const Block = require("./block");

const blockchain = new Blockchain();

for (let i = 0; i < 5; i++) {
  const newData = "hr7tesh " + i;
  blockchain.addBlock({ data: newData });
}

console.log(blockchain);
