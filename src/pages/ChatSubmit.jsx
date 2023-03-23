import React, { useState } from "react"
import { serverTimestamp, addDoc, collection } from "firebase/firestore"

function ChatSubmit({ db, dbcollection, user }){
    
    const [formValue, setFormValue] = useState('')

    const getCollection = collection(db, dbcollection);

    const sendMessage = async (e) => {
        e.preventDefault();
    
        const { uid, photoURL, displayName } = user;
    
        await addDoc(getCollection, {
            text: formValue,
            createdAt: serverTimestamp(),
            uid,
            photoURL,
            displayName
        });
    
        setFormValue('');
      }

    return (
        <div className="Submit">
            <form onSubmit={sendMessage} className="Form">
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Send a message" />
                <button type="submit" className="Form-Submit" disabled={!formValue}>Send</button>
            </form>
        </div>
    )
}

export default ChatSubmit