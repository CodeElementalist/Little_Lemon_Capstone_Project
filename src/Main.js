import React, { useState, useReducer } from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import MenuPage from "./MenuPage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import OrderOnlinePage from "./OrderOnlinePage";
import LoginPage from "./LoginPage";
import { Routes, Route } from "react-router-dom";
import "./index.css";

const Main = () => {
	
	const updateTimes = (selectedDate) => {
		//fetchData(selectedDate)
		//	.then((availableTimes) => {
				return availableTimes
		//	})
		//	.catch((error) => {
			  // Handle any errors that occur during the API call
		//});
	}
	
	const initializeTimes = [//() => {
		//	const fetchData = () => {
		//		const today = new Date();
		//		availableTimes = fetchAPI(today)
			"18:00",
			"19:00",
			"20:00",
			"21:00",
			"22:00"]
		//};
	//};
	
	const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
	
	const handleDateChange = (e) => {
	  const selectedDate = e.target.value;
	  dispatch(selectedDate);
	};
	
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/menu" element={<MenuPage />} />
				<Route path="/reservation" element={<BookingPage availableTimes={availableTimes} dispatch={handleDateChange} />} />
				<Route path="/confirmation" element={<ConfirmedBooking />} />
				<Route path="/order_online" element={<OrderOnlinePage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</>
	);
};

export default Main; 