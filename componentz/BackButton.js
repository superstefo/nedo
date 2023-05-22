"use client";

import React, { useState } from "react";


// import { useRouter } from 'next/router'
import { useRouter } from 'next/navigation';


const BackButton = () => {
 

  const router = useRouter()

  return (
    <div>
        
    
          <button onClick={() => router.back()}>назад</button>
    </div>
  )
}


export default BackButton;