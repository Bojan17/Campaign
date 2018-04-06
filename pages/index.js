import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

class CampaignIndex extends Component {
  //load list of campaings on server side
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    //return props
    return { campaigns };
  }

  renderCampaigns() {
    //rendering campaings and styling them with semantic
    const items  = this.props.campaigns.map( address => {
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
