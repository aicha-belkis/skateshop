import React from "react";
import* as ReactBootStrap from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';
import './blog.css';

const Blog =()=>{
    return(
      <div className="blog">
      <ReactBootStrap.CardColumns>
  <ReactBootStrap.Card>
    <ReactBootStrap.Card.Img variant="top" src="./images/ton.jpeg" />
     
    <ReactBootStrap.Card.Body>
    <hr />
  
    
    
    
      <ReactBootStrap.Card.Title  className="fap">Card title that wraps to a new line</ReactBootStrap.Card.Title>
      <ReactBootStrap.Card.Text>
        This is a longer card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </ReactBootStrap.Card.Text>
      <pre>
     <a href="https://www.instagram.com/sosaonabi/">
     <i className="fa fa-instagram fa-4x" ></i> </a>  <i className="fa fa-snapchat   fa-4x"></i> 
    </pre>
    </ReactBootStrap.Card.Body>
  </ReactBootStrap.Card>


  <ReactBootStrap.Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </ReactBootStrap.Card>
  <ReactBootStrap.Card>
    <ReactBootStrap.Card.Img variant="top" src="holder.js/100px160" />
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title>Card title</ReactBootStrap.Card.Title>
      <ReactBootStrap.Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </ReactBootStrap.Card.Text>
    </ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </ReactBootStrap.Card.Footer>
  </ReactBootStrap.Card>
  <ReactBootStrap.Card bg="dark" text="white" className="text-center p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </ReactBootStrap.Card>
  <ReactBootStrap.Card className="text-center">
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title>Card title</ReactBootStrap.Card.Title>
      <ReactBootStrap.Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </ReactBootStrap.Card.Text>
      <ReactBootStrap.Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </ReactBootStrap.Card.Text>
    </ReactBootStrap.Card.Body>
  </ReactBootStrap.Card>
  <ReactBootStrap.Card>
    <ReactBootStrap.Card.Img src="holder.js/100px160" />
  </ReactBootStrap.Card>
  <ReactBootStrap.Card className="text-right">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </ReactBootStrap.Card>
  <ReactBootStrap.Card>
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title>Card title</ReactBootStrap.Card.Title>
      <ReactBootStrap.Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </ReactBootStrap.Card.Text>
      <ReactBootStrap.Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </ReactBootStrap.Card.Text>
    </ReactBootStrap.Card.Body>
  </ReactBootStrap.Card>
</ReactBootStrap.CardColumns></div>
    );
}
export default Blog;