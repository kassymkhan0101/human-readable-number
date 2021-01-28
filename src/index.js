module.exports = function toReadable (number) {
    var units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen","eighteen", "nineteen"];
    var tens = ["", "twenty", "thirty", "forty", "fifty", "sixty", "seventy","eighty", "ninety"];
    var num = number.toString().split("");
    if(num.length == 1){
        for(i=0; i<10; i++){
            if(num[0]==i){
                return units[i]
            }
        }
        
    }

