import { LuSendHorizontal } from "react-icons/lu";
export default function MessageContent({
  containerRef,
  receiver,
  messages,
  user,
  setShowChatModal,
  sendMessage,
  messageToSend,
  setMessageToSend,
}) {
  return (
    <>
      {receiver && (
        <div className="mb-5 pb-5 border-b flex items-between justify-between border-gray-300">
          <div className="flex items-center gap-3">
            <img
              src={receiver.avatar}
              alt="receiver"
              className="w-10 h-10 rounded-full object-cover"
            />
            <h1 className="font-semibold text-gray-600">{receiver.username}</h1>
          </div>

          <button
            className="md:hidden bg-gray-200 rounded-lg text-sm py-1 px-3"
            onClick={() => setShowChatModal(false)}
          >
            Back
          </button>
        </div>
      )}

      <div className="flex-1 overflow-auto" ref={containerRef}>
        {messages.map((msg) => {
          const isOwnMessage = msg.userId._id === user._id;
          return (
            <div
              key={msg._id}
              className={`flex mb-3 ${
                isOwnMessage ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm ${
                  isOwnMessage
                    ? "bg-blue-500 text-white rounded-br-sm"
                    : "bg-gray-200 text-gray-800 rounded-bl-sm"
                }`}
              >
                {msg.text}
              </div>
            </div>
          );
        })}
      </div>

      <form
        className="flex gap-2 items-center justify-between border border-gray-400 rounded-xl px-5 py-1.5 bg-blue-100 mt-5"
        onSubmit={sendMessage}
      >
        <input
          type="text"
          value={messageToSend}
          placeholder="Type your message..."
          className="text-sm w-full outline-none"
          onChange={(e) => setMessageToSend(e.target.value)}
        />
        <button type="submit">
          <LuSendHorizontal />
        </button>
      </form>
    </>
  );
}
