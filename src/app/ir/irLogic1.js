let finalIRresult = [];
const irLogic1 = (input) => {
  finalIRresult = [];
  checkInsulineResistance(input);
  // let result = {
  //   ir: checkInsulineResistance(input),
  //   hypoglycemy: "",
  //   diabetes: "",
  //   homaIndex: getHomaIndex(input)
  // };

   return finalIRresult;
}

const getHomaIndex = (input) => {
  if (!input.insuline0 || !input.glucose0) {
    return null;
  }
  let result;
  try {
    result = Math.round((input.insuline0 * input.glucose0 / 22.5) * 100) / 100;
  } catch (error) {
    return "Вашият HOMA IR индекс не може да бъде изчислен на база на стойностите на инсулин и глюкоза.";
  }
  return "Вашият HOMA IR индекс е: " + result + "; Повечето здрави хора имат стойности на HOMA IR по-ниски от 2.50.";
}

const checkInsulineResistance = (input) => {

  let result0 = checkInsulineResistance0min(input);
  let result60 = checkInsulineResistance60min(input);
  let result120 = checkInsulineResistance120min(input);
  if (!result0 && !result60 && !result120 ) {
    finalIRresult.push("Тези измервания на глюкоза и инсулин не са достатъчни за да се каже със сигурност");
  } else {
    finalIRresult.push(result0);
    finalIRresult.push(result60);
    finalIRresult.push(result120);
  }
  // if (input.insuline0 <= 0) {
  //   finalIRresult.push("");
  //   result.push();
  // }
  // if (input.insuline60 > 8) {
  //   result.push(checkInsulineResistance60min(input));
  // }
  // if (input.insuline120 > 1) {
  //   result.push(checkInsulineResistance120min(input));
  // }
  // if (input.insuline120 > 1) {
  //   result.push(checkInsulineResistance120min(input));
  // }
  // console.log(result);
  return finalIRresult;
}

const checkInsulinPeak = (input) => {
  let result = 0;
   if (input.insuline60 < input.insuline120 ) {
    result = 1;
  } 
  return { "check": "пик", "result": result };
}

const checkInsulineResistance0min = (input) => {
  let result;
  if ( input.insuline0 <= 0) {
    result = -1;
  } else if (input.insuline0 < 7) {
    result = 0;
  } else if (input.insuline0 < 11) {
    result = 1;
  } else if (input.insuline0 < 15) {
    result = 2;
  } else if (input.insuline0 >= 15) {
    result = 3;
  }
  return getSentence(result, 0);
}
 
const checkInsulineResistance60min = (input) => {
  let result;
  if (input.insuline60 <= 0) {
    result = -1;
  } else if (input.insuline60 < 40) {
    result = 0;
  } else if (input.insuline60 < 50) {
    result = 1;
  } else if (input.insuline60 < 60) {
    result = 2;
  } else if (input.insuline60 >= 70) {
    result = 3;
  }
  return getSentence(result, 60);
}

const checkInsulineResistance120min = (input) => {
  let result;
  if ( input.insuline120 <= 0) {
    result = -1;
  } else if (input.insuline120 < 9) {
    result = 0;
  } else if (input.insuline120 < 15) {
    result = 1;
  } else if (input.insuline120 < 30) {
    result = 2;
  } else if (input.insuline120 >= 30) {
    result = 3;
  }
  return getSentence(result, 120);
}

const getSentence = (rate, minute) => {
  if (rate === -1) return null;
  if (rate === 0) return "НЯМА инсулинова резистентност на " + minute + " минута от теста.";
  let modifier = "";
  if (rate === 1) modifier = "СЛАБА";
  if (rate === 2) modifier = "УМЕРЕНА";
  if (rate === 3) modifier = "СИЛНА";
  return "Открива се " + modifier + " инсулинова резистентност на " + minute + " минута от теста.";
}

export default irLogic1;