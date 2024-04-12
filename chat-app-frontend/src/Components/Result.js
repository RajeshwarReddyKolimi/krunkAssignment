import React from "react";
import Filter from "./Filter";

function Result() {
    return (
        <div className="result-container">
            <div className="received-message">
                <div className="message">
                    <div className="results">
                        <img src="bag.png" alt="bag" />
                        <div className="result-info">
                            <div className="result-header">
                                <div className="result-name">
                                    Bags on <span>Timpu</span>
                                </div>
                                <img
                                    src="verfiedIcon.svg"
                                    alt="Verified Icon"
                                    className="verified-icon"
                                />
                            </div>
                            <div className="result-footer">
                                <div className="result-count">
                                    1123 products
                                </div>
                                <img src="rightArrow2.svg" alt="More" />
                            </div>
                        </div>
                    </div>
                    <p>
                        Or set filter and help us choose the best bag for you.
                    </p>
                </div>
                <div className="time">4:48 PM</div>
            </div>
            <Filter />
        </div>
    );
}

export default Result;
