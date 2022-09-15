function exercise1() {
  var textboxValue = document.getElementById("txt").value;
  const words = textboxValue.split(" ");

  let i = 0;
  while (i < words.length) {
    console.log(`${words[i]} ${words[i].length}`);
    i++;
  }

  //console.log(`${textboxValue} ${textbox1value.length}`);
}
