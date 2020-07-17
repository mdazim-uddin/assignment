
function feetToMile(feet) {
    var mile= feet/5280;
    return mile;
}
var sirMile = feetToMile(52800);
console.log(sirMile);
var babaMile=  feetToMile(62800);
console.log(babaMile);
var dosomic=11.893939393939394;
 var result= Math.floor(dosomic);
 console.log(result);
/* feet---to--mile- ends-*/

function woodCalculator(chair, table, bed ) {

    var chairCount= chair*1;
    var tableCount=table*3;
    var bedCount= bed*5;
    var total= chairCount + tableCount +bedCount;
    return total;
}
  var result= woodCalculator(1,3,5 ) ;
  console.log(result);

/* woodcalculator---- ends-*/

  
 function tinyFriend(nam){

    var smalest= nam[0];
    for(var i = 0; i < nam.length; i++){
        var element = nam[i];
        if(element.length < smalest.length){
            smalest = element;

        }
    }
    return smalest;
};


    function brickCalculator(floorNumber){
        if (floorNumber <=10 && floorNumber >=1){
            let brickNumber = floorNumber * 15000;
            return brickNumber;
        }
        else if (floorNumber > 10 && floorNumber <= 20) {
            let brickNumber = ((floorNumber - 10) * 12000) + 150000;
            return brickNumber;
        }
        else if (floorNumber > 20){
            let brickNumber =((floorNumber - 20) * 10000) + 270000;
            return brickNumber;
        }
        else {
            return "Something is wrong!";
        }
    };
    let result1 = brickCalculator(12);
    console.log(result1);
    let result2 = brickCalculator(26);
    console.log(result2);
    let result3 = brickCalculator(35);
    console.log(result3);
    let result4 = brickCalculator(-4);
    console.log(result4)