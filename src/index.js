module.exports = function toReadable (number) {
    var d = "";
    var n = number.toString();
    var units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen","eighteen", "nineteen"];
    var tens = ["", "twenty", "thirty", "forty", "fifty", "sixty", "seventy","eighty", "ninety"];
    if(n<20){for(i=0; i<20; i++){
        if(n == i){
            return units[i];
        }
    }else if(n==20){
        return tens[1]
    }else if(n>20 && n<100){
        for(i=0; i<9; i++){
        if(n.charAt(0)== i){
            d = d + tens[i]
        for(i=0; i<9; i++){
             if(n.charAt(1)== i+1){
                 d = d + units[i+1]
                 return d
        }}
    }}
   }
