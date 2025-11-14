import React from 'react';
import './Stylish.css';
import bannerImage from '../assets/banner2.png';

const Stylish = () => {
  return (
    <section className="promo-banner">
      <img src={bannerImage} alt="Promo Banner" className="banner-image" />
    </section>
  );
};

export default Stylish;
