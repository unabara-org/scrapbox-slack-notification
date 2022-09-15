import crypt from "crypto";

const md5 = crypt.createHash("md5");
const hex = md5.update("foo").digest("hex");

console.log(hex);
