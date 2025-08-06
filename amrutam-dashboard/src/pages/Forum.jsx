import React from "react";
import Banner from "../components/Banner";
import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import chitarak from "../assets/chitarak.png";
import check from "../assets/check.png";
import TherapeuticUses from "../components/TherapeuticUses";
import AyurvedicProperties from "../components/AyurvedicProperties";
import BenefitsSection from "../components/BenefitsSection";
import PlantParts from "../components/PlantsParts";

function Forum() {
  const impacts = [
    {
      label: "Vata Balanced",
      icon: "https://cdn-icons-png.flaticon.com/128/17436/17436995.png",
      color: "#3478e5",
    },
    {
      label: "Kapha Balanced",
      icon: "https://cdn-icons-png.flaticon.com/128/16835/16835356.png",
      color: "#2d5b3a",
    },
    {
      label: "Pitta Unbalanced",
      icon: "https://cdn-icons-png.flaticon.com/128/10473/10473357.png",
      color: "#ff9933",
    },
  ];

  

  return (
    <>
      <Banner />
      <section className=" bg-cream">
        <Container className="py-4 px-5">
          <Row className="mt-4">
            <Col xs={5}>
              <img
                src={chitarak}
                alt="chitarak"
                className="product-image rounded"
              />
            </Col>
            <Col xs={6} className="ps-5 ms-2 pe-2">
              <section>
                <h4> Citrak - Plumbago zeylancia (Sanskrit - चित्रक)</h4>
                <p className="small">
                  Chitrak, also known as Ceylon Leadwort or Doctorbush, is a
                  powerful Ayurvedic herb valued for its ability to improve
                  digestion, reduce inflammation, and detoxify the body. It is
                  great for boosting metabolism, enhancing skin health, and
                  easing joint pain.
                </p>
                <h5>Why Chitrak?</h5>
                <p className="small">
                  <img src={check} className="check" alt="check" /> Chitrak is
                  valued because it helps lower blood sugar, boosts digestion,
                  and reduces anxiety.
                </p>
                <p className="small">
                  <img src={check} className="check" alt="check" /> It also
                  protects the skin and speeds up wound healing with its
                  antioxidant and antimicrobial properties.
                </p>
                <p className="small">
                  <img src={check} className="check" alt="check" /> It is most
                  used in Ayurvedic medicines for indigestion.
                </p>
              </section>
              <div className="prakriti-wrapper my-5">
                <h5>Prakriti Impact</h5>
                <div className="prakriti-container">
                  {impacts.map((item, index) => (
                    <div className="prakriti-item" key={index}>
                      <div
                        className="semi-circle"
                        style={{ borderTopColor: item.color }}
                      >
                        <img
                          src={item.icon}
                          alt={item.label}
                          className="prakriti-icon"
                        />
                      </div>
                      <p className="prakriti-label">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <BenefitsSection />
           
<AyurvedicProperties />
    <TherapeuticUses/>
    <PlantParts />
    <section className="my-4"> 
      <h5>Best combined with</h5>
      <p >Pipplai, Haritakai, Guggulu, Punarnava, Amla, Giloy</p>
    </section>
    <section className="my-4"> 
      <h5>Geographical locations</h5>
      <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>It is native to tropical and subtropical regions worldwide, including India and Srilanka.</p>
    </section>
            </Col>
          </Row>



        </Container>
      </section>
    </>
  );
}

export default Forum;
