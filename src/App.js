import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timer:'00:00',
			breakLength:5,
			sessionLength:25
		};
		
 		this.startTimer = this.startTimer.bind(this)
 		this.controls = this.controls.bind(this)

	}

	startTimer = function(duration, display) {
			let timer = duration, minutes, seconds;
			setInterval(function () {
				minutes = parseInt(timer / 60, 10)
				seconds = parseInt(timer % 60, 10);

				minutes = minutes < 10 ? "0" + minutes : minutes;
				seconds = seconds < 10 ? "0" + seconds : seconds;

				display.textContent = minutes + ":" + seconds;

				if (--timer < 0) {
				   timer = duration;
				}
			}, 1000); 
		};

		controls = function() {
		    let fiveMinutes = 60 * this.state.sessionLength,
		        display = document.querySelector('.timer');
		    this.startTimer(fiveMinutes, display);
		};
		breakPlus = function() {
			this.setState({
				breakLength:this.state.breakLength+1
			});
		};
		breakMinus = function() {
			this.setState({
				breakLength:this.state.breakLength-1
			});
		};
		sessionPlus = function() {
			this.setState({
				sessionLength:this.state.sessionLength+1
			});
		};
		sessionMinus = function() {
			this.setState({
				sessionLength:this.state.sessionLength-1
			});
		};
	render() {
		return (
			<div className="App">
				<div className="title"> 
					Promodo Clock
				</div>
				<div className="changingDisplay">
					<div className="breakLength">
						<div className="breakLengthTitle">
							Break Length:
						</div>
						<div className="breakLengthDisplay">
							<span onClick={()=>this.breakMinus()}>-</span>
							<span>{this.state.breakLength}</span>
							<span onClick={()=>this.breakPlus()}>+</span>
						</div>
					</div>
					<div className="sessionLength">
						<div className="sessionLengthTitle">
							Session Length:
						</div>
						<div className="sessionLengthDisplay">
							<span onClick={()=>this.sessionMinus()}>-</span>
							<span>{this.state.sessionLength}</span>
							<span onClick={()=>this.sessionPlus()}>+</span>
						</div>
					</div>
				</div>

				<div className="sessionTimer">
					<div className="sessionTimerTitle">
						Session
					</div>
					<Timer timerValue = {this.state.timer}/>
					<div className="buttons" onClick={()=>this.controls()}>
						BUTTONS
					</div>
				</div>

			</div>
		);
	}
}

class Timer extends Component {
	constructor() {
		 super();

	}




	render() {
		return (
			<div className="timer">
				{this.props.timerValue}
			</div>
		);
	}
}

export default App;

