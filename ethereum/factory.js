import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xd1429C9A1667E714CDA16959fBcBB78114C8E6B0'
);
export default instance;
