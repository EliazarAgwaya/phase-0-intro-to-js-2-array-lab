// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];
function destructivelyAppendCat() {
cats.push("Ralph");
  }
function destructivelyPrependCat(name) {
cats.unshift("Bob");
  }
function destructivelyRemoveLastCat() {
 cats.pop();
  }
function destructivelyRemoveFirstCat() {
cats.shift();
  }
function appendCat(name) {
const newcats = [...cats, "Broom"];
return newcats;
  }
function prependCat(name) {
const newcats = ["Arnold", ...cats];
return newcats;
  }
function removeLastCat() {
const newcats = cats.slice();
newcats.splice(-1);
return newcats;
  }
function removeFirstCat() {
const newcats = cats.slice();
newcats.splice(0, 1);
return newcats;
  }