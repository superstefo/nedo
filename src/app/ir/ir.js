"use client";
import React, { useState } from "react";

const IR = ({ handleSubmitFunc }) => {
  const [formData, setFormData] = useState({
    insuline0: "",
    glucose0: "",
    insuline60: "",
    glucose60: "",
    insuline120: "",
    glucose120: ""
  });

  const handleInput = (e) => {
    const fieldName = e.target.id;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  const submitForm = (e) => {

    // e.preventDefault();

    handleSubmitFunc(formData);

  }

  return (
    <div>
      <h1>Insuline Resistence Calculator</h1>
      <br></br>
      <form onSubmit={submitForm}>
        <div className="grid gap-4 mb-8 md:grid-cols-2">

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Инсулин, 0 min</label>
            <input type="number" id="insuline0" onChange={handleInput} value={formData.insuline0} placeholder="5.21 mU/L" step="0.01" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Глюкоза, 0 min</label>
            <input type="number" id="glucose0" onChange={handleInput} value={formData.glucose0} placeholder="4.97 mmol/L" step="0.01" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Инсулин, 60 min</label>
            <input type="number" id="insuline60" onChange={handleInput} value={formData.insuline60} placeholder="5.21 mU/L" step="0.01" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Глюкоза, 60 min</label>
            <input type="number" id="glucose60" onChange={handleInput} value={formData.glucose60} placeholder="4.97 mmol/L" step="0.01" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Инсулин, 120 min</label>
            <input type="number" id="insuline120" onChange={handleInput} value={formData.insuline120} placeholder="5.21 mU/L" step="0.01" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Глюкоза, 120 min</label>
            <input type="number" id="glucose120" onChange={handleInput} value={formData.glucose120} placeholder="4.97 mmol/L" step="0.01" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
  )
}

export default IR;