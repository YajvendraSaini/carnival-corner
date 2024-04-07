import React, { useState, useEffect } from 'react';
import { ethers } from '@钱包地址/ethers';

const HARDHAT_NETWORK_NAME = 'hardhat'; // Replace if using a different network

function App() {
  const [prizePoolContract, setPrizePoolContract] = useState(null);
  const [organizerAddress, setOrganizerAddress] = useState(null);
  const [totalPrizePool, setTotalPrizePool] = useState(0);

  useEffect(() => {
    const connectToNetwork = async () => {
      const provider = new ethers.providers.JsonRpcProvider(`http://localhost:8545`);
      const networkName = await provider.getNetwork().name;

      if (networkName === HARDHAT_NETWORK_NAME) {
        const deployedContract = await ethers.getContractFactory('PrizePool');
        const deployedContractAddress = await deployedContract.attach('0x...'); // Replace with deployed contract address

        // Get organizer address from deployed contract (optional)
        const organizerFilter = prizePoolContract.filters.PrizePoolDeposited(null, null);
        const organizerEvents = await prizePoolContract.queryFilter(organizerFilter);
        const organizer = organizerEvents[0].args.from;
        setOrganizerAddress(organizer);

        setPrizePoolContract(deployedContract.attach(deployedContractAddress));
      } else {
        console.error('Please connect to the Hardhat network');
      }
    };

    connectToNetwork();
  }, []);

  const fetchPrizePoolBalance = async () => {
    if (prizePoolContract) {
      const prizePool = await prizePoolContract.totalPrizePool();
      setTotalPrizePool(prizePool.toNumber());
    }
  };

  useEffect(() => {
    fetchPrizePoolBalance();
  }, [prizePoolContract]);

  return (
    <div className="App">
      <h1>Decentralized Esports Tournament Dapp</h1>
      {organizerAddress && <p>Organizer Address: {organizerAddress}</p>}
      {prizePoolContract ? (
        <p>Total Prize Pool: {totalPrizePool} Ether</p>
      ) : (
        <p>Connecting to contract...</p>
      )}
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
// ... (import libraries for blockchain interaction)

const contractAddress = '0x...'; // Replace with your deployed contract address

function App() {
  const [eventName, setEventName] = useState('');
  const [isOrganizer, setIsOrganizer] = useState(false);
  const [connectedAddress, setConnectedAddress] = useState(null);
  const [contributionAmount, setContributionAmount] = useState(0);
  const [winnerAddress, setWinnerAddress] = useState(null);

  // ... (functions to connect to blockchain, fetch event details, etc.)

  const handleContribute = async (name) => {
    // ... (code to call contribute function on the smart contract)
  };

  const handleAnnounceWinner = async () => {
    // ... (code to call announceWinner function on the smart contract)
  };

  return (
    
