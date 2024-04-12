import "./App.css";

function App() {
	const handleShowTorsoScan = (e) => {
		e.preventDefault();
		const modal = document.getElementById("torso-scan-modal-k28vew83vj");
		modal.style.display = "block";
	};

	const handleShowBodyScan = (e) => {
		e.preventDefault();
		const modal = document.getElementById("body-scan-modal-k28vew83vj");
		modal.style.display = "block";
	};
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: "100swh",
				height: "100svh",
				gap: "10px",
			}}
		>
			<button
				className="btn"
				style={{
					backgroundColor: "#00B7F4",
					color: "white",
					padding: "1rem",
					border: 0,
					fontSize: "1rem",
					borderRadius: "30px",
					cursor: "pointer",
				}}
				onClick={(e) => handleShowBodyScan(e)}
			>
				Show body scan
			</button>
			<button
				className="btn"
				style={{
					backgroundColor: "#00B7F4",
					color: "white",
					padding: "1rem",
					border: 0,
					fontSize: "1rem",
					borderRadius: "30px",
					cursor: "pointer",
				}}
				onClick={(e) => handleShowTorsoScan(e)}
			>
				Show torso scan
			</button>
		</div>
	);
}

export default App;
