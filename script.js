getText("https://memory.loc.gov/diglib/ihas/html/silentfilms/silentfilms-home.html");

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  document.getElementById("demo").innerHTML = myText;
}