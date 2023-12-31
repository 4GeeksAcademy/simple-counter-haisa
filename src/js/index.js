//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types"

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter (props) {
	return (
		<div className="container-fluid" style={{marginTop:"20px"}}>
            <div className="d-flex justify-content-center">
                <div className="clock" style={{display:"flex",alignItems:"center", backgroundColor:"black", color:"white" , paddingRight:"15px", paddingLeft:"15px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-alarm" viewBox="0 0 16 16">
                        <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
                        <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
                    </svg>
                </div>
                <div className="six" style={{fontSize:"100px", color:"white", backgroundColor:"black", paddingRight:"15px", paddingLeft:"15px" }}>{props.digitSix% 10 } </div>
                <div className="five" style={{fontSize:"100px", color:"white", backgroundColor:"black", paddingRight:"15px", paddingLeft:"15px" }}>{props.digitFive% 10} </div>
                <div className="four" style={{fontSize:"100px", color:"white", backgroundColor:"black", paddingRight:"15px", paddingLeft:"15px" }}>{props.digitFour% 10} </div>
                <div className="three" style={{fontSize:"100px", color:"white", backgroundColor:"black", paddingRight:"15px", paddingLeft:"15px" }}>{props.digitThree% 10} </div>
                <div className="two" style={{fontSize:"100px", color:"white", backgroundColor:"black", paddingRight:"15px", paddingLeft:"15px" }}>{props.digitTwo% 10} </div>
                <div className="one" style={{fontSize:"100px", color:"white", backgroundColor:"black", paddingRight:"15px", paddingLeft:"15px" }}>{props.digitOne % 10 } </div>
            </div>
        </div>
	);
};

SimpleCounter.propTypes = {
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,
};

let counter = 0
setInterval(() =>{
    const six = Math.floor(counter/100000);
    const five = Math.floor(counter/10000);
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    counter++
    ReactDOM.render(
        <SimpleCounter 
            digitSix = {six}
            digitFive = {five}
            digitFour = {four}
            digitThree = {three}
            digitTwo = {two}
            digitOne = {one}
        />, document.querySelector("#app")
    );
}, 1000);


