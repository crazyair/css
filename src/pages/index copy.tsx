import React, { useEffect } from 'react';
import { map, matchesProperty } from 'lodash';
import './index.less';

import img1 from '../images/1.jpeg';
import img2 from '../images/2.jpeg';
import img3 from '../images/3.jpeg';

export default () => {
  const outerWidth = 600;
  const outerHeight = 400;
  const listLength = 3;
  const contentWidth = outerWidth * listLength;
  const speed = 3;
  useEffect(() => {
    const style = document.styleSheets;
    style[0].insertRule(`
    @keyframes run {
      100% {
        transform: translateX(-${contentWidth}px);
      }
    }`);
  }, []);
  // let leftNumber = 0;

  return (
    <div>
      {/* <div className="box demo-1"></div>
      <div className="box demo-2">
        <div className="cell"></div>
      </div>
      <div className="box demo-3">
        <div className="cell"></div>
      </div> */}
      {/* <div className="loading"></div> */}
      {/* <div className="tuzi"></div> */}

      {/* <div className="content">
        {map(new Array(30), (_, index) => {
          const lefts = Math.floor(Math.random() * 5 + 2);
          const delay = Math.floor(Math.random() * 50 + 2);
          leftNumber += lefts;

          return (
            <div
              className="yudi"
              key={index}
              style={{
                left: `${leftNumber}%`,
                top: `${lefts}`,
                animationDelay: `${delay / 10}s`,
              }}
            ></div>
          );
        })}
      </div> */}
      {/* <marquee>aaaaaaaaa</marquee> */}
      <div
        className="marquee"
        style={{ width: outerWidth, height: outerHeight }}
      >
        <div
          className="content"
          style={{
            width: contentWidth,
            height: outerHeight,
            animation: `run ${speed * listLength}s linear infinite`,
          }}
        >
          <div
            className="list"
            style={{ width: outerWidth, height: outerHeight }}
          >
            <img src={img1} alt="" />
          </div>
          <div
            className="list"
            style={{ width: outerWidth, height: outerHeight }}
          >
            <img src={img2} alt="" />
          </div>
          <div
            className="list"
            style={{ width: outerWidth, height: outerHeight }}
          >
            <img src={img3} alt="" />
          </div>
          <div
            className="list"
            style={{ width: outerWidth, height: outerHeight }}
          >
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
