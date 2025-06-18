import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';

export let carsContext = createContext();

export default function CarsContextProvider({ children }) {
    const [save, setSave] = useState(null);
    const [savedCarIds, setSavedCarIds] = useState(new Set());

    function getUserIdFromToken() {
        try {
            const token = localStorage.getItem('userToken');
            if (!token) {
                console.warn("No token found in localStorage");
                return null;
            }

            const decoded = jwtDecode(token);

            if (decoded.exp && decoded.exp * 1000 < Date.now()) {
                console.warn("Token expired");
                localStorage.removeItem('userToken');
                return null;
            }

            const userId = decoded?.userId || decoded?.nameid || decoded?.sub;

            if (!userId) {
                console.error("Token doesn't contain user ID", decoded);
                return null;
            }

            return userId;
        } catch (error) {
            console.error("Token decoding failed:", error);
            return null;
        }
    }

    async function getCarToSave(carId) {
        const userId = getUserIdFromToken();

        if (!userId) {
            toast.error('Please login to save cars');
            return;
        }

        try {
            await axios.post(
                `https://azmycarsapi.runasp.net/api/Favourites/${carId}/${userId}`
            );
            getCarsSave();
            toast.success('Car saved to favorites!');
        } catch (error) {
            console.error('Error saving car:', error);

            if (error.response?.status === 401) {
                toast.error('Session expired - please login again');
                localStorage.removeItem('userToken');
            } else if (error.response?.status === 400) {
                toast.error('Car already saved');
            } else {
                toast.error(error.response?.data?.message || 'Failed to save car.');
            }
        }
    }

    async function getCarsSave() {
        const userId = getUserIdFromToken();
        if (!userId) return;

        try {
            let { data } = await axios.get(
                `https://azmycarsapi.runasp.net/api/Favourites/${userId}`
            );
            setSave(data);
            const savedIds = new Set(data.map(car => car.id));
            setSavedCarIds(savedIds);
        } catch (error) {
            console.error('Error loading saved cars:', error);
            if (error.response?.status === 401) {
                localStorage.removeItem('userToken');
            }
           
        }
    }

    useEffect(() => {
        getCarsSave();
    }, []);

    return (
        <carsContext.Provider value={{ getCarToSave, save, savedCarIds }}>
            {children}
        </carsContext.Provider>
    );
}