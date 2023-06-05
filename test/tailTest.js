const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const result = tail(["Lighthouse", "Labs", "Bootcamp"]);
assertEqual(result[1], "Bootcamp");
assertEqual(result[0], "Labs");