module.exports = function toReadable (number) {
    var units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen","eighteen", "nineteen"];
    var tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy","eighty", "ninety"];


    
        if(number < 20){
            return units[number];
        }else if(number < 100){
            return doubleDigit(number);
        }else{
            if(start(number%100) == 0){
                return units[Math.floor(number/100)] + " hundred ";
            }
            return units[Math.floor(number/100)] + " hundred " + toReadable(number%100);
        }
    

    function doubleDigit(number){
        if(number%10 > 0){
            return tens[Math.floor(number/10)] + " " + units[number%10];
        }
        return tens[Math.floor(number/10)];
    }
//     var units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen","eighteen", "nineteen"];
//     var tens = ["", "twenty", "thirty", "forty", "fifty", "sixty", "seventy","eighty", "ninety"];
//     for(i=2; i<10; i++){
//         if(number/10===i){
            
//             return tens[i-1];
//         }
//     }
//     var num = number.toString().split("");
//     if(num.length == 1){
//         for(i=0; i<10; i++){
//             if(num[0]== i){
//                 return units[i];
//             }
//         }
        
//     }else if(num.length == 2 && number<20){
//         for(i=0; i<10; i++){
//             if(num[0]==1 && num[1]== i){
//                 return units[i+10];}}}
//      else if(num.length == 2 && number>=20){
//          for(i=2; i<10; i++){
//              if(num[0]==i){
//                  for(k=1; k<10; k++){
//                      if(num[1]==k){
//                          return (tens[i-1]+" "+ units[k]);
//                      }
//                  }
//              }
//          }
//      }
    
//     else if(num.length == 3){
//         for(i=1; i<10; i++){
//             if(num[0]==i){
//                 for(u=2; u<10; u++){
//                     if(num[1]==u){
//                          for(k=1; k<10; k++){
//                             if(num[2]==k){
//                                 return (units[i]+" "+"hundred"+" "+tens[u-1]+" "+ units[k]);
//                      }else if(num[2]==0){
//                          return (units[i]+" "+"hundred"+" "+tens[u-1]);
//                      }
//                  }
//              }else if(num[1]==1){
//                  for(k=1; k<10; k++){
//                             if(num[2]==k){
//                  return (units[i]+" "+"hundred" + " "+ units[k+10]);
//              }else if(num[2]==0){
//                  return (units[i]+" "+"hundred" + " "+ units[10]);
//              }
//                  }}
//               else if(num[1]==0){
//                   for(k=1; k<10; k++){
//                             if(num[2]==k){
//                  return (units[i]+" "+"hundred" + " "+ units[k]);
//              }else if(num[2]==0){
//                                   return (units[i]+" "+"hundred");
//              }
//                   }}
              
//             }
//         }}
//     }
    
    
        
}

