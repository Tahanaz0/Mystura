import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Messages = () => {
  const messages = [
    { id: 1, name: 'Courtney', preview: 'Euismod tortor sed eu etiam.', time: '15 mins', avatar: '/image/profile.png' },
    { id: 2, name: 'Devon Lane', preview: 'Neque scelerisque consectetur. Malesuada arcu odio.', time: '30 mins', avatar: '/image/profile.png' },
    { id: 3, name: 'Darrell Steward', preview: "Yes, we can definitely help you with that!", time: '12:05 PM', avatar: '/image/profile.png' },
    { id: 4, name: 'Marvin McKinney', preview: 'Ipsum nunc commodo. In a malesuada viverra arcu at.', time: '11:07 PM', avatar: '/image/profile.png' },
    { id: 5, name: 'Cameron Williamson', preview: 'Habitant sagittis.', time: '15:28 PM', avatar: '/image/profile.png' },
    { id: 6, name: 'Devon Lane', preview: 'Thank you !', time: '10:03 AM', avatar: '/image/profile.png' },
    { id: 7, name: 'Guy Hawkins', preview: 'Adipiscing venenatis at orci. Vivamus sodales sed amet.', time: '18:05 PM', avatar: '/image/profile.png' },
    { id: 8, name: 'Ewan Lost', preview: 'Thank you !', time: '10:30 AM', avatar: '/image/profile.png' }
  ];

  const conversations = {
    3: [
      { from: 'them', time: '08:20 AM', text: 'Hi, let me know if you need help and you can ask us any questions.' },
      { from: 'me', time: '08:21 AM', text: 'Hi, I need help with my upcoming booking?' },
      { from: 'them', time: '08:22 AM', text: 'what seems to be the issue?' },
      { from: 'me', time: '08:23 AM', text: 'I booked a cleaning service for this Saturday, but I just realized I need to reschedule it for next Wednesday instead. Can I change the date?' },
      { from: 'them', time: '08:24 AM', text: 'Yes, we can definitely help you with that!' }
    ],
    1: [ { from: 'them', time: '09:10 AM', text: 'Hello Courtney 👋' } ],
    2: [ { from: 'them', time: '09:15 AM', text: 'Hi Devon!' } ],
    4: [ { from: 'them', time: '11:05 AM', text: 'Hi Marvin' } ],
    5: [ { from: 'them', time: '01:20 PM', text: 'Hi Cameron' } ],
    6: [ { from: 'them', time: '10:03 AM', text: 'Hi again!' } ],
    7: [ { from: 'them', time: '06:05 PM', text: 'Hello Guy' } ],
    8: [ { from: 'them', time: '10:30 AM', text: 'Hello Ewan' } ]
  };

  const [selectedId, setSelectedId] = useState(null);
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useState("");

  const filtered = messages.filter(m =>
    [m.name, m.preview].join(" ").toLowerCase().includes(query.toLowerCase())
  );

  const currentThread = conversations[selectedId] || [];

  const sendMsg = () => {
    if (!draft.trim() || !selectedId) return;
    currentThread.push({ from: "me", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), text: draft.trim() });
    setDraft("");
  };

  return (
    <div className="messages-layout">
      {/* Left: messages list */}
      <div className="messages-panel">
        <div className="panel-header">Messages</div>

        <div className="search-wrapper-setting">
          <input
            type="text"
            className="search-input-setting"
            placeholder="Search Messages"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <span className="search-icon-setting"><IoSearch /></span>
        </div>

        <div className="messages-list">
          {filtered.map(m => (
            <div
              key={m.id}
              className={`message-row ${selectedId === m.id ? 'active' : ''}`}
              onClick={() => setSelectedId(m.id)}
            >
              <img className="avatar" src={m.avatar} alt={m.name} />
              <div className="msg-body">
                <div className="msg-name">{m.name}</div>
                <div className="msg-preview">{m.preview}</div>
              </div>
              <div className="msg-meta">{m.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: chat thread */}
      <div className={`chat-panel ${selectedId ? 'visible' : ''}`}>
        {selectedId ? (
          <>
            <div className="chat-thread">
              {currentThread.map((m, idx) => (
                <div key={idx} className={`bubble-row ${m.from}`}>
                  <img className="avatar" src={'/image/profile.png'} alt="avatar" />
                  <div>
                    <div className={`bubble ${m.from}`}>{m.text}</div>
                    <div className="bubble-time">{m.time}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="chat-input-bar">
              <input
                type="text"
                placeholder="Type a message"
                value={draft}
                onChange={e => setDraft(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMsg()}
              />
              <button className="send-btn" onClick={sendMsg}>Send</button>
            </div>
          </>
        ) : (
          <div className="chat-empty">Select a conversation to start chatting</div>
        )}
      </div>
    </div>
  );
};

export default Messages;
