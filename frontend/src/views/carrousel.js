import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  const carouselContainerStyle = {
    maxWidth: '100%',
    maxHeight: '500px',
    overflow: 'hidden'
  };

  const imageStyle = {
    width: '100%',
    maxHeight: '500px',
    objectFit: 'cover'
  };

  return (
    <div style={carouselContainerStyle}>
      <Slider {...settings}>
        <div>
          <img src="https://www.actiumgestion.fr/wp-content/uploads/2022/03/developper-connaissances-finance-1024x670.jpg" style={imageStyle} alt="Image 1" />
        </div>
        <div>
          <img src="https://cdn-images.welcometothejungle.com/R5ndR_SXIVu34skoWsvi22yju2rbsgDjsvULZOtoJc0/rs:auto:980::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9hcnRpY2xlL2ltYWdlLzIyNTcvMTU1NTMyL3N0YWdlLWZpbmFuY2UuanBn" style={imageStyle} alt="Image 2" />
        </div>
        <div>
          <img src="https://fotomelia.com/wp-content/uploads/edd/2015/03/banque-argent-finance-graphique-1560x1103.jpg" style={imageStyle} alt="Image 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
