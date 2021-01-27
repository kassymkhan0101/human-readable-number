module.exports = function toReadable (number) {
    if(number == 0){
    return 0;
    }
    var d = "";
    var units = {'1': "one", '2': "two", '3': "three", '4':"four", '5': "five", '6': "six", '7': "seven", '8': "eight",'9': "nine"}
    var tens = {'10': "ten",'20': "twenty", '30': "thirty", '40': "forty", '50': "fifty",'60': "sixty", '70': "seventy",'80': "eighty", '90': "ninety"}
    var teens = {'11': "eleven", '12': "twelve", '13':"thirteen", '14': "fourteen", '15': "fifteen", '16': "sixteen", '17': "seventeen", '18':"eighteen", '19':"nineteen"}
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
        if(((number%100) - (number%10)) == 90){
            d = d+ " "+ tens['90'];
           }
        else if(((number%100) - (number%10)) == 80){
            d = d+ " "+ tens['80'];
           }
    else if(((number%100) - (number%10)) == 70){
            d = d+ " "+ tens['70'];
           }
    else if(((number%100) - (number%10)) == 60){
            d = d+ " "+ tens['60'];
           }
    else if(((number%100) - (number%10)) == 50){
            d = d+ " "+ tens['50'];
           }
    else if(((number%100) - (number%10)) == 40){
            d = d+ " "+ tens['40'];
           }
   else if(((number%100) - (number%10)) == 30){
            d = d+ " "+ tens['30'];
           }
    else if(((number%100) - (number%10)) == 20){
            d = d+ " "+ tens['20'];
           }
    else if(((number%100) - (number%10)) == 10){
            d = d+ " "+ tens['10'];
           }
    if((number%100) == 19){
            d = d+ " "+ teens['19'];
           }
    else if((number%100) == 18){
            d = d+ " "+ teens['18'];
           }
    else if((number%100) == 17){
            d = d+ " "+ teens['17'];
           }
    else if((number%100) == 16){
            d = d+ " "+ teens['16'];
           }else if((number%100) == 15){
            d = d+ " "+ teens['15'];
           }else if((number%100) == 14){
            d = d+ " "+ teens['14'];
           }else if((number%100) == 13){
            d = d+ " "+ teens['13'];
           }else if((number%100) == 12){
            d = d+ " "+ teens['12'];
           }
    else if((number%100) == 11){
            d = d+ " "+ teens['11'];
           }
    if((number%10) == 9){
            d = d+ " "+ units['9'];
           }
    else if((number%10) == 8){
            d = d+ " "+ units['8'];
           }
     else if((number%10) == 8){
            d = d+ " "+ units['8'];
           } else if((number%10) == 7){
            d = d+ " "+ units['7'];
           } else if((number%10) == 6){
            d = d+ " "+ units['6'];
           } else if((number%10) == 5){
            d = d+ " "+ units['5'];
           } else if((number%10) == 4){
            d = d+ " "+ units['4'];
           } else if((number%10) == 3){
            d = d+ " "+ units['3'];
           } else if((number%10) == 2){
            d = d+ " "+ units['2'];
           } else if((number%10) == 1){
            d = d+ " "+ units['1'];
           }
    
    return d;
   
}
