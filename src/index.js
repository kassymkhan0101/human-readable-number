module.exports = function toReadable (number) {
    var units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen","eighteen", "nineteen"];
    var tens = ["", "twenty", "thirty", "forty", "fifty", "sixty", "seventy","eighty", "ninety"];
    for(i=2; i<10; i++){
        if(num/10==i){
            return tens[i-1];
        }
    }
    var num = number.toString().split("");
    if(num.length == 1){
        for(i=0; i<10; i++){
            if(num[0]== i){
                return units[i];
            }
        }
        
    }else if(num.length == 2 && number<20){
        for(i=0; i<10; i++){
            if(num[0]==1 && num[1]== i){
                return units[i+10];}}}
     else if(num.length == 2 && number>=20){
         for(i=2; i<10; i++){
             if(num[0]==i){
                 for(k=1; k<10; k++){
                     if(num[1]==k){
                         return (tens[i-1]+" "+ units[k])
                     }
                 }
             }
         }
     }
        
}

