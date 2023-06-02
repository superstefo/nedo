"use client";
import React, { useState } from "react";
import { useSearchParams } from 'next/navigation';

const IR = ({ handleSubmitFunc }) => {
  const searchParams = useSearchParams();
 
  const search = searchParams.get('ins0') || 0;

  const [formData, setFormData] = useState({
    insuline0: search,
    glucose0: 0,
    insuline60: 0,
    glucose60: 0,
    insuline120: 0,
    glucose120: 0
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
    handleSubmitFunc(formData);
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="justify-between p-8 max-w-5xl justify-center">
          <label >111 Инсулин, 0 min Insuline Resistence Calculator Insuline Resistence Calculator Insuline Resistence Calculator Insuline Resistence Calculator Insuline Resistence Calculator Insuline Resistence Calculator Insuline Resistence Calculator
          </label>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between">
        <h1>Мерни един. (инсулин):</h1>
        <div className="flex grid gap-2 mb-2 md:grid-cols-2">

          <div className="flex items-center mr-4">
            <input defaultChecked id="inline-2-radio" type="radio" value="" name="inline-radio-group1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">mU/L</label>
          </div>
          <div className="flex items-center">
            <input disabled id="inline-disabled-radio" type="radio" value="" name="inline-radio-group1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label  className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500">pmol/L</label>
          </div>
        </div>

        <br></br>
        <h1>Инсулин:</h1>
        <div className="grid gap-2 mb-2 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">0 min</label>
            <input type="number" id="insuline0" onChange={handleInput} value={formData.insuline0} placeholder="5.21 mU/L" step="0.01" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">60 min</label>
            <input type="number" id="insuline60" onChange={handleInput} value={formData.insuline60} placeholder="5.21 mU/L" step="0.01" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">120 min</label>
            <input type="number" id="insuline120" onChange={handleInput} value={formData.insuline120} placeholder="5.21 mU/L" step="0.01" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
        </div>
        <br></br>
        <h1>Мерни един. (глюкоза):</h1>
        <div className="flex grid gap-2 mb-2 md:grid-cols-2">

          <div className="flex items-center mr-4">
            <input defaultChecked id="inline-2-radio" type="radio" value="" name="inline-radio-group2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">mmol/L</label>
          </div>
          <div className="flex items-center">
            <input disabled id="inline-disabled-radio" type="radio" value="" name="inline-radio-group2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500">Inline</label>
          </div>
        </div>
        <h1>Глюкоза:</h1>
        <div className="grid gap-2 mb-2 md:grid-cols-2">
          <div>

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">0 min</label>
            <input type="number" id="glucose0" onChange={handleInput} value={formData.glucose0} placeholder="4.97 mmol/L" step="0.01" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">60 min</label>
            <input type="number" id="glucose60" onChange={handleInput} value={formData.glucose60} placeholder="4.97 mmol/L" step="0.01" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">120 min</label>
            <input type="number" id="glucose120" onChange={handleInput} value={formData.glucose120} placeholder="4.97 mmol/L" step="0.01" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <br></br>
          <button onClick={submitForm} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Готово</button>
        </div>
      </div>
    </>
  )
}

export default IR;