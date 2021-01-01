// const { isBenefit } = require("../config");
// const transpose = require("../transpose");

  function rank(sorted){
    const ranks = sorted.slice().sort((a, b) => {
        return a - b;
      }).map((v) => {
        return sorted.indexOf(v) + 1;
      });
    return ranks;
  }

function sort(sum, alter){
  const sorted = alter.map((alt, index) => {
      return alt + sum[index];
  });
  return sorted;
}

function summa(input){
             
  if (toString.call(input) !== "[object Array]")
     return false;
       
             var total =  0;
             for(var i=0;i<input.length;i++)
               {                  
                 if(isNaN(input[i])){
                 continue;
                  }
                   total += Number(input[i]);
                }
              return total;
             }

function rankAlt(sum, data){
  const sorted = sort(sum, data);
  const ranked = rank(sorted);
  const rankedAlt = data.reduce((arr, val, index) => {
      const newObj = {
          rank: ranked[index],
          value: summa(val)
      };
      return [...arr, newObj];
  }, []);
  return rankedAlt;
}

// function isValTrue(val) {
//   if(val == true){
//     return val = true
//   } else {
//     return val = false
//   }
// }

function arrMax(transposeVal){
  var arr = transposeVal;
  var col = transposeVal.map(function (elem){
    return elem[1];
  });

  var index = Math.max.apply(arr, col);
  //console.log(index);
  return index;
}

//val == true ? Math.max.apply(Math, row) : Math.min.apply(Math, row);
function normalization(decision, maxInd) {
  // for(i = 0; i <= decision.length; i++){
  // var col2 = decision.map(function (elem) {
  //     return elem[i]; //to get all the column 2 values
  // });
  // var k = col2.indexOf(Math.max(col2));}
  // console.log(col2,k);
    return decision.reduce((arr, alt) => {
      //console.log(col2);
      const arrCriteria = alt.reduce((arrCrit, val) => {
        //console.log(arrCrit);
        const newArrCriteria =  val/maxInd;
          return [...arrCrit, newArrCriteria];
        }, []);
      return [...arr, arrCriteria];
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

function sum(optimasi){
  let sum = 0;

  for(let i = 0; i < optimasi.length; i++){
    optimasi[i].forEach(element => {
      sum = sum + element;
    });
  }

  return sum;
}

function saw(decision, bobot){
  //const decisionTranspose = transpose(decision);
  const masIndex = arrMax(decision);
  
  const normalisasi = normalization(decision, masIndex);
  const optimazation = optimasi(normalisasi, bobot);
  const sumSaw = sum(optimazation);
  
  const ranking = rankAlt(sumSaw, optimazation);
  console.log(ranking);

  return{
    sawNormalization: normalisasi,
    optimasi: optimazation,
    rank: ranking
  };
}

module.exports = saw;

// function isBenefited(transposedVal, isBenefitArr) {
//   return transposedVal.map((row) => {
//     let id = null;
//     isBenefitArr.map((val) => {
//       id =
//         val == true ? Math.max.apply(Math, row) : Math.min.apply(Math, row);
//     });
//     return id;
//   });
// }

// function sum(transposeVal){
//   return transposeVal.reduce((sumArr, alt) => {
//       let sum = alt.reduce((sum, val) => {
//           return sum + val;
//       }, 0);
//       return [...sumArr, sum];
//   }, []);
// }