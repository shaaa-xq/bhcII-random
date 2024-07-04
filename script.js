const bhc = ["Draco", "Ebi", "Han", "Jaya", "Jirman", "Kagutam Morgan", "L", "Wukong"];
let img = document.getElementsByTagName("img");
let charaName = document.getElementById("name");

function nameGenerate() {
  let randomName = Math.floor(Math.random() * 8);
  img.src = "assets/" + randomName + ".png";
  charaName.innerText = bhc[randomName];
}
