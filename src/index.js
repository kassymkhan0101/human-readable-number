module.exports = function toReadable (number) {
    var n = number.toString();
    var units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen","eighteen", "nineteen"];
    var tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy","eighty", "ninety"];
    if(n<20){for(i=0; i<20; i++){
        if(n == i){
            return units[i];
        }
    }}
    else if(n>20 && n<100){
    for(j=0; j< 8; j++){
        if(n.charAt(0)== tens[j]){
            for(k=0; k<10; k++){
            if(n.charAt(1) == units[k+1]){
                return (tens[j]+ units[k+1])
            }}
            
        }
    }
  
   
}}
