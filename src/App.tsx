import Styles from "./AppStyles";

const PORT = 8989;
const WS_URL = `wss://192.168.1.1:${PORT}/ws`
const ws = new WebSocket(WS_URL)

function App() {	
	ws.onmessage = function (event) {
		const json = JSON.parse(event.data);
		console.log(`[message] Data received from server: ${json}`);
		try {
			if (json.event === "data") { console.log(json.data); }
		} catch (err) {
			// whatever you wish to do with the err
		}
	};
	
	return (
		<Styles.AppContainer>
			<button onClick={() => ws.send('Test Message')}>Test Communication</button>
		</Styles.AppContainer>
	);
}

export default App;
