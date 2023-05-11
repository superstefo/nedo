"use client";
import React from 'react';
import IR from "./ir"
import irLogic1 from './irLogic1';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false
    };
    this.ir = irLogic1;
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  changeState = () => {
    // this.setState({ isShown: false }, () => {console.log("callback =false")});
  }

  getData = (data) => {
    console.log("stefo data:");
    console.log(data);
    irLogic1.get1()
    irLogic1("sd")
  }



  render() {


    return (

      <div className="flex min-h-screen flex-col items-center justify-between p-24">

        <IR handleSubmitFunc={this.getData} />

        {(this.state.isShown) ? <div>kooor2</div> : <div>kooor1</div>

        }

      </div>

    )
  }
}
export default Page;