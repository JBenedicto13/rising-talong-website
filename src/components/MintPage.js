import React from 'react';
var mintStyle = { display: "flex", justifyContent: "center" }

const MintPage = () => {
  return (
    <div className='mintPage'>
      <iframe
        style={mintStyle}
        src="https://gateway.ipfscdn.io/ipfs/QmPaVYdGue8zEXFKqrtVHpvzBvufM1DYzw5n1of3KVPG88/nft-drop.html?contract=0x4773918ca1c59ec33B1b6bB5515552765138AE99&chainId=80001"
        width="100%"
        height="600px"
        frameBorder="0"
        title='NFTDrop'
      ></iframe>
    </div>
  )
}

export default MintPage