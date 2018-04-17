import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Input, Message, TextArea } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignNew extends Component {
  state = {
    minimumContribution: '',
    errorMessage: '',
    campaign_name: '',
    description: '',
    manager: '',
    loading: false
  };

onSubmit = async (event) => {
  event.preventDefault();
  this.setState({ loading: true, errorMessage: '' });
  //get accounts from metamask
  const accounts = await web3.eth.getAccounts();
  //create new campaign metatmask will recommend gas amount
  try {
  await factory.methods.createCampaign(this.state.minimumContribution)
          .send({
            from: accounts[0]
          });
        const {minimumContribution, name, description,manager, campaign_name} = this.state;
          await axios.post('/api/newcampaign', {
            minimumContribution,
            campaign_name,
            description,
            manager,
            wallet: accounts[0]
          });

        Router.pushRoute('/');
      } catch (err) {
         this.setState({ errorMessage: err.message });
      }
      this.setState({ loading: false });
};

  render() {
    return (
      <Layout>
        <h3>Create a Campaign</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              value={this.state.minimumContribution}
              label="wei"
              labelPosition="right"
              onChange={event => this.setState({ minimumContribution: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Manager</label>
            <Input
              value={this.state.name}
              onChange={event => this.setState({ manager: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Campaign Name</label>
            <Input
              value={this.state.name}
              onChange={event => this.setState({ campaign_name: event.target.value })}
            />
          </Form.Field>
          <TextArea
            placeholder='Tell us about your campaign'
            onChange={event => this.setState({ description: event.target.value })}
          />

          <Message
            error
            header="Oops!"
            content={this.state.errorMessage}
          />
          <Button style={{'marginTop': '1rem'}}loading={this.state.loading} primary>Create!</Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
