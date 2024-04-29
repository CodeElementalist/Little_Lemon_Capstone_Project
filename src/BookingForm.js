import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import "./index.css";

const BookingForm = (props) => {
	const [date, setDate] = useState("");
	const [guest, setGuest] = useState("");
	const [name, setName] = useState("");
	const [contact, setContact] = useState("");
	const [email, setEmail] = useState("");
	
	const {availableTimes, handleDateChange} = props;
	
	const navigate = useNavigate();
	
	return (
		<>
			<form className="containerForm">
				<div className="itemDate">
					<label htmlFor="res-date">Choose date</label>
					<input type="date" id="res-date" onChange={handleDateChange} required />
				</div>
				<div className="itemTime">
					<label htmlFor="res-time">Choose time</label>
					<select id="res-time" required>
						{availableTimes.map((time, index) => (
							<option key={index}>{time}</option>
						))}
					</select>
				</div>
				<div className="itemInfo">
					<h4>Basic Information</h4>
					<label htmlFor="guest-name">Your name</label>
					<input type="text" id="guest-name" placeholder={"Name"} onChange={(e) => {setName(e.target.value)}} required /><br />
					<label htmlFor="guest-contact">Your contact number</label>
					<input type="text" id="guest-contact" placeholder={"Contact Number"} onChange={(e) => {setContact(e.target.value)}} required /><br />
					<label htmlFor="guest-email">Your email address</label>
					<input type="email" id="guest-email" placeholder={"Email"} onChange={(e) => {setEmail(e.target.value)}} />
				</div>
				<div className="itemGuest">
					 <label htmlFor="guests">Number of guests</label>
					 <input type="number" placeholder={1} min={1} max={10} id="guests" onChange={(e) => {setGuest(e.target.value)}} required />
				</div>
				<div className="itemOccasion">
					<label htmlFor="occasion">Occasion</label>
					<select id="occasion" required>
						<option>Birthday</option>
						<option>Anniversary</option>
					</select>
				</div>
				<div className="itemSubmit">
					<input type="submit" defaultValue="Make Your reservation" aria-label="On Click" onClick={() => navigate("/confirmation")} />
				</div>
			</form>
		</>
	);
};

export default BookingForm;