import React from 'react';
export function PriceRange() {
    return (
        <section className="panel aside">
            <header className="panel-heading">
                Price Range
            </header>
            <div className="panel-body sliders">
                <div id="slider-range" className="slider"></div>
                <div className="slider-info">
                    <span id="slider-range-amount"></span>
                </div>
            </div>
        </section>
    )
}