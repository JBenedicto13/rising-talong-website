import React from 'react';
var mintStyle = { display: "flex", justifyContent: "center" }

const MintPage = () => {
  return (
    <div className='mintPage'>
      <iframe
        style={mintStyle}
        src="https://gateway.ipfscdn.io/ipfs/Qmcine1gpZUbQ73nk7ZGCcjKBVFYXrEtqrhujXk3HDQ6Nn/erc721.html?contract=0xc341cdbF90e13556179271a24e182b831afCF90c&chainId=80001"
        width="100%"
        height="600px"
        frameBorder="0"
        title='NFTDrop'
      ></iframe>
    </div>
  )
}

export default MintPage