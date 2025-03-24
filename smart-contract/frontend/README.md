# Lootbox Loons – Free NFT Mint Site

A clean and fully functional ERC721 NFT minting dApp built with **Hardhat**, **React (Vite)**, and **ethers.js**. Wallet connect, mint logic, and UI all wired up for a seamless free mint experience.

---

### 🧠 Features

- ✅ Free minting logic (max 1000 NFTs)
- ✅ ERC721 smart contract built with OpenZeppelin
- ✅ Hardhat local blockchain integration
- ✅ MetaMask wallet connection (via ethers.js)
- ✅ Real-time supply tracking (`totalSupply` / `maxSupply`)
- ✅ Clean, centered UI styled with custom CSS + Google Fonts
- ✅ Illustrated banner for realistic presentation

---

### 🛠️ Tech Stack

- Solidity
- Hardhat
- React (Vite)
- ethers.js
- MetaMask
- OpenZeppelin

---

### 🚀 Local Dev

```bash
# Smart contract
cd smart-contract
npx hardhat node        # start local chain
npx hardhat run scripts/deploy.js --network localhost

# Frontend
cd frontend
npm install
npm run dev             # open http://localhost:5173

