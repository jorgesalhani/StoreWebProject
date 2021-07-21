import React from "react";

export class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="base-container" ref={this.props.containerRef}>
            <div className="header"></div>
            <div className="top-menu"></div>
            <div className="central-presentation">
                <div className="banner-figure"></div>
                <div className="banner-best-sellers"></div>
            </div>
            <div className="product-gallery">
                <div className="product-item">
                    <img src={productItem1} />
                </div>
                <div className="product-item">
                    <img src={productItem1} />
                </div>
                <div className="product-item">
                    <img src={productItem1} />
                </div>
                <div className="product-item"></div>
            </div>
            <div className="banner-promotions">Promoções</div>
            <div className="promotions-gallery">
              <div className="promotion-item-right">
                <img src={productItem1} />
              </div>
              <div className="promotion-iteml-left">
                <img src={productItem1} />
              </div>
              <div className="promotion-item-right">
                <img src={productItem1} />
              </div>
            </div>
            <div className="footer"></div>
        </div>
    );
  }
}
