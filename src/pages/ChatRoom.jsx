import React, { useContext, lazy, Suspense }  from "react";
import ChatSubmit from "./ChatSubmit";
import Firebase from "../constants/Firebase";
import { getFirestore } from "firebase/firestore"
import { AuthContext } from "../Context/AuthContext";

const ChatFeed = lazy(() => import('./ChatFeed'))

function ChatRoom(){
    const db = getFirestore(Firebase);
    const dbcollection = 'demo';
    const { user } = useContext(AuthContext);

    return (
        <div className="ChatRoom">
            <Suspense fallback={<div className="ChatFeed-Fallback"></div>}>
                <ChatFeed db={db} dbcollection={dbcollection} user={user} />
            </Suspense>
            <ChatSubmit db={db} dbcollection={dbcollection} user={user} />
        </div>
    )
}

export default ChatRoom