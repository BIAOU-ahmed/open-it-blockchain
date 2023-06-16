import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { ethers } from 'ethers';
import AhmedNFT from '../../artifacts/contracts/AhmedNFT.sol/AhmedNFT.json';

declare global {
	interface Window {
		ethereum: any;
	}
}


function App() {
	const [currentAccount, setCurrentAccount] = useState<string | null>(null);

	const handleBuy = async (tokenID: number) => {
		const contractAddress = '0x46348A985C3715Aaf123b33a56b3d6BdE6B41E71';
		const abi = AhmedNFT.abi;

		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const contract = new ethers.Contract(contractAddress, abi, signer);
		console.log({ contract });
		const tx = await contract.mintNFT(currentAccount, tokenID, {
			gasLimit: 300000,
		});
		await tx.wait();
		console.log({ tx });
	};

	const handleLogin = async () => {
		const { ethereum } = window as any;
		if (!ethereum) {
			alert('Get MetaMask!');
			return;
		}
		const accounts = await ethereum.request({
			method: 'eth_requestAccounts'
		});
		setCurrentAccount(accounts[0]);
	};

	return (
		<>
			<h1>Ahmee NFT</h1>
			<div className='card'>
				{currentAccount ? (
					<button onClick={() => handleBuy(2)}>Buy B2O</button>
				) : (
					<button onClick={handleLogin}>Connect</button>
				)}
			</div>
			<div>
				{[1, 2, 3, 4, 5].map((item, index) => (
					<div key={index} className="card">
						<img
							src="./../public/images/1.png" // Remplacez l'URL par votre source d'image
							alt={`Image ${index + 1}`}
							className="image"
						/>
						<button className="button" onClick={() => handleBuy(index)}>
							Button
						</button>
					</div>
				))}
			</div>
		</>
	);
}

export default App;
