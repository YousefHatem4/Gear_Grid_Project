import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'


export let carsContext = createContext();

export default function CarsContextProvider({ children }) {


    const headers = {
        token: localStorage.getItem('userToken')
    }

    

    return <carsContext.Provider value={{ getAllCars, cars }}>
        {children}
    </carsContext.Provider>
}
