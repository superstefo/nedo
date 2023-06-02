"use client";
import React from "react";

const IrResult = ({ result }) => {

  const Result = () => (
    <>
      {result.analysedResults.map((one, ind) => {
        return (
          <label key={ind} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {one != null ? <>{one}</> : <></>}
          </label>
        )
      })}
    </>
  );

  return (
    <div className="flex flex-col items-center justify-between p-8">
      <div className="grid gap-4 mb-4 md:grid-cols-1">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {result.homaIndex}
        </label>
      </div>
      <Result/>
    </div>
  )
}

export default IrResult;