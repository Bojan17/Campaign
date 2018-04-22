import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import axios from 'axios';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

class CampaignIndex extends Component {
  //load list of campaings on server side
  static async getInitialProps() {
    try {
      const campaigns = await factory.methods.getDeployedCampaigns().call();
      const res = await axios.get('http://localhost:3000/api/campaigns');
      //return props
      const list = res.data;
      console.log(list);
      return { campaigns, list };
    } catch (err) {
      console.log(err);
    }

  }

  renderCampaigns() {
    //rendering campaings and styling them with semantic
    /*const items  = this.props.campaigns.map( address => {
        return {
          header: address,
          description: (
            <Link route={`/campaigns/${address}`}>
              <a>View Campaign</a>
            </Link>
          ),
          fluid: true
        };
    });

    return <Card.Group items={items} />; */
    const items  = this.props.list.map( idea => {
        return {
          header: idea.campaign_name,
          description: (
            <Link route={`/campaigns/${idea.wallet}`}>
              <a>View Campaign</a>
            </Link>
          ),
          meta: idea.manager,
          fluid: true
        };
    });

    return <Card.Group items={items} />;


  }


  render() {
    return (
      <Layout>
        <div>
          <h3>Open campaigns</h3>
          <Link route="campaigns/new">
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary
              />
            </a>
          </Link>
          {this.renderCampaigns()}
        </div>
      </Layout>
    )
  }
}

export default CampaignIndex;
