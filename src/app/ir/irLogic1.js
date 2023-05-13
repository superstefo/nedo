const irLogic1 = (input) => {
  let result = {
    ir: checkInsulineResistance(input),
    hypoglycemy: "",
    diabetes: "",
    homaIndex: getHomaIndex(input)
  };

  return result;
}


const getHomaIndex = (input) => {
  let result;
  try {
    result = Math.round((input.insuline0 * input.glucose0 / 22.5) * 100) / 100;
  } catch (error) {
    return "Вашият резултат не може да бъде изчислен на база на дадените стойности на инсулин и глюкоза.";
  }
  return "Вашият HOMA IR индекс е: " + result + "; Повечето здрави хора имат стойности на HOMA IR по-ниски от 2.50.";
}

const checkInsulineResistance = (input) => {
  let result = [];
  if (input.insuline0 > 1) {
    result.push(checkInsulineResistance0min(input))
  }
  if (input.insuline60 > 10) {
    result.push(checkInsulineResistance60min(input))
  }
  if (input.insuline120 > 1) {
    result.push(checkInsulineResistance120min(input))
  }
  return result
}

const checkInsulineResistance0min = (input) => {
  let result = 0;
  if (input.insuline0 > 6 && input.insuline0 < 11) {
    result = 1;
  } else if (input.insuline0 < 15) {
    result = 2;
  } else if (input.insuline0 >= 15) {
    result = 3;
  }
  return { "check": "0 минута", "result": result };
}

const checkInsulineResistance60min = (input) => {
  let result;
  if (input.insuline60 < 40) {
    result = 0;
  } else if (input.insuline60 < 50) {
    result = 1;
  } else if (input.insuline60 <= 80) {
    result = 2;
  } else if (input.insuline60 > 80) {
    result = 3;
  }

  return { "check": "60 минута", "result": result };
}

const checkInsulineResistance120min = (input) => {
  let result;
  if (input.insuline120 < 9) {
    result = 0;
  } else if (input.insuline120 < 15) {
    result = 1;
  } else if (input.insuline120 <= 30) {
    result = 2;
  } else if (input.insuline120 > 30) {
    result = 3;
  }

  return { "check": "120 минута", "result": result };
}

export default irLogic1;