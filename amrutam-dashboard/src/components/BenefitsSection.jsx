import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const benefitsData = [
  { emoji: '💆', text: 'Calms the nervous system and reduces anxiety.' },
  { emoji: '⚖️', text: 'Reduces cholesterol and supports weight loss.' },
  { emoji: '🩸', text: 'Manages diabetes by lowering blood sugar levels.' },
  { emoji: '💊', text: 'Beneficial in Hemorrhoids of Vata origin.' },
  { emoji: '🍽️', text: 'Improves digestion and boosts metabolism.' },
  { emoji: '❤️', text: 'Prevents deposits in arteries, supporting heart health.' },
  { emoji: '🌿', text: 'Treats skin conditions like acne and dermatitis.' },
  { emoji: '🧬', text: 'Speeds up wound healing and promotes new skin growth.' },
];

const BenefitsSection = () => {
  return (
    <div className="my-5 px-2">
      <h5 className="fw-bold mb-4">Benefits</h5>
      <Row>
        {benefitsData.map((item, index) => (
          <Col key={index} xs={12} sm={6} className="mb-3">
            <Card className="bg-darkcream border-0 h-100 shadow-sm rounded-4">
              <Card.Body className=" small ">
                
                <div className="styleContainer">
                          <span className="stylesemoji"> {item.emoji}</span>
                        </div>
                <span>{item.text}</span>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BenefitsSection;
