import React from "react";
import ReactDOM from "react-dom";

import fake from "fake-words";

function generateHash(length = 20) {
	// Credit: Petja Touru
	const characters = "0123456789abcdefghijklmnopqrstuvwxyz";
	const hash = Array.from(
		window.crypto.getRandomValues(new Uint32Array(length))
	)
		.map(x => characters[x % characters.length])
		.join("");

	return hash;
}

function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const MAX_ADDRESS_LENGTH = 64;

class App extends React.Component {
	constructor(props) {
		super(props);

		const addressLength = 10;

		this.state = {
			domain: "domain.com",
			generatedAddress: generateHash(addressLength),
			addressLength: addressLength,
			isOptionsVisible: true,
			isGeneratingPaused: false
		};
	}

	componentDidMount() {
		this.hydrateFromLocalStorage();

		window.addEventListener("unload", this.saveToLocalStorage);
	}

	componentDidUpdate(prevProps, prevState) {
		const { generationStyle, addressLength } = this.state;

		if (
			prevState.generationStyle === generationStyle &&
			prevState.addressLength === addressLength
		) {
			return;
		}

		this.genereateLocalPart();
	}

	componentWillUnmount() {
		window.removeEventListener("unload", this.saveToLocalStorage);
	}

	constructFullEmailAddress() {
		return this.state.generatedAddress + "@" + this.state.domain;
	}

	genereateLocalPart = () => {
		const { generationStyle, addressLength } = this.state;

		if (generationStyle === "user") {
			const MIN_AGE_THRESHOLD = 18;
			const MAX_AGE_THRESHOLD = 70;

			const { firstName, lastName } = fake.user();
			const currentYear = new Date().getFullYear();

			const suffix = randomIntFromInterval(
				currentYear - MAX_AGE_THRESHOLD,
				currentYear - MIN_AGE_THRESHOLD
			)
				.toString()
				.slice(-2);

			const name =
				Math.random() >= 0.5
					? firstName + "." + lastName
					: lastName + "." + firstName;

			const generatedAddress = name.toLowerCase() + suffix;

			this.setState({ generatedAddress });
			return;
		}

		if (generationStyle === "hash-and-domain") {
			chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
				const tab = tabs[0];
				const url = new URL(tab.url);
				const domain = url.hostname;

				// Remove 1 character to make space for "-" separator
				// between domain and hash
				const generatedAddress =
					domain.substring(0, MAX_ADDRESS_LENGTH / 2 - 1) +
					"-" +
					generateHash(addressLength);

				this.setState({ generatedAddress });
			});

			return;
		}

		this.setState({ generatedAddress: generateHash(addressLength) });
	};

	saveToLocalStorage = () => {
		window.localStorage.setItem("state", JSON.stringify(this.state));
	};

	hydrateFromLocalStorage = () => {
		const state = window.localStorage.getItem("state");

		if (!state) return;

		const parsedState = JSON.parse(state);

		this.setState({
			...parsedState
		});

		this.genereateLocalPart();
	};

	render() {
		const { generationStyle } = this.state;

		const maxAddressLength =
			generationStyle === "hash-and-domain"
				? MAX_ADDRESS_LENGTH / 2
				: MAX_ADDRESS_LENGTH;

		const isAddressLengthSelectDisabled = generationStyle === "user";

		return (
			<div className="container">
				<div className="generator">
					<div className="label">Your single-use email address:</div>

					<div className="flex">
						<div>
							<button
								onClick={event => {
									this.generatorInput.select();
									document.execCommand("copy");

									// get rid of selected text in the input
									window.getSelection().removeAllRanges();
								}}
								type="button"
							>
								<i
									className="far fa-copy"
									style={{ fontSize: 16 }}
								/>
							</button>
						</div>
						<input
							type="text"
							value={this.constructFullEmailAddress()}
							ref={element => (this.generatorInput = element)}
							onChange={() => {}}
						/>
						<div>
							<button
								onClick={this.genereateLocalPart}
								type="button"
							>
								<i
									className="fas fa-redo"
									style={{ fontSize: 13 }}
								/>
							</button>
						</div>
					</div>
				</div>

				<div className="options">
					<div style={{ textAlign: "center" }}>
						<button
							className="options-button"
							onClick={() =>
								this.setState({
									isOptionsVisible: !this.state
										.isOptionsVisible
								})
							}
						>
							{this.state.isOptionsVisible
								? "Hide options"
								: "Show options"}
						</button>
					</div>

					{this.state.isOptionsVisible && (
						<React.Fragment>
							<div className="label">Your domain:</div>
							<input
								type="text"
								value={this.state.domain}
								onChange={event =>
									this.setState({
										domain: event.target.value.trim()
									})
								}
								className="u-mb-5"
							/>
							<div className="text-muted u-mb-25">
								Having trouble?{" "}
								<a
									href="https://protectiid.com"
									target="_blank"
								>
									Learn how to get one.
								</a>
							</div>

							<div className="label">Generation style:</div>
							<select
								type="text"
								value={this.state.generationStyle}
								className="u-mb-25"
								onChange={event =>
									this.setState({
										generationStyle: event.target.value,
										addressLength:
											event.target.value ===
												"hash-and-domain" &&
											maxAddressLength >
												MAX_ADDRESS_LENGTH / 2
												? MAX_ADDRESS_LENGTH / 2
												: maxAddressLength
									})
								}
							>
								<option value="hash">Random hash</option>

								<option value="hash-and-domain">
									Random hash and domain
								</option>

								<option value="user">Fake user</option>
							</select>

							<div className="label">
								Generated email address length:
							</div>
							<select
								type="text"
								value={this.state.addressLength}
								className="u-mb-25"
								onChange={event =>
									this.setState({
										addressLength: event.target.value
									})
								}
								disabled={isAddressLengthSelectDisabled}
							>
								{Array(maxAddressLength - 1)
									.fill()
									.map((nothing, index) => {
										const value = index + 2;
										return (
											<option key={value} value={value}>
												{value}
											</option>
										);
									})}
							</select>
						</React.Fragment>
					)}

					<div className="credit">
						Made by{" "}
						<a href="https://pkrupar.com" target="_blank">
							pkrupar
						</a>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));

if (process.env.NODE_ENV === "development") {
	module.hot.accept();
}
