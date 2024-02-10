import React from "react";
import { Response } from "../../types";

type MessageProps = {
  data: Response;
};

const Message: React.FC<MessageProps> = ({ data }) => {
  const isMe = data.remetente.id === 8155055;
  return (
    <div
      className={`p-3 my-2 rounded-lg w-fit max-w-[380px] ${
        isMe
          ? "ml-auto bg-blue-500 text-white"
          : "mr-auto bg-gray-300 text-black"
      }`}
    >
      <div className='flex gap-4 items-center mb-2'>
        <img
          src={data.remetente.foto_media}
          alt={data.remetente.nome}
          className='w-10 h-10 rounded-full'
        />
        <h2 className='font-bold'>{data.remetente.nome}</h2>
      </div>
      <p>{data.recado}</p>
      <span className={`text-xs ${isMe ? "text-gray-200" : "text-gray-600"}`}>
        {new Date(data.created).toLocaleString()}
      </span>
    </div>
  );
};

export default Message;
