import React, { useRef, useEffect } from "react"
import { collection, query, orderBy, limit } from "firebase/firestore"
import { useCollectionData } from 'react-firebase-hooks/firestore';

function ChatFeed({db, dbcollection, user}){
    const messageQuery = query(collection(db, dbcollection), orderBy('createdAt'), limit(25));
    const [messages] = useCollectionData(messageQuery, { idField: 'id' });

    const scrollUpdate = useRef(null);

    function scrollToBottom() {
        scrollUpdate.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
            scrollToBottom()
    }, [messages]);
      

    function ChatMessage(props) {
        const { text, uid, photoURL, displayName } = props.message;

        const messageClass = uid === user.uid ? 'Sent' : 'Received';
      
        return (
            <div className={`Message-${messageClass}`} >
                <div className="Message-IMG">
                    <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="avatar"/>
                </div>
                <div className="Message-Text">
                    <p className="Message-Name">{displayName}</p>
                    <p className="Message-Content">{text}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="Feed">
            {messages && messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
            ))}
            <span ref={scrollUpdate}></span>
        </div>
    )
}

export default ChatFeed