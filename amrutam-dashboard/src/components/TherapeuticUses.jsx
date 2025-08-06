import React from 'react';
import { Row, Col } from 'react-bootstrap';

const therapeuticData = [
  { icon: '🫀', label: 'Agnimandya' },
  { icon: '🧫', label: 'Grahani Rog' },
  { icon: '🦵', label: 'Arsha' },
  { icon: '💊', label: 'Udara Shula' },
  { icon: '🧬', label: 'Gudasotha' },
];

export default function TherapeuticUses() {
  return (
   <div className="bg-cream">
      <h5 className="fw-bold mb-4">Therapeutic Uses</h5>
      <div className="therapeutic-flex-container">
        {therapeuticData.map((item, index) => (
          <div key={index} className="therapeutic-item">
            <div className="therapeutic-icon-outer">
              <div className="therapeutic-icon-inner">
                <span className="therapeutic-icon">{item.icon}</span>
              </div>
            </div>
            <p className="therapeutic-label">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
