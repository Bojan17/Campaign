import Web3 from 'web3';

let web3;
//check if we are running in browser and metamask is running
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider);
}
//We are on the server or the user is not running metamask
else {
  //create our own provider
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
  );
  web3 = new Web3(provider);
}

export default web3;
