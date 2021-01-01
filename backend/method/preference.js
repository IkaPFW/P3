function getCommon(crit, arr2){
    var common = 0;
    var j = 0;

    while (j < arr2.length){
        if(crit == arr2[j]){
            if(j == 0){
                common = 5;
            }
            else if(j == 1){
                common = 4
            }
            else if(j == 2){
                common = 3
            }
            else if(j == 3){
                common = 2
            }
            else{
                common = 1;
            }
            break;
        }
        else{
            j++;
        }
    }
    return common;
}

function convertPreference(input, preference){
    let newInput =[];
    for(let i = 0; i < input.length; i++){
        newInput[i] = [];
        for(let j = 0; j < input[i].length; j++){
            let nilai = getCommon(input[i][j], preference[j]);
            newInput[i].push(nilai);
            console.log(newInput);
            console.log(getCommon(input[i][j], preference[j]));
        }
    }
    return newInput;
}

module.exports = convertPreference;