import React from 'react';
export function Category() {
    return (
        <section className="panel aside">
            <header className="panel-heading">
                Category
            </header>
            <div className="panel-body">
                <ul className="nav prod-cat">
                    <li>
                        <a href="#" className="active"><i className="fa fa-angle-right"></i> Dress</a>
                        <ul className="nav">
                            <li className="active"><a href="#">- Shirt</a></li>
                            <li><a href="#">- Pant</a></li>
                            <li><a href="#">- Shoes</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-angle-right"></i> Bags &amp; Purses</a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-angle-right"></i> Beauty</a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-angle-right"></i> Coat &amp; Jacket</a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-angle-right"></i> Jeans</a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-angle-right"></i> Jewellery</a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-angle-right"></i> Electronics</a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-angle-right"></i> Sports</a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-angle-right"></i> Technology</a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-angle-right"></i> Watches</a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-angle-right"></i> Accessories</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}