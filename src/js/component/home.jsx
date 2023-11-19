import { useEffect, useState } from "react";
import React from "react";
import { SimpleCounter } from "./simpleCounter";

//create your first component
const Home = () => {
	const [counter, setCounter] = useState(0)

	useEffect(() =>{
		const interval = setInterval(() => {
			setCounter(counter => counter + 1)
		}, 1000)
		return () => clearInterval(interval)
	}, [counter])

	function calculateSeconds(aCounter, placeValue){
		return Math.floor(aCounter/placeValue) % 10
	}

	return (

		<SimpleCounter 
			sixDigit = {calculateSeconds(counter, 100000)}
			fiveDigit = {calculateSeconds(counter, 10000)}
			fourDigit = {calculateSeconds(counter, 1000)}
			threeDigit = {calculateSeconds(counter, 100)}
			twoDigit = {calculateSeconds(counter, 10)}
			oneDigit = {calculateSeconds(counter, 1)}
		/>

	);
};

export default Home;
