import React from 'react';
import './App.css';

import {EthereumClient, modalConnectors, walletConnectProvider} from "@web3modal/ethereum";
import {Web3Modal} from "@web3modal/react";
import {configureChains, createClient, WagmiConfig} from "wagmi";
import {arbitrum, mainnet, polygon} from "wagmi/chains";
import {HomePage} from "./home.page";
import {environment} from "./environment/environment";

const chains = [arbitrum, mainnet, polygon];
const {provider} = configureChains(chains, [
    walletConnectProvider({projectId: environment.walletConnect.projectId}),
]);
const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({
        projectId: environment.walletConnect.projectId,
        version: '1',
        appName: 'reactWeb3',
        chains,
    }),
    provider,
})

const ethereumClient = new EthereumClient(wagmiClient, chains);

function App() {
    return (
        <div className="App">
            <h2>react web3 练习 -- WalletConnect v2</h2>
            <WagmiConfig client={wagmiClient}>
                <HomePage/>

            </WagmiConfig>
            <Web3Modal
                projectId={environment.walletConnect.projectId}
                ethereumClient={ethereumClient}
            />
        </div>
    );
}

export default App;
