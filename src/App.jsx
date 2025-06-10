import { useRef, useState } from "react";
import "./App.css";
import { is10DigitNumber, isFutureDate } from "./utils";

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [dob, setDob] = useState("");

	const modalContentRef = useRef(null);

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePhoneNumberChange = (e) => {
		setPhoneNumber(e.target.value);
	};

	const handleDobChange = (e) => {
		setDob(e.target.value);
	};

	const toggleModalOpen = () => {
		setIsModalOpen((prev) => !prev);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!is10DigitNumber(phoneNumber)) {
			alert("Invalid phone number. Please enter a 10-digit phone number.");
		}

		if (isFutureDate(dob)) {
			alert("Invalid date of birth. Date of birth cannot be in the future");
		}
		// console.log(username, ":", email, ":", phoneNumber, ":", dob);
		setUsername("");
		setEmail("");
		setPhoneNumber("");
		setDob("");
		setIsModalOpen(false);
	};

	const handleModalClose = (e) => {
		const elClickedOn = e.target;

		if (
			modalContentRef.current &&
			!modalContentRef.current.contains(elClickedOn)
		) {
			setIsModalOpen(false);
		}
	};

	return (
		<div className="container">
			<h1>User Details Modal</h1>
			<button onClick={toggleModalOpen} className="btn-primary">
				Open Form
			</button>
			{isModalOpen && (
				<div className="modal" onClick={handleModalClose}>
					<div className="modal-content" ref={modalContentRef}>
						<h2>Fill Details</h2>
						<form onSubmit={handleSubmit}>
							<label htmlFor="username">Username:</label>
							<input
								type="text"
								name="username"
								id="username"
								required
								value={username}
								onChange={handleUsernameChange}
							/>
							<label htmlFor="email">Email Address:</label>
							<input
								type="email"
								name="email"
								id="email"
								required
								value={email}
								onChange={handleEmailChange}
							/>
							<label htmlFor="phone">Phone Number:</label>
							<input
								type="tel"
								name="phone"
								id="phone"
								required
								value={phoneNumber}
								onChange={handlePhoneNumberChange}
							/>
							<label htmlFor="dob">Date of Birth:</label>
							<input
								type="date"
								name="dob"
								id="dob"
								required
								value={dob}
								onChange={handleDobChange}
							/>
							<button type="submit" className="btn-primary submit-button">
								Submit
							</button>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
