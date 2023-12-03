
convertMeasurement('4','cups','tablespoons');

function convertMeasurement(quantity, fromUnit, toUnit)
{
    const params={
        
        "cups" : {"tablespoons":16, "teaspoons":48},
        "teaspoons": {"cups":0.020833, "tablepoons":0.333333 } ,
        "tablespoons":{"cups": 0.0625, "teaspoons":3}
    };

    let daugiklis=(params[fromUnit][toUnit]);
    let atsakymas=parseFloat(daugiklis)*parseFloat(quantity);
    
    atsakymas=atsakymas.toFixed(2);

    let text=`${quantity} ${fromUnit} is equal to ${atsakymas} ${toUnit} `;
    //console.log(text);
    return text;
} 