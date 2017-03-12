import React from 'react';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Websites from './Services/Websites';
import SocialMedia from './Services/SocialMedia';
import Mobile from './Services/Mobile';
import messages from './messages';
import './index.scss';

export default class ServicesPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);

    this.state = {
      serviceId: '1',
      isWebsiteActive: true,
      isSocialActive: false,
      isMobileActive: false,
    };
  }

  handleClick1() {
    this.setState({ serviceId: 1, isWebsiteActive: true, isSocialActive: false, isMobileActive: false });
  }

  handleClick2() {
    this.setState({ serviceId: 2, isSocialActive: true, isWebsiteActive: false, isMobileActive: false });
  }

  handleClick3() {
    this.setState({ serviceId: 3, isMobileActive: true, isWebsiteActive: false, isSocialActive: false });
  }
  render() {
    const serviceId = this.state.serviceId;

    let tabInfo;
    let tabTitle;
    if (serviceId===1) {
      tabInfo = <Websites />;
      tabTitle = (<div><Service selected onClick={this.handleClick1}>Websites</Service>
      <Service onClick={this.handleClick2}>Social Media Management</Service>
      <Service onClick={this.handleClick3}>Mobile Applications</Service></div>)
    } else if (serviceId===2) {
      tabInfo = <SocialMedia />;
      tabTitle = (<div><Service onClick={this.handleClick1}>Websites</Service>
      <Service selected onClick={this.handleClick2}>Social Media Management</Service>
      <Service onClick={this.handleClick3}>Mobile Applications</Service></div>)
    } else {
      tabInfo = <Mobile />;
      tabTitle = (<div><Service onClick={this.handleClick1}>Websites</Service>
      <Service onClick={this.handleClick2}>Social Media Management</Service>
      <Service selected onClick={this.handleClick3}>Mobile Applications</Service></div>)
    }

    return (
      <div>
        <Helmet
          title="Services Page"
          meta={[{ name: 'description', content: 'Services page' },
                ]}
        />
        <TabList>
          {tabTitle}
        </TabList>
        <TabInfo>
          {tabInfo}
        </TabInfo>
      </div>
    );
  }
}

const Service = styled.div`
  background: ${props => props.selected ? '#0091EA' : '#263238'};
  display: inline-block;
  width: 100%;
  padding: 1rem 2rem;
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: ${props => props.selected ? '#0091EA' : '#37474F'};
    transition: all 0.5s ease;
  }
`;

const TabList = styled.div`
  position:fixed;
  width: 20%;
  height: 100%;
  background: #263238;
  text-align:left;
  font-family: 'Lato', sans-serif;
`;

const TabInfo = styled.div`
  position: fixed;
  align-content: space-around;
  right: 0px;
  width: 80%;
  padding: 0 3% 0 3%;
  text-align: left;
`;
