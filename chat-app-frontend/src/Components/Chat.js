import React from "react";
import Tags from "./Tags";
import Result from "./Result";

function Chat() {
    return (
        <main className="chat">
            <div className="received-message">
                <div className="message">
                    Hi Sam! I am your personal shopping assistant, how can I
                    help you today ?
                </div>
                <div className="time">4:45 PM</div>
            </div>
            <div className="sent-message">
                <div className="message">
                    I am looking for a hand bag, with long strap .
                </div>
                <div className="time">4:46 PM</div>
            </div>
            <Tags />
            <Result />
        </main>
    );
}

export default Chat;
