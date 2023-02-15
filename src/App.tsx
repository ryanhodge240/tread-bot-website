
const PORT = 9898;
const WS_URL = `ws://192.168.1.1:${PORT}/ws`
const ws = new WebSocket(WS_URL)

function App() {
	return (
		<>
			<div>
				<button onClick={() => ws.send('Test Message')}>Test Communication</button>
			</div>
		</>
	);
}

export default App;
