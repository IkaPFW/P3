const { isBenefit } = require("../config");
const transpose = require("../transpose");

function sort(altPos, altNeg){
    const sorted = altNeg.map((alt, index) => {
        return alt / (alt+altPos[index]);
    });
    return sorted;
}

function rank(sorted){
    const ranks = sorted.slice().sort((a, b) => {
        return a - b;
    }).map((v) => {
        return sorted.indexOf(v) + 1;
    });
    return ranks;
}

function rankAlt(altPos, altNeg){
    const sorted = sort(altPos, altNeg);
    const ranked = rank(sorted);
    const rankedAlt = sorted.reduce((arr, val, index) => {
        const newObj = {
            rank: ranked[index],
            value: val
        };
        return [...arr, newObj];
    }, []);
    return rankedAlt;
}

function sumSquare(transposeVal){
    return transposeVal.reduce((sumArr, alt) => {
        let sum = alt.reduce((sum, val) => {
            return sum + Math.pow(val, 2);
        }, 0);
        return [...sumArr, sum];
    }, []);
}

function normalisasi(decision, sumSquareArr){
    return decision.reduce((arr, alt) => {
        const arrCrit = alt.reduce((arrCrit, val, index) => {
            const newArrCrit = val/Math.sqrt(sumSquareArr[index]);
            return [...arrCrit, newArrCrit];
        }, []);
        return [...arr, arrCrit];
    }, []);
}

function optimasi(normalisasi, bobot){
    return normalisasi.reduce((arr, alt) => {
        const arrCrit = alt.reduce((arrCrit, val, index) => {
            const newArrCrit = val * bobot[index];
            return [...arrCrit, newArrCrit];
        }, []);
        return [...arr, arrCrit];
    }, []);
}

function idealPos(transposeVal, benefitArr){
    return transposeVal.map((row) => {
        let idPos = null;
        benefitArr.map((val) => {
            idPos = val == true ? Math.max.apply(Math, row) : Math.min.apply(Math, row);
        })
        return idPos;
    });
}

function idealNeg(transposeVal, benefitArr){
    return transposeVal.map((row) => {
        let idNeg = null;
        benefitArr.map((val) => {
            idNeg = val == true ? Math.min.apply(Math, row) : Math.max.apply(Math, row);
        })
        return idNeg;
    });
}

function sumPosNeg(arrIdeal, optimasi){
    return optimasi.reduce((sumArr, alt) => {
        let sum = alt.reduce((sum, val, index) => {
            return sum+Math.pow(arrIdeal[index] - val, 2);
        }, 0);
        return [...sumArr, sum];
    }, []);
}

function altPosNeg(arrSum){
    return arrSum.reduce((sumArr, alt) => {
        let sqrt = Math.sqrt(alt);
        return [...sumArr, sqrt];
    }, []);
}

function topsis(decision, bobot, isBenefit){
    const decisionTranspose = transpose(decision);
    const critSumSqrt = sumSquare(decisionTranspose);

    const normalDecision = normalisasi(decision, critSumSqrt);
    const optimizedDecision = optimasi(normalDecision, bobot);

    const optimizedTranspose = transpose(optimizedDecision);
    const idealPositive = idealPos(optimizedTranspose, isBenefit);
    const idealNegative = idealNeg(optimizedTranspose, isBenefit);

    const sumIdealPos = sumPosNeg(idealPositive, optimizedDecision);
    const sumIdealNeg = sumPosNeg(idealNegative, optimizedDecision);

    const alterPos = altPosNeg(sumIdealPos);
    const alterNeg = altPosNeg(sumIdealNeg);

    const altRank = rankAlt(alterPos, alterNeg);

    return{
        topsisNormalized: normalDecision,
        optimasi: optimizedDecision,
        idPos: idealPositive,
        idNeg: idealNegative,
        altPos: alterPos,
        altNeg: alterNeg,
        rank: altRank
    };
}

module.exports = topsis;