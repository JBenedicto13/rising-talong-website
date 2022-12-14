import React from 'react';
import "../styles/minting.css";
// import logo from '../assets/logo.png';

const MintPage = () => {
  return (
    <div className='mintPage'>
      {/* <div className='maintenancediv'>
        <img src={logo} alt='logo'></img>
        <h1 id='maintenancetext'>Under Maintenance,<br></br> please come back later.</h1>
      </div> */}
      
      <iframe
        src="https://gateway.ipfscdn.io/ipfs/Qmcine1gpZUbQ73nk7ZGCcjKBVFYXrEtqrhujXk3HDQ6Nn/erc721.html?contract=0x1B64b5F28C062236d12272230430aCDe0c4660DE&chainId=137"
        width="100%"
        height="600px"
        title='NFTDrop'
      ></iframe>
    </div>
  )
}

export default MintPage