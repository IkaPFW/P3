const transpose = require("./transpose");

function normalisasi(arr, {min, max}){
    let normalCol = [];
    let restNormalCol = [];
    for(let i = 0; i < arr.length; i++){
        [a, b, ...rest] = arr[i];
        normalCol.push([a, b]);
        restNormalCol.push(rest);
    }

    let normalArr = normalisasiArray(normalCol, {min, max});
    for(let i = 0; i < normalArr.length; i++){
        normalArr[i].push(...restNormalCol[i]);
    }
    return normalArr;
}

function normalisasiArray(arr, {min, max}){
    const transposeArr = transpose(arr);
    const normalArr = transposeArr.reduce((acc, val) =>{
        const minOld = Math.min(...val);
        const maxOld = Math.max(...val);

        const newVal = val.reduce((valAcc, valVal) =>{
            const newValVal = ((max - min)/(maxOld - minOld)) * (valVal - minOld) + min;
            return [...valAcc, newValVal];
        }, []);
        return [...acc, newVal];
    }, []);
    const undoTranspose = transpose(normalArr);
    return undoTranspose;
}

module.exports = normalisasi;