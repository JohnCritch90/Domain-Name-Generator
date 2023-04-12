/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};
document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector("#domain").innerHTML = generateDomain();
});
console.log("Any string");

function generateDomain() {
  let pronoun = ["the", "our", "a"];
  let adj = ["great", "big", "tiny"];
  let noun = ["jogger", "raccoon", "school"];
  let ext = [".com", ".net", ".org"];

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let e = 0; e < ext.length; e++) {
          let div = document.createElement("div");
          div.innerText = `
          ${pronoun[p]}${adj[a]}${noun[n]}${ext[e]}
          `;
          document.body.appendChild(div);
        }
      }
    }
  }
}
