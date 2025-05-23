
import { useEffect, useRef, useState } from "react";

const Chat = () => {

	const [messages, setMessages] = useState([]);
	const [input, setInput] = useState('');
	const [onlineCount, setOnlineCount] = useState(0);
	const [editabel, setEditable] = useState(-1)
	const [editValue, setEditValue] = useState('')
	const ws = useRef(null);
	const messageContainerRef = useRef(null);


	useEffect(() => {
		ws.current = new WebSocket('ws://localhost:3001');
		ws.current.onopen = () => {
			console.log('Connected to server');
		}

		ws.current.onmessage = async (event) => {
			let data
			if (event.data instanceof Blob) {
				const text = await event.data.text();
				data = text
			} else {
				data = event.data
			}

			try {
				const parsed = JSON.parse(data);
				if (parsed.type === 'onlineCount') {
					setOnlineCount(parsed.count)
					return
				}
				if (parsed.type === 'message') {

					setMessages(messages => [...messages, parsed])
					return
				}
				if (parsed.type === 'editMessage') {
					console.log('editMessage');
					console.log(parsed.message.id);


					setMessages(messages => {
						const findIndex = messages.findIndex(el => el.id == parsed.message.id);
						console.log('FindIndex:', findIndex);

						if (findIndex === -1) return messages;

						return messages.map((el, ind) =>
							ind === findIndex ? { ...el, text: parsed.message.text } : el
						);
					});



					return
				}
			} catch (error) {

			}





		}

		ws.current.onclose = () => {
			console.log('Disconnected from server');
		}

		return () => {
			ws.current.close();
		}
	}, []);

	useEffect(() => {
		if (messageContainerRef.current) {
			messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
		}
		console.log(messages);

	}, [messages])

	const sendMessage = () => {
		if (ws.current && input.trim() !== '') {
			const infoForServer = { type: 'message', text: input }
			ws.current.send(JSON.stringify(infoForServer));

			setInput('');
		}
	}

	const openEdit = (num) => {
		setEditValue(messages[num].text)
		setEditable(num)

	}

	const onBlurEditInputHandler = (ind) => {
		if (editValue !== messages[ind].text && editValue !== '') {
			const infoForServer = { type: 'editMessage', id: messages[ind].id, text: editValue }
			ws.current.send(JSON.stringify(infoForServer));
		}
		setEditValue('')
		setEditable(-1)
	}

	return (
		<div className='flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-8'>
			<h2 className='text-3xl font-bold text-gray-700 mb-6'>Real time chat</h2>
			<h3>Online: {onlineCount}</h3>
			<div ref={messageContainerRef}
				className='w-full max-w-md overflow-y-auto bg-white shadow-lg rounded-lg p-4 mb-4 border border-gray-300'
			>
				{messages.length === 0 ? (
					<div className='text-gray-400 text-center'>
						No messages yet
					</div>
				) : (
					messages.map((message, index) => (
						<div key={index} className="flex items-start gap-3 mb-4">
							<img
								className="w-10 h-10 rounded-full object-cover"
								src="https://i.pravatar.cc/100"
								alt="avatar"
							/>

							<div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-xl px-4 py-2 shadow-sm">
								<div className="flex justify-between items-center mb-1">
									<span className="text-sm text-gray-500">
										{new Date(message.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
									</span>
								</div>

								{index === editabel ? (
									<input
										autoFocus
										value={editValue}
										onChange={(e) => setEditValue(e.target.value)}
										onBlur={() => onBlurEditInputHandler(index)}
										className="w-full p-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
									/>
								) : (
									<p
										onClick={() => openEdit(index)}
										className="cursor-pointer text-gray-900 dark:text-gray-100"
									>
										{message.text}
									</p>
								)}
							</div>
						</div>
					))
				)}
			</div>
			<div className='w-full max-w-md flex items-center justify-center'>
				<label>
					<input
						onChange={e => setInput(e.target.value)}
						value={input}
						placeholder='Enter the message' type='text'
						className='flex-grow border border-gray-700 rounded-l-lg px-4 py-2' /></label>
				<button onClick={sendMessage}
					className='flex-shrink-0 px-4 py-2 border border-blue-500 bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg'>Send
				</button>
			</div>
		</div>
	);
};

export default Chat;