

// insuline0: "",
// glucose0: "",
// insuline60: "",
// glucose60: "",
// insuline120: "",
// glucose120: ""

const irLogic1 = (input) => {
  let result = {
    ir: checkInsulineResistance(input),
    hypoglycemy: "",
    diabetes: "",
    homaIR: 0
  };

  console.log("stuff1 ");
  checkInsulineResistance(result, input);


}



const checkInsulineResistance = (input) => {
  let result = "Няма инсулинова резистентност на 0 минута;";
  if (input.insuline0 > 9 && input.insuline0 < 12) {
    result = "Открива се слаба инсулинова резистентност на 0 минута; "
  } else if (input.insuline0 > 15) {
    result = "Открива се силна инсулинова резистентност на 0 минута; "
  }
  result = result + "\n";

  if (input.insuline60 < 30) {
    result = result + "Няма инсулинова резистентност на 60та минута; "
  } else if (input.insuline60 < 50) {
    result = result + "Открива се слаба инсулинова резистентност на 60та минута; "
  } else if (input.insuline60 <= 80) {
    result = result + "Открива се силна инсулинова резистентност на 60та минута; "
  } else if (input.insuline60 > 80) {
    result = result + "Открива се много силна инсулинова резистентност на 60та минута; "
  }
  result = result + "\n";

  if (input.insuline120 > 30) {
    result = result + "Открива се слаба инсулинова резистентност на 120та минута; "
  } else if (input.insuline120 <= 80) {
    result = result + "Открива се силна инсулинова резистентност на 120та минута; "
  } else if (input.insuline120 > 80) {
    result = result + "Открива се много силна инсулинова резистентност на 120та минута; "
  }

  return result

}

// irLogic1.get1 = (stuff) => {
//   console.log(" sss123321 stuff");
//   console.log(stuff);
//   console.log(irLogic1);

// }

export default irLogic1;