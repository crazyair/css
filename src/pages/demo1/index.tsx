import React, { useState, useEffect, useRef } from 'react';
import './index.less';

import img1 from '../../images/1.jpeg';
import img2 from '../../images/2.jpeg';
import img3 from '../../images/3.jpeg';

export default (props: any) => {
  const swipperStyle = {
    height: props.height,
  };
  console.log('1', 1);
  //动画运行速度
  // const [speed, setSpeed] = useState(props.speed);

  //当前选中项
  const [navIdx, setNavIdx] = useState(0);
  //获取列表项大小
  const liRef = useRef(null);

  //测试数据
  const [data, setData] = useState([
    {
      key: 1,
      value: '1',
    },
    {
      key: 2,
      value: '2',
    },
    {
      key: 3,
      value: '3',
    },
    {
      key: 4,
      value: '4',
    },
  ]);
  /**
   * 初始化LI位置
   */
  useEffect(() => {
    let list = data.map((item: any, index) => {
      item.xPort = index * (liRef.current as any).offsetWidth;
      return {
        ...item,
      };
    });
    setData(list);
  }, []);

  /**
   * 前进
   */
  const handlePrev = () => {
    let domWidth = Math.abs((liRef.current as any).offsetWidth);
    let domCount = document.getElementsByClassName('swipper-item').length;
    let maxWidth = (domCount - 1) * domWidth - domWidth;
    let curIdx = navIdx;
    let list = data.map((item: any) => {
      if (item.xPort > maxWidth) {
        item.xPort = 0;
      } else {
        item.xPort = item.xPort + domWidth;
      }
      return {
        ...item,
      };
    });
    if (curIdx - 1 < 0) {
      setNavIdx(domCount - 1);
    } else {
      setNavIdx(curIdx - 1);
    }
    console.log(navIdx);
    setData(list);
  };

  /**
   * 后退
   */
  const handleNext = () => {
    let domWidth = Math.abs((liRef.current as any).offsetWidth);
    let domCount = document.getElementsByClassName('swipper-item').length;
    let list = data.map((item: any) => {
      if (item.xPort < 0) {
        item.xPort = (domCount - 1) * domWidth - domWidth;
      } else {
        item.xPort = item.xPort - domWidth;
      }
      return {
        ...item,
      };
    });
    let curIdx = navIdx;
    if (curIdx + 1 >= domCount) {
      setNavIdx(0);
    } else {
      setNavIdx(curIdx + 1);
    }
    console.log(navIdx);
    setData(list);
  };
  /**
   * 根据点去跳转到具体的DIV
   */
  const getPanelByIdx = (index: number) => {
    //点击的那个项
    let domWidth = Math.abs((liRef.current as any).offsetWidth);
    let domCount = document.getElementsByClassName('swipper-item').length;
    let list = data.map(item => {
      return item;
    });
    let prevDom: any = list[index - 2];
    //选中的前一个DOM变为负数
    if (prevDom) {
      prevDom.xPort = -domWidth;
    }
    //选中的那个DOM变成0
    (list[index - 1] as any).xPort = 0;
    let idx = 1;
    //选中的后面的依次N*domWidth
    for (let i = index; i < domCount; i++) {
      (list[i] as any).xPort = idx * domWidth;
      idx++;
    }
    //选中的前面的前面的那些也要都处理掉
    if (prevDom && list[index - 3]) {
      //如果选中的前面那个就已经是第一个，就不再后续处理
      for (let i = 0; i < index - 2; i++) {
        (list[i] as any).xPort = idx * domWidth;
        idx++;
      }
    }
    setData(list);
    setNavIdx(index - 1);
  };
  return (
    <div>
      <div style={swipperStyle} className="swipper">
        <button className="btn-prev" onClick={handlePrev}>
          前进
        </button>
        <button className="btn-next" onClick={handleNext}>
          后退
        </button>
        <ul className="nav">
          {data.map((item: any, index) => {
            return (
              <li
                className={`nav-item ${navIdx === index ? 'is-active' : ''}`}
                key={index}
                onClick={() => getPanelByIdx(item.key)}
              ></li>
            );
          })}
        </ul>
        {data.map((item: any) => {
          return (
            <div
              style={{
                transform: item.xPort
                  ? `translateX(${item.xPort}px)`
                  : 'translateX(0px)',
              }}
              ref={liRef}
              className="swipper-item"
              key={item.key}
            >
              {item.value}
            </div>
          );
        })}
      </div>
    </div>
  );
};
