import React from 'react'
import Banner from '../components/Banner'
import Bones from '../assets/Bones.png'
import Hair from '../assets/Hair.png'
import Immunity from '../assets/Immunity.png'
import Skincare from '../assets/Skincare.png'
import Stomach from '../assets/Stomach.png'

const categories = [
  { label: 'All', icon: 'bi-grid' },
  { label: 'Hair', icon: Hair },
  { label: 'Skin', icon: Skincare },
  { label: 'Digestion', icon: Stomach },
  { label: 'Bones', icon: Bones },
  { label: 'Immunity', icon: Immunity },
  { label: 'More', icon: 'bi-chevron-right' }
];

function Shop() {
  return (
    <>
      <Banner />
<div className="d-flex justify-content-center gap-4 flex-wrap p-3 bg-cream">
     
      {categories.map((cat, idx) => (
        <div key={idx} className="text-center">
          <div className="outer-ring d-flex align-items-center justify-content-center mx-auto mb-1">
            <div className="inner-circle d-flex align-items-center justify-content-center">
              {cat.icon}
            </div>
          </div>
          <div className="small">{cat.label}</div>
        </div>
      ))}
    
    </div>
    </>
  )
}

export default Shop
