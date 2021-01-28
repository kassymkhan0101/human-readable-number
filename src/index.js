module.exports = function toReadable (number) {
    var n = number.toString();
    var units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen","eighteen", "nineteen"]
    var tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy","eighty", "ninety"]
    if(n.length == 1){
        for(i=0; i<10; i++){
            if(n.parseInt() == i){
                return units[0];
            }
        }
    }else if(n.length ==2 || n[0]==1){
        for(k=0; k<10; k++){
            if(n.parseInt() == k+10){
                return units[k+10]
            }
        }
             
             }
     else if(n.length == 2){
        var p = "";
        for(j=2; j<10; j++){
            if(n[0]==j){
                p = p + " "+tens[j-2]
       
            }
            if(n[1]==j-1){
                p= p+" "+ units[j-1]
            }
        }
        return p;
              
        
    }

  
   
}
