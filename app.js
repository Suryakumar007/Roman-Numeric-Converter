function DecToRoman() {
var text ="";
var num= [1,4,5,9,10,40,50,90,100,400,500,900,1000];
var sym= ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
var i =12;
var n = document.getElementById("number_id").value;
var x;
while(n>0)
{
  x=Math.floor(n/num[i]);
  while(x>0)
  {
  text +=sym[i];
  x--;
  }
	
  n=n%num[i];
  i--;
}
    document.getElementById("roman_id").value=text;
}

function RomanToDec()
{
    var out="";

  var romanNumber = document.getElementById("roman_id").value;

  romanNumber = romanNumber.toUpperCase();
  const romanNumList = ["CM","M","CD","D","XC","C","XL","L","IX","X","IV","V","I"];
  const corresp = [900,1000,400,500,90,100,40,50,9,10,4,5,1];
  let index =  0, num = 0;
  for(let rn in romanNumList){
    index = romanNumber.indexOf(romanNumList[rn]);
    while(index != -1){
      num += parseInt(corresp[rn]);
      romanNumber = romanNumber.replace(romanNumList[rn],"-");
      index = romanNumber.indexOf(romanNumList[rn]);
    }
  }

    document.getElementById("number_id").value=num;
}
