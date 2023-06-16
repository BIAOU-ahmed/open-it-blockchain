import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

const config: HardhatUserConfig = {
	solidity: '0.8.19',
	networks: {
		mumbai: {
			chainId: 80001,
			url: 'https://rpc-mumbai.maticvigil.com',
			accounts: [
				'cc4fffd19f7cef45c3f4687f5b825b003662291d4db7ad6efd0cf2939f35ce8c'
			]
		}
	}
};

export default config;