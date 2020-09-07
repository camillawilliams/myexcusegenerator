/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console! ");
};

let generateExcuse = () => {
  let who = ["the dog", "my grandma", "my turtle", "this bird"];
  let action = ["ate", "left", "crushed", "broke"];
  let what = ["my hw", "her shoes", "his shell", "his wrist"];
  let where = ["in the car", "in the house", "at the park", "in the tree"];
  let when = ["before class", "today", "tomorrow", "during my lunch"];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * who.length);
  let whatIndex = Math.floor(Math.random() * who.length);
  let whereIndex = Math.floor(Math.random() * who.length);
  let whenIndex = Math.floor(Math.random() * who.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    where[whereIndex] +
    " " +
    when[whenIndex]
  );
};
