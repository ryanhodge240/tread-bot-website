import Styles from "./AppStyles";

const PORT = 9898;
const WS_URL = `wss://192.168.1.1:${PORT}/ws`
const ws = new WebSocket(WS_URL)

function App() {
	return (
		<Styles.AppContainer>
			<button onClick={() => ws.send('Test Message')}>Test Communication</button>
		</Styles.AppContainer>
	);
}

export default App;
