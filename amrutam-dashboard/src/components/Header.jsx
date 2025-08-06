import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CiWallet } from "react-icons/ci";
import { PiShoppingCartSimple } from "react-icons/pi";
import { FiBell } from "react-icons/fi";
import { LuUser } from "react-icons/lu";

const IconButton = ({ icon: Icon, badge }) => (
  <div className="position-relative">
    {badge && (
      <Badge
        bg="success"
        pill
        className="position-absolute top-0 start-100 translate-middle"
      >
        {badge}
      </Badge>
    )}
    <div
      className="rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center"
      style={{ width: 40, height: 40 }}
    >
      <Icon size={20} color="#355e3b" />
    </div>
  </div>
);

const Header = () => {
  return (
    <div className="bg-cream shadow-sm">
      <Container className="py-3">
        {/* Top Row */}
        <Row className="align-items-center">
          <Col xs={5} className="text-success">
            <span className="d-flex align-items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.8.5A1.7 1.7 0 0 0 1 2.2c0 7.6 6.2 13.8 13.8 13.8a1.7 1.7 0 0 0 1.7-1.7v-2.1a1.7 1.7 0 0 0-1.7-1.7c-.6 0-1.1-.1-1.6-.3-.5-.2-1.2-.1-1.6.3l-.6.6c-1.9-1-3.6-2.7-4.7-4.7l.6-.6c.4-.4.5-1.1.3-1.6-.2-.5-.3-1.1-.3-1.6A1.7 1.7 0 0 0 4.9.5H2.8z"/>
</svg> +91 9826352321
            </span>
          </Col>

          <Col  xs={7}>
            <img
              src="https://amrutam.co.in/cdn/shop/files/only_text_Amrutam_Logo_in_Green-09_5580cc82-5bb1-43d6-9ed8-f5d51c04d1f8.png?v=1658129548&width=200"
              alt="amrutam"
              style={{ maxHeight: 30 }}
            />
          </Col>
        </Row>

        {/* Navigation Bar */}

        <Row className="mt-2">
        <Col xs={3}></Col>
          <Col>
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              {/* Navigation Links */}
              <nav className="d-flex gap-4 flex-wrap align-item-center small">
               
                <NavLink to="/" className="nav-link text-success">
                  Home
                </NavLink>

                {/* We haven’t added the link yet as we currently only need the Shop and Forum pages.*/}
                <NavLink className="nav-link text-success text-decoration-none"> 
                  Find Doctors
                </NavLink>
                <NavLink className="nav-link text-success text-decoration-none">
                  Lab Tests
                </NavLink>

                <NavLink
                  to="/shop"
                  className="nav-link text-success "
                >
                  Shop
                </NavLink>
                <NavLink to="/forum" className="nav-link text-success">
                  Forum
                </NavLink>
                
                <NavLink className="nav-link text-success text-decoration-none" >
                  About Us
                </NavLink>
              </nav>

              {/* Icon Buttons */}
              <div className="d-flex align-items-center gap-3 mt-2 mt-lg-0">
                <IconButton icon={CiWallet} />
                <IconButton icon={PiShoppingCartSimple}  />
                <IconButton icon={FiBell} />
                <IconButton icon={LuUser} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
