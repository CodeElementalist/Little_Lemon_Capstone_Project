import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes } from './Main';

test('Renders the BookingForm heading', () => {
    const updateTimes = (selectedDate) => {
		return availableTimes
	}
	
	const initializeTimes = [
		  '17:00',
		  '18:00',
		  '19:00',
		  '20:00',
		  '21:00',
		  '22:00'
	];
	
	const [availableTimes, dispatch] = jest.fn;
	
	const handleDateChange = jest.fn;
	
	render(<BookingForm />);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
})

test('returns the correct expected value', () => {
  const expectedValue = ['17:00',
		  '18:00',
		  '19:00',
		  '20:00',
		  '21:00',
		  '22:00'];
  const result = initializeTimes;

  expect(result).toEqual(expectedValue);
});