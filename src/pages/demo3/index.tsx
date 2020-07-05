import React, { Component } from 'react';
import './index.less';

import img1 from '../../images/1.jpeg';
import img2 from '../../images/2.jpeg';
import img3 from '../../images/3.jpeg';
import deleteImg from '../../images/delete.jpg';

export default class SimpleSlider extends Component {
  render() {
    return (
      <div>
        <div className="triangle"></div>
        {/* 图标变颜色 */}
        <div className="icon">
          <img src={deleteImg} alt="" />
        </div>
        <div className="box">
          <nav className="left">
            <h3>导航1</h3>
          </nav>
          <section>
            <div className="module">模块1</div>
          </section>
        </div>
        <br />
        <br />
        <br />
        <div className="padding"></div>
        <div className="margin">
          <div className="father">
            <div className="sun"></div>
          </div>
        </div>
        <div>
          <div style={{ float: 'left', width: '100%' }}>
            <p style={{ marginRight: '170px' }}>
              啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
            </p>
          </div>
          <img
            src={img1}
            width="150"
            style={{ float: 'left', marginLeft: '-150px' }}
            alt=""
          />
        </div>
        <div className="spinner"></div>
        <div className="imgs">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
        <div className="spinner2">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          <div className="line4"></div>
          <div className="line5"></div>
        </div>
        <div className="spinner3">
          <div></div>
        </div>
        <div className="stage">
          <div className="rock"></div>
        </div>
        <div>
          <a href="#" className="demo">
            <div className="img"></div>
            <div className="mask">
              <div className="info">
                <h3>这是标题</h3>
                <p>这是详细说明</p>
              </div>
            </div>
            <div className="border"></div>
          </a>
        </div>
      </div>
    );
  }
}
