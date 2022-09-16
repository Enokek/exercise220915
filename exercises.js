function exercise1() {
  var textboxValue = document.getElementById("txt").value;
  const words = textboxValue.split(" ");

  words.forEach((word) => {
    console.log(`${word} ${word.length}`);
  });  

  //console.log(`${textboxValue} ${textbox1value.length}`);
}

function exercise2() {
  var textboxValue = document.getElementById("txt").value;
  const words = textboxValue.split(" ");
  const reversed = textboxValue.split(" ");

  console.log(words.sort((a, b) => b.length - a.length));
  words.forEach((word) => {
    console.log(`${word}`);
  });

  console.log(reversed.reverse());
  reversed.forEach((word) => {
    console.log(`${word}`);
  });


}

function exercise3() {
   var textboxValue = document.getElementById("txt").value;
  const words = textboxValue.split(" ");

  obj = {};

      for(var i = 0; i < words.length; i++) {
        if (obj [words[i]] == undefined) {
           obj [words[i]] = 1;
        } else {

          obj [words[i]]++;
        }

      }
      Object.values(obj).forEach((freq, word) => console.log(`${words[word]} ${freq}`))

//Object.values() returnerar en array vars element är de värden som finns på objektet. 
//Ordningen på egenskaperna är densamma som den som ges genom att loopa över objektets egenskapsvärden manuellt.

}
/*function exercise3() {
 var textboxValue = document.getElementById('txt').value;
wordArray = words.split(' ');
var newArray = [];
var words = {};

$.each(wordArray, function (ix, word ) {
    if ($.inArray(word , newArray) > -1) {
        words[word]++;
    }
    else {
        console.log('that wasnt in the array');
        words[word] = 1;
    }

});

var wordArraySortFunction = function(word1, word2){
    if(wordCounter[word1] < wordCounter[word2]){
        return -1;
    }else if(wordCounter[word1] == wordCounter[word2]){
        return 0;
    }else if(wordCounter[word1] > wordCounter[word2]){
        return 1;
    }
}
}
*/

function exercise4(){


}

/*function exercise5(){
replacements = ( ('jag','jag'), ('heter','heter'),('enok','enok'), ('a','4'), ('e','3'), ('g','9'),
                 ('t','7'), ('o','0'), ('r','2') )
my_string = "jag heter enok"
new_string = my_string
for old, new in replacements:
    new_string = new_string.replaceAll(old, new)

print ( new_string )
}
*/
function exercise5(){

  var elite = document.getElementById("txt");
  var alphabets = new Map ([["a", "4"], ["e", "3"], ["g", "9"], ["t", "7"], ["o", "0"] , ["r", "2"]]); 

 
  text = elite.value.toLowerCase();
  for (var i = 0; i < text.length; i++) {
    if (alphabets.get(text[i])) {
      text = text.replace(text[i], alphabets.get(text[i]));
    }
  }
  console.log(text)
}




