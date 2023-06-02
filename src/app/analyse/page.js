"use client";
import React from 'react';
import IR from "./ir"
import IrResult from './irResult';
import irLogic1 from './irLogic1';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
      irResult: ""
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  getData = (data) => {
    let irResult1 = irLogic1(data);
    this.setState({ isShown: true, irResult: irResult1 });
  }

  render() {
    return (
      <div className="min-h-screen">
        <br></br>
        <IR handleSubmitFunc={this.getData} />
        {(this.state.isShown) ? <IrResult result={this.state.irResult} /> : <></>}
      </div>
    )
  }
}
export default Page;