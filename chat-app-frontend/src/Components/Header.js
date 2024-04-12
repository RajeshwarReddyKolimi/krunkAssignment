import React from "react";

function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <div className="user-pic">
                    <img src="chatbot.png" alt="ChatBot" />
                </div>
                <div className="user-info">
                    <div className="user-header">
                        <div className="user-name">Timpu</div>
                        <img
                            src="verfiedIcon.svg"
                            alt="Verified Icon"
                            className="verified-icon"
                        />
                    </div>
                    <div className="user-caption">Chat Assistant</div>
                </div>
            </div>
            <div className="header-right">
                <div className="online">Online</div>
            </div>
        </header>
    );
}

export default Header;
