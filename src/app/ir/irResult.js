"use client";
import React from "react";

const IrResult = ({ result }) => {

  const getWord = (rate) => {
    if (rate == 1) return "слаба";
    if (rate == 2) return "умерена";
    if (rate == 3) return "силна";
  }

  const IRResult = () => (
    <>
      {result.ir.map((one, ind) => {
        let rate = one.result;
        return (
          <label key={ind} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {rate = !0 ? <>Открива се {getWord(rate)} инсулинова резистентност на {one.check} от теста.</> : <></>}
          </label>
        )
      })}
    </>
  );

  return (
    <div>
      <br></br>
      <div className="grid gap-4 mb-4 md:grid-cols-1">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {result.homaIndex}
        </label>
      </div>
      <IRResult/>
    </div>
  )
}

export default IrResult;