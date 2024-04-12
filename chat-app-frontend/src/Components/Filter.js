import React from "react";

function Filter() {
    return (
        <div className="filter-container">
            <div className="filter-header">
                <div className="filter-info">Select filters</div>
                <div className="filter-icon">
                    <img src="filter.svg" alt="Filter" />
                    Filter
                </div>
            </div>
            <div className="filter-list">
                <div className="filter-item applied-filter-item">
                    Strap - <span>Long</span>
                    <img src="close.svg" alt="close" />
                </div>
                <div className="filter-item">
                    Colour <img src="close2.svg" alt="close" />
                </div>
                <div className="filter-item">
                    Size <img src="close2.svg" alt="close" />
                </div>
                <div className="filter-item">
                    Brand <img src="close2.svg" alt="close" />
                </div>
                <div className="filter-item">
                    Material <img src="close2.svg" alt="close" />
                </div>
            </div>
        </div>
    );
}

export default Filter;
