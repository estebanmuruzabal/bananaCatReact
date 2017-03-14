import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import './Websites.scss';
import messages from '../messages';

class Mobile extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1><FormattedMessage {...messages.mobileTitle} /></h1>
        <p><FormattedMessage {...messages.mobileContent} /></p>
        <div className="snip1265">

        <div className="plan">
          <header><i className="ion-ios-navigate-outline"></i>
            <h4 className="plan-title">Package 1</h4>
            <div className="plan-cost"><span className="plan-price"><FormattedMessage {...messages.mobilePrice1} /></span><span className="plan-type">/month</span></div>
          </header>
          <ul className="plan-features">
            <li>Until 5 tabs or views</li>
            <li>1 custom form</li>
            <li>Design from templates</li>
            <li>Custom text/colors</li>
          </ul>
          <div className="plan-select"><FormattedMessage {...messages.selectPlan} /><a href=""></a></div>
        </div>

        <div className="plan">
          <header><i className="ion-ios-world"></i>
            <h4 className="plan-title">Package 2</h4>
            <div className="plan-cost"><span className="plan-price"><FormattedMessage {...messages.mobilePrice2} /></span><span className="plan-type">/month</span></div>
          </header>
          <ul className="plan-features">
            <li>Until 15 tabs or views</li>
            <li>2 custom form</li>
            <li>User registration</li>
            <li>Custom design</li>
            <li>Google AdWords campaign</li>
            <li>1 months support</li>
          </ul>
          <div className="plan-select"><a href=""><FormattedMessage {...messages.selectPlan} /></a></div>
        </div>

        <div className="plan">
          <header><i className="ion-ios-people"></i>
            <h4 className="plan-title">Package 3</h4>
            <div className="plan-cost"><span className="plan-price"><FormattedMessage {...messages.mobilePrice3} /></span><span className="plan-type">/month</span></div>
          </header>
          <ul className="plan-features">
            <li>Until 30 tabs or views</li>
            <li>3 custom form</li>
            <li>User registration and management</li>
            <li>Custom design</li>
            <li>Google AdWords campaign</li>
            <li>3 months support</li>
          </ul>
          <div className="plan-select"><a href=""><FormattedMessage {...messages.selectPlan} /></a></div>
        </div>

        <div className="plan">
          <header><i className="ion-ios-speedometer"></i>
            <h4 className="plan-title">Custom</h4>
            <div className="plan-cost"><span className="plan-price"><FormattedMessage {...messages.mobilePrice4} /></span><span className="plan-type"></span></div>
          </header>
          <ul className="plan-features">
            <li>Custom design!</li>
            <li>? tabs or views</li>
            <li>? custom forms</li>
            <li>? user registration</li>
            <li>Google AdWords</li>
            <li>? months support</li>
          </ul>
          <div className="plan-select"><a href=""><FormattedMessage {...messages.selectPlan} /></a></div>
        </div>

        </div>
      </div>
    );
  }
}

export default Mobile;

const Container = styled.div`
  text-align: center;
  display: flex;
  width:80%;
  position: absolute;
   border: 1px solid #666;
   height:40%;
 flex-direction: row;
`;
