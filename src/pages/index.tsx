import React, { useEffect, useState, useRef } from 'react';

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
  const [loading, setLoading] = useState(false);
  const [_, setUpdate] = useState(false);

  const numRef = useRef(0);
  const contentRef = useRef<any>(null);
  const styleRef = useRef({});

  const forceUpdate = () => {
    setUpdate(c => !c);
  };

  useEffect(() => {
    contentRef.current.addEventListener('transitionend', () => {
      styleRef.current = {
        transition: `none`,
        transform: `translateX(-${outerWidth * numRef.current}px)`,
      };
      forceUpdate();
      // 效果结束才能点击切换按钮
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <button
        onMouseEnter={() => {
          setLoading(false);
          if (numRef.current === 0) {
            numRef.current = listLength;
            styleRef.current = {
              transition: `none`,
              transform: `translateX(-${outerWidth * numRef.current}px)`,
            };
            forceUpdate();
          }
        }}
        onClick={() => {
          if (loading) return;
          // 防连点
          setLoading(true);
          numRef.current--;
          styleRef.current = {
            transition: `transform ${transitionTime}s ease`,
            transform: `translateX(-${outerWidth * numRef.current}px)`,
          };

          numRef.current === 0 ? (numRef.current = listLength) : '';
          forceUpdate();
        }}
      >
        prev
      </button>
      <button
        onMouseEnter={() => {
          setLoading(false);
          if (numRef.current === listLength) {
            numRef.current = 0;
            styleRef.current = {
              transition: `none`,
              transform: `translateX(-${outerWidth * numRef.current}px)`,
            };
            forceUpdate();
          }
        }}
        onClick={() => {
          if (loading) return;
          // 防连点
          setLoading(true);
          numRef.current++;
          styleRef.current = {
            transition: `transform ${transitionTime}s ease`,
            transform: `translateX(-${outerWidth * numRef.current}px)`,
          };
          numRef.current === listLength ? (numRef.current = 0) : '';
          forceUpdate();
        }}
      >
        next
      </button>
      <div
        className="marquee"
        style={{ width: outerWidth, height: outerHeight }}
      >
        <div
          className="content"
          ref={contentRef}
          style={{
            width: contentWidth,
            height: outerHeight,
            ...styleRef.current,
          }}
        >
          <div
            className="list"
            style={{ width: outerWidth, height: outerHeight }}
          >
            1
            <img src={img1} alt="" />
          </div>
          <div
            className="list"
            style={{ width: outerWidth, height: outerHeight }}
          >
            2
            <img src={img2} alt="" />
          </div>
          <div
            className="list"
            style={{ width: outerWidth, height: outerHeight }}
          >
            3
            <img src={img3} alt="" />
          </div>
          <div
            className="list"
            style={{ width: outerWidth, height: outerHeight }}
          >
            1 -
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
