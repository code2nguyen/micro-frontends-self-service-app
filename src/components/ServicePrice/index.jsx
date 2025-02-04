/**
 * Tab element
 */
import PageRow from "components/PageElements/PageRow";
import PT from "prop-types";
import React from "react";
import HintIcon from "../../assets/images/icon-hint.svg";
import "./styles.module.scss";
import WebsiteDesignIcon from "../../assets/images/website-design.svg";

const ServicePrice = ({ serviceType, price }) => {
  return (
    <div styleName="container">
      <PageRow>
        <WebsiteDesignIcon />
        <div>
          <p styleName="serviceTitle">{serviceType}</p>
          <div styleName="priceAndDuradion">
            PRICE: ${price}
            <span styleName="separator" />
            4 Days
            <HintIcon />
          </div>
        </div>
      </PageRow>
    </div>
  );
};

ServicePrice.defaultProps = {
  price: 0,
};

ServicePrice.propTypes = {
  price: PT.number,
};

export default ServicePrice;
