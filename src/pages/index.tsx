import React, { useEffect, useState } from 'react';
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
  const transitionTime = 0.3;
  const [initIndex, setInitIndex] = useState(0);
  const [transition, setTransition] = useState<any>(``);
  useEffect(() => {
    const content = document.querySelector('.content');
    content?.addEventListener('transitionend', () => {
      setTransition('none');
    });
  }, []);
  console.log('2', initIndex, outerWidth * initIndex);
  return (
    <div>
      <button
        onClick={() => {
          console.log('initIndex', initIndex);
          if (initIndex === listLength) {
            setInitIndex(0);
          } else {
            setInitIndex(initIndex + 1);
          }
          setTransition(`transform ${transitionTime}s ease`);
        }}
      >
        demo
      </button>
      <div
        className="marquee"
        style={{ width: outerWidth, height: outerHeight }}
      >
        <div
          className="content"
          style={{
            width: contentWidth,
            height: outerHeight,
            transition,
            transform: `translate3d(-${outerWidth * initIndex}px)`,
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
