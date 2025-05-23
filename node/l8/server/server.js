
import http from 'http';
import { WebSocketServer } from "ws";

let Filter;

const setupFilter = async () => {
	const mod = await import('bad-words');
	Filter = mod.Filter;
};

await setupFilter();

const filter = new Filter();


const messages = [];

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Server is running')
})

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
	console.log("The new client has connected");
	messages.forEach(message => {
		ws.send(JSON.stringify(message));
	})

	const sendOnlineCount = () => {
		const countMessage = JSON.stringify({
			type: 'onlineCount',
			count: wss.clients.size
		});
		wss.clients.forEach(client => {
			if (client.readyState === ws.OPEN) {
				client.send(countMessage)
			}
		})
	}
	sendOnlineCount()
	ws.on('message', message => {


		let messageStr = message;
		if (Buffer.isBuffer(message)) {
			messageStr = message.toString('utf8');
		}


		let data;

		try {
			const parsed = JSON.parse(messageStr);
			data = parsed
		} catch {
			data = message.toString();
		}

		if (data?.type === 'editMessage' && data?.id) {
			const idx = messages.findIndex(m=>m.id === data.id)
			if (idx !== -1) {
				messages[idx].text = filter.clean(data.text);
				
				const edited = {
					message: messages[idx],
					type: 'editMessage',
				}
				wss.clients.forEach(client=> {
					if (client.readyState === ws.OPEN) {
						client.send(JSON.stringify(edited))
					}
				})
				console.log('message is edit');
				
			}
			return;
		}

		if (typeof data.text !== 'string') {
			console.warn('Invalid message format:', data);
			return;
		}
		const cleanMessage = filter.clean(data.text)
		const messageObj = {
			id: Date.now(),
			time: Date.now(),
			text: cleanMessage,
			type: 'message'
		}
		console.log('Received:', messageObj);
		messages.push(messageObj);
		wss.clients.forEach(client => {
			if (client.readyState === ws.OPEN) {
				client.send(JSON.stringify(messageObj));
			}
		})
	})
	ws.on('close', () => {
		console.log('Client disconnected');
		sendOnlineCount()
	})
	ws.on('error', () => {
		console.log('Client error');
	})
});

const PORT = 3001;
server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
})