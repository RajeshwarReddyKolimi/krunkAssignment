import React from "react";

function Footer() {
    return (
        <div className="footer">
            <form className="message-form">
                <div className="message-container">
                    <input
                        type="text"
                        className="message-input"
                        placeholder="Type your message"
                    />
                    <img
                        src="paperclip.svg"
                        alt="paperclip"
                        className="attach-icon"
                    />
                </div>
                <button type="submit" className="message-send-button">
                    <img src="rightArrow.svg" alt="Next" />
                </button>
            </form>
            <div className="website-info">
                <span>Powered by</span>
                <span>Krunk.ai</span>
                <img src="logo.svg" alt="logo" />
            </div>
        </div>
    );
}

export default Footer;
