import React from "react";
import { MessageDataProps } from "../../types";
import Message from "../Message";

type MessageListProps = {
  messages: MessageDataProps;
};

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className='flex flex-col gap-4 w-full mx-auto overflow-auto h-screen'>
      {messages.response.map((message) => (
        <Message key={message.id} data={message} />
      ))}
    </div>
  );
};

export default MessageList;
