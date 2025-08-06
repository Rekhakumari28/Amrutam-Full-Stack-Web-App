import React from 'react';
import { Row, Col } from 'react-bootstrap';
import root from '../assets/root.png'
import rootBark from '../assets/rootBark.png'
import leaves from '../assets/leaves.png'
const PlantData =[
    { icon: root, heading: 'Root', description:"Digestion, Skin conditions, manage blood sugar level" },
    { icon: rootBark, heading: 'Root Bark', description:"Manage obesity, metabolism and assit in weight loss. " },
    { icon: leaves, heading: 'Leaves', description:"Used externally for skin conditions and wounds." },
]


const PlantParts = () => {
  return (
  <div className="bg-cream">
      <h5 className="fw-bold mb-4">Therapeutic Uses</h5>
      <div className="d-flex justify-content-between">
        {PlantData.map((item, index) => (
          <div key={index} className="me-1">            
                <img src={item.icon} alt={item.heading} className="w-50 h-50" />             
            <h5 >{item.heading}</h5>
            <p className="x-small">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantParts;