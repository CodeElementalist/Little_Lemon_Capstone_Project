import React from "react";
import "./index.css";
import BookingForm from "./BookingForm";

const BookingPage = (props) => {
	return (
		<>
			<main>
				<BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch}/>
			</main>
		</>
	);
};

export default BookingPage;