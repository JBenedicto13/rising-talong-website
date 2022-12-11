import React from 'react';
import "../styles/minting.css";
import logo from '../assets/logo.png';

const MintPage = () => {
  return (
    <div className='mintPage'>
      <div className='maintenancediv'>
        <img src={logo} alt='logo'></img>
        <h1 id='maintenancetext'>Under Maintenace,<br></br> please comeback later.</h1>
      </div>
      
      {/* <iframe
        style={mintStyle}
        src="https://gateway.ipfscdn.io/ipfs/Qmcine1gpZUbQ73nk7ZGCcjKBVFYXrEtqrhujXk3HDQ6Nn/erc721.html?contract=0xc341cdbF90e13556179271a24e182b831afCF90c&chainId=80001"
        width="100%"
        height="600px"
        frameBorder="0"
        title='NFTDrop'
      ></iframe> */}
    </div>
  )
}

export default MintPage