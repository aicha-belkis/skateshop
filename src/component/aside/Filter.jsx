import React from 'react';
export const Filter = () => {
    return(
        <section className="panel aside">
                <header className="panel-heading">
                    Filter
            </header>
                <div className="panel-body">
                    <form role="form product-form">
                        <div className="form-group">
                            <label>Brand</label>
                            <select className="form-control hasCustomSelect" style={{ WebkitAppearance: "menulist-button", width: '231px', position: 'absolute', opacity: 0, height: '34px', fontSize: '12px' }}>
                                <option>Wallmart</option>
                                <option>Catseye</option>
                                <option>Moonsoon</option>
                                <option>Textmart</option>
                            </select>
                            <span className="customSelect form-control" style={{ "display": "inline-block" }}><span className="customSelectInner" style={{ "width": "209px", display: "inline-block" }}>Wallmart</span></span>
                        </div>
                        <div className="form-group">
                            <label>Color</label>
                            <select className="form-control hasCustomSelect" style={{ WebkitAppearance: "menulist-button", width: "231px", position: 'absolute', opacity: 0, height: "34px", fontSize: "12px" }}>
                                <option>White</option>
                                <option>Black</option>
                                <option>Red</option>
                                <option>Green</option>
                            </select>
                            <span className="customSelect form-control" style={{ display: "inline-block" }}><span className="customSelectInner" style={{ width: "209px", display: "inline-block" }}>White</span></span>
                        </div>
                        <div className="form-group">
                            <label>Type</label>
                            <select className="form-control hasCustomSelect" style={{ WebkitAppearance: 'menulist-button', width: '231px', position: 'absolute', opacity: 0, height: '34px', fontSize: '12px' }}>
                                <option>Small</option>
                                <option>Medium</option>
                                <option>Large</option>
                                <option>Extra Large</option>
                            </select>
                            <span className="customSelect form-control" style={{ display: 'inline-block' }}><span className="customSelectInner" style={{ width: '209px', display: 'inline-block' }}>Small</span></span>
                        </div>
                        <button className="btn btn-primary" type="submit">Filter</button>
                    </form>
                </div>
            </section>
    )
}