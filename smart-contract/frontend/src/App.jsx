import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import './App.css';

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const contractABI = [
  "function mint() public",
  "function totalSupply() public view returns (uint256)",
  "function maxSupply() public view returns (uint256)"
];

function App() {
  const [wallet, setWallet] = useState(null);
  const [status, setStatus] = useState('');
  const [supply, setSupply] = useState(0);
  const [max, setMax] = useState(0);

  useEffect(() => {
    if (wallet) fetchSupply();
  }, [wallet]);

  async function connectWallet() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWallet(accounts[0]);
    } else {
      alert("Install MetaMask");
    }
  }

  async function fetchSupply() {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(contractAddress, contractABI, provider);
      const current = await contract.totalSupply();
      const max = await contract.maxSupply();
      setSupply(current.toString());
      setMax(max.toString());
    } catch (err) {
      console.error(err);
    }
  }

  async function mintNFT() {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      const tx = await contract.mint();
      setStatus('Minting...');
      await tx.wait();
      setStatus('Minted!');
      fetchSupply();
    } catch (err) {
      console.error(err);
      setStatus('Mint failed.');
    }
  }

  return (
    <div className="container">
      <img
        src="https://static.vecteezy.com/system/resources/previews/055/215/439/non_2x/the-illustration-of-common-loon-bird-free-vector.jpg"
        alt="Lootbox Loon"
        style={{
          width: '220px',
          height: '220px',
          objectFit: 'cover',
          borderRadius: '12px',
          marginBottom: '1.5rem',
          boxShadow: '0 0 15px rgba(0, 0, 0, 0.4)'
        }}
      />

      <h1>Lootbox Loons</h1>
      <p style={{ color: '#ccc', marginTop: '-1rem' }}>Free Mint – 1000 Supply</p>

      <p>Connected Wallet: {wallet || 'Not connected'}</p>
      <button onClick={connectWallet}>
        {wallet ? 'Connected' : 'Connect Wallet'}
      </button>

      <h2 style={{ marginTop: '2rem' }}>{supply} / {max} Minted</h2>

      <button onClick={mintNFT} disabled={!wallet}>
        Mint NFT
      </button>

      <p>{status}</p>
    </div>
  );
}

export default App;
