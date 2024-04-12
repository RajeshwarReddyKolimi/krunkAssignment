import React from "react";

function Tags() {
    const slideLeft = () => {};
    return (
        <div className="tags">
            <div className="tags-text">Popular tags for handbag</div>
            <div className="tags-list-container">
                <div className="tags-list">
                    <div className="tag">Clutch</div>
                    <div className="tag">Fabric Lining</div>
                    <div className="tag">Baggit</div>
                    <div className="tag">Multi Compartment</div>
                </div>

                <img
                    className="slide-icon"
                    src="rightArrow3.svg"
                    alt="More"
                    onClick={slideLeft}
                />
            </div>
        </div>
    );
}

export default Tags;
