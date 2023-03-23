import React, { useContext }  from "react";
import ChatFeed from "./ChatFeed";
import ChatSubmit from "./ChatSubmit";
import Firebase from "../constants/Firebase";
import { getFirestore } from "firebase/firestore"
import { AuthContext } from "../Context/AuthContext";

function ChatRoom(){
    const db = getFirestore(Firebase);
    const dbcollection = 'messages';
    const { user } = useContext(AuthContext);

    return (
        <div className="ChatRoom">
            <ChatFeed db={db} dbcollection={dbcollection} user={user} />
            <ChatSubmit db={db} dbcollection={dbcollection} user={user} />
        </div>
    )
}

export default ChatRoom