let analysedResults = [];
let homaIr = null;
let finalIrStrength = 0;
let irResult0, irResult60, irResult120 = null;

const irLogic1 = (input) => {
  console.log(irResult0);
  console.log(irResult60);
  console.log(irResult120);
  analysedResults = [];

  checkInsulineResistance(input);
  let result = {
    analysedResults: analysedResults,
    homaIr: homaIr,
    hypoglycemy: "",
    diabetes: "",
    homaIndex: getHomaIndex(input)
  };

   return result;
}

const getHomaIndex = (input) => {
  if (!input.insuline0 || !input.glucose0) {
    return;
  }
  console.log(input.insuline0 + " " + input.glucose0);
  let result = "";
  try {
    homaIr = Math.round((input.insuline0 * input.glucose0 / 22.5) * 100) / 100;
  } catch (error) {
    result = "Вашият HOMA IR индекс не може да бъде изчислен на база на стойностите на инсулин и глюкоза;";
  }
  result = "Вашият HOMA IR индекс е: " + homaIr + "; Повечето здрави хора имат стойности на HOMA IR по-ниски от 2.50;";
  analysedResults.push(result);
}

const checkInsulineResistance = (input) => {
  irResult0 = checkInsulineResistance0min(input);
  irResult60 = checkInsulineResistance60min(input);
  irResult120 = checkInsulineResistance120min(input);
  if (irResult0 !== 0 ) {
    
  }
  if (!irResult0 && !irResult60 && !irResult120 ) {
    analysedResults.push("Не може да се направи качествен анализ на ИР по дадените измервания;");
  } else {
    analysedResults.push(irResult0);
    analysedResults.push(irResult60);
    analysedResults.push(irResult120);
  }
  return analysedResults;
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
  irResult0 = result;
 // return getSentence(result, 0);
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
  irResult60 = result;
 // return getSentence(result, 60);
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
  irResult120 = result;
//  return getSentence(result, 120);
}

const getSentence = (momentaryIrStrength, minute) => {
  // if (momentaryIrStrength > finalIrStrength ) {
  //   finalIrStrength = momentaryIrStrength;
  // }
  if (momentaryIrStrength === -1) return null;
  if (momentaryIrStrength === 0) return "Нe се открива инсулинова резистентност на " + minute + " минута от теста.";
  let modifier = "";
  if (momentaryIrStrength === 1) modifier = "СЛАБА";
  if (momentaryIrStrength === 2) modifier = "УМЕРЕНА";
  if (momentaryIrStrength === 3) modifier = "СИЛНА";
  return "Открива се " + modifier + " инсулинова резистентност на " + minute + " минута от теста.";
}

export default irLogic1;