const aes256 = require("aes256");

const key = "GodsOfDeathLoveAPPLES";
const otherKey = "GodsOfDeathBANANAS";

const plaintext = "Potato Chip";

const encrypted = aes256.encrypt(key, plaintext);
console.log("Encryption:", encrypted);

const decrypted = aes256.decrypt(key, encrypted);
console.log("Decryption:", decrypted);

const failedDecrypted = aes256.decrypt(otherKey, encrypted);
console.log("Failed Decryption:", failedDecrypted);
