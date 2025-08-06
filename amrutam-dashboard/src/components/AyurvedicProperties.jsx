import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const data = [
  {
    icon: '🧖‍♂️', 
    title: 'Rasa',
    subtitle: 'Katu (Pungent)',
    description: 'Stimulates salivation and digestion',
  },
  {
    icon: '💧',
    title: 'Veerya',
    subtitle: 'Ushna (Hot)',
    description: 'Increases heat and energy in the body',
  },
  {
    icon: '🌿',
    title: 'Guna',
    subtitle: 'Laghu (Light), Ruksha (Dry), Tiksna (Sharp)',
    description: 'Easy to digest, reduces heaviness',
  },
  {
    icon: '🍃', 
    title: 'Vipaka',
    subtitle: 'Katu (Pungent)',
    description: 'Drying and stimulating even after digestion',
  },
];
export default function AyurvedicProperties() {
  return (
     <div className="bg-cream ">
      <h5 className="fw-bold mb-4">Ayurvedic Properties</h5>
      <Row >
        {data.map((item, idx) => (
          <Col key={idx} xs={12} md={3} className="px-0">
            <Card className="border-0 bg-cream ">
              <Card.Body className="p-0">
                <div style={{ fontSize: '1rem' }}>{item.icon}</div>
                <h6 className="small">{item.title}</h6>
                <p className="small mb-0" >{item.subtitle}</p>
                <p className="x-small">{item.description}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
