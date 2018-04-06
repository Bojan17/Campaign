import web3 from './web3';
import Campaign from './build/Campaign.json';
//get campaign instance with provided address
export default address => {
  return new web3.eth.Contract(JSON.parse(Campaign.interface), address);
};