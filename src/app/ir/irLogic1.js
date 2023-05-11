function irLogic3() {


  console.log("stuff3 " );
  console.log(this);

}

const irLogic2 = () => {



  console.log("stuff2 " );


// const get2 = (stuff) => {
//   console.log(" sss123321 stuff");
//   console.log(stuff);

//   const [formData, setFormData] = useState({
//     vv: "",
//     ff: ""
//   });
// }

}
  const irLogic1 = ({ handleSubmitFunc }) => {


    console.log("stuff1 " );
    console.log(this);

    irLogic2();
    irLogic3();


}

irLogic1.get1 = (stuff) => {
  console.log(" sss123321 stuff");
  console.log(stuff);
  console.log(irLogic1);
  
}

export default irLogic1;