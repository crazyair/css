// import React from 'react';
// import { Carousel } from 'antd';
// import Swiper from 'react-id-swiper';

// import 'swiper/swiper.less';
// // import 'react-id-swiper/src/styles/css/swiper.css'; //必须引入样式

// import './index.less';

// console.log('Swiper', Swiper);
// const Scrollbar = () => {
//   const params = {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 250,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   };

//   console.log('params', params);
//   return (
//     <div>
//       {/* <Button type="primary">aaa</Button> */}
//       {/* <Swiper {...params}>
//         <div>Slide #1</div>
//         <div>Slide #2</div>
//         <div>Slide #3</div>
//         <div>Slide #4</div>
//         <div>Slide #5</div>
//       </Swiper> */}
//       <Carousel autoplay>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//       </Carousel>
//     </div>
//   );
// };

// export default Scrollbar;

import React, { Component } from 'react';
import Slider from 'react-slick';

import './index.less';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
