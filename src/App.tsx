import MessageList from "./Chat/MessageList";
import data from "./data.json";

function App() {
  const messages = {
    ...data,
    response: data.response.sort((a, b) => {
      return new Date(a.created).getTime() - new Date(b.created).getTime();
    }),
  };
  return (
    <div className='flex w-full px-4 flex-col items-center'>
      <h1 className='font-sans font-bold text-2xl mb-4'>
        Mensagens minha e da Lis {"<3"}
      </h1>
      <div className='p-6 w-full bg-slate-50 rounded-lg'>
        <MessageList messages={messages} />
      </div>
    </div>
  );
}

export default App;
