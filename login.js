import React, {Component} from 'react'
import { Button, Form } from 'semantic-ui-react'
import Head from 'next/head';
import { Link } from '../routes';
import factory from '../ethereum/factory';

class Landing extends Component {

  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    //return props
    return { campaigns };
  }

  render() {
    return (

      <div style={{
        'width': '100%',
        'height': '100%',
        'backgroundImage': 'linear-gradient(to right bottom, #69bae5, #0c88cc)',
        'display': 'flex',
        'flexDirection': 'column',
        'justifyContent': 'center',
       'alignItems': 'center',
       'backgroundSize': 'cover'
     }}>
     <h2 style={{'color': '#bbe2f7'}}>Welcome to Smart Campaign</h2>
     <h3 style={{'color': '#bbe2f7'}}>Sign Up to create campaign or make contribution as <span><Link route="/home"><a>Guest</a></Link></span></h3>
     <Form style={{
       'width': '25%'
     }}>
     <Head><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" /></Head>
     <Form.Field>
       <label>First Name</label>
       <input placeholder='First Name' />
     </Form.Field>
     <Form.Field>
       <label>Last Name</label>
        <input placeholder='Last Name' />
     </Form.Field>
     <Form.Field>
       <Form.Field>
        <label>Email</label>
        <input placeholder='Email' />
       </Form.Field>
    </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  </div>
  )
  }
}

export default Landing;
