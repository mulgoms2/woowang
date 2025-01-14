'use client';

import { Client } from '@stomp/stompjs';
import { KeyboardEvent, useEffect, useRef, useState } from 'react';

interface Message {
  message: string;
}

const ChatRoom = () => {
  const chatRoomClientRef = useRef<null | Client>(null);
  const [message, setMessage] = useState('');
  const [receivedMessages, setReceivedMessages] = useState<Message[]>([]);

  const publishMessage = (message: string) => {
    const client = chatRoomClientRef.current;
    client?.publish({
      destination: '/app/hello',
      body: message,
    });
  };

  const clearMessage = () => setMessage('');
  const sendMessage = () => {
    publishMessage(message);
    clearMessage();
  };
  const onEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  useEffect(function initChatClient() {
    if (chatRoomClientRef.current === null) {
      const client = new Client({
        brokerURL: process.env.NEXT_PUBLIC_WS_ENDPOINT,
        onConnect: () => {
          client.subscribe('/topic/room1', (message) => {
            const receivedMessage: Message = JSON.parse(message.body);

            setReceivedMessages((prevMessages) => [
              ...prevMessages,
              receivedMessage,
            ]);
          });
        },
      });
      chatRoomClientRef.current = client;
      chatRoomClientRef.current.activate();
    }
  }, []);

  return (
    <div>
      <div>
        {receivedMessages?.map((message, index) => (
          <div key={index}>{message.message}</div>
        ))}
      </div>
      <div>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyUp={onEnterPress}
          type="text"
        />
        <button onClick={sendMessage}>보내기</button>
      </div>
    </div>
  );
};

export default ChatRoom;
