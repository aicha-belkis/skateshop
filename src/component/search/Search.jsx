import React from 'react';
import './search.css';
export function Search() {
    return (
        <div className="search">
            <div className="wrapper">
                <section className="panel">
                    <div className="panel-body">
                        <input type="text" placeholder="Keyword Search" className="form-control" />
                    </div>
                </section>
            </div>
        </div>
    )
}