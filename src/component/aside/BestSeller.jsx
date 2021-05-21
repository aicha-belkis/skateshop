import React from 'react';
export function BestSeller(){
    return(
        <section className="panel aside">
                <header className="panel-heading">
                    Best Seller
            </header>
                <div className="panel-body">
                    <div className="best-seller">
                        <article className="media">
                            <a href="/" className="pull-left thumb p-thumb">
                                <img alt="bestseller-image" src="https://via.placeholder.com/250x220/FFB6C1/000000" />
                            </a>
                            <div className="media-body">
                                <a href="/" className="p-head">Item One Tittle</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </article>
                        <article className="media">
                            <a className="pull-left thumb p-thumb">
                                <img src="https://via.placeholder.com/250x220/A2BE2/000000" />
                            </a>
                            <div className="media-body">
                                <a href="#" className="p-head">Item Two Tittle</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </article>
                        <article className="media">
                            <a className="pull-left thumb p-thumb">
                                <img src="https://via.placeholder.com/250x220/6495ED/000000" />
                            </a>
                            <div className="media-body">
                                <a href="#" className="p-head">Item Three Tittle</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
    )
}