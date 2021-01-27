module.exports = function toReadable (number) {
    var d = "";
    var units = {'1': "one", '2': "two", '3': "three", '4':"four", '5': "five", '6': "six", '7': "seven", '8': "eigth",'9': "nine"}
    var tens = {10: "ten",20: "twenty", 30: "thirty", 40: "forty", 50: "fifty",60: "sixty", 70: "seventy",80: "eigthy", 90: "ninety"}
    var teens = {11: "eleven", 12: "twelve", 13:"thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18:"eigthteen", 19:"nineteen"}
        if(Math.ceil(number/100) == 1){
            d = d + units['1'] +" "+ "hundred";
        }
        else if(Math.ceil(number/100)== 2){
            d = d + units['2'] +" "+ "hundred";
        }
        else if(Math.ceil(number/100)== 3){
            d = d + units['3'] +" "+ "hundred";
        }
        else if(Math.ceil(number/100)== 4){
            d = d + units['4'] +" "+ "hundred";
        }
        else if(Math.ceil(number/100)== 5){
            d = d + units['5'] +" "+ "hundred";
        }
        else if(Math.ceil(number/100)== 6){
            d = d + units['6'] +" "+ "hundred";
        }else if(Math.ceil(number/100) == 7){
            d = d + units['7'] +" "+ "hundred";
        }else if(Math.ceil(number/100)== 8){
            d = d + units['8'] +" "+ "hundred";
        }else if(Math.ceil(number/100)== 9){
            d = d + units['9']+" "+ "hundred";
        }
    return d;
   
    
    

 
      
   
  
}
