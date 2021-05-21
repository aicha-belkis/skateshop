import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// const useStyles = makeStyles({
//     root: {
//         maxWidth: 345,
//     },
//     media: {
//         height: 140,
//     },
// });


export default function CardView({ product: { name, desc, price, currency, headerImg } }) {
    console.log("props: ", name);

    // const classes = useStyles();
    // let { id, name, desc, price, currency, headerImg } = props.product;

    return (
        <div className="col-md-4" style={{ margin: '10px', maxWidth: '290px' }}>
            <section className="panel card">
                <div className="pro-img-box">
                    {/* <img src="https://via.placeholder.com/250x220/FFB6C1/000000" alt="" /> */}
                    <img src={`${process.env.PUBLIC_URL}${headerImg}`} alt="" />
                    <a href="#" className="adtocart">
                        <i className="fa fa-shopping-cart"></i>
                    </a>
                </div>

                <div className="panel-body text-center">
                    <h4>
                        <a href="#" className="pro-title">
                            {name}
                        </a>
                    </h4>
                    <p className="price">{`${currency} ${price}`}</p>
                </div>
            </section>
        </div>
    );
}
