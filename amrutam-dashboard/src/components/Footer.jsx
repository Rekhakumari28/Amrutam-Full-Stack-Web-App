import React from "react";
import { Col, Container, Row } from "react-bootstrap";


const icons = [
  { class: 'fab fa-facebook-f' },
  { class: 'fab fa-instagram' },
  { class: 'fab fa-youtube' },
  { class: 'fab fa-twitter' },
  { class: 'fab fa-linkedin-in' },
  { class: 'fab fa-pinterest-p' }
];

export default function Footer() {
  return (
    <footer className="py-5 bg-success-subtle text-success-emphasis">
      <div className="container">
        <div className="row ">
            <div className="col-md-1"></div>
          <div className="col-md-4 mx-5 px-5 ">
            <h4>Get in touch</h4>
            <p>support@amrutam.global</p>
            <p>
              Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak,
              Lashkar, Gwalior - 474001
            </p>
            <p>+91 9713171999</p>
          
      <Row>
        {icons.map((icon, idx) => (
          <Col key={idx} xs="2" >
            <div className="social-circle ">
              <i className={icon.class}></i>
            </div>
          </Col>
        ))}
      </Row>
   
          </div>
          <div className="col-md-4 mx-5 px-5">
            <h4>Information</h4>
            <p className="mb-1">About Us</p>
            <p className="mb-1">Terms and Conditions</p>
            <p className="mb-1">Privacy Policy</p>
            <p className="mb-1">Privacy Policy for Mobile Apps</p>
            <p className="mb-1">Shipping and Returns Policy</p>
            <p className="mb-1">International Delivery</p>
            <p className="mb-1">For Businesses, Hotels and Resorts</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
