import {useConnect} from "wagmi";

export function MetamaskComponent() {
    const {connectors, connect} = useConnect();
    const metamaskConnector = connectors.find(item => item.id === 'metamask');
    console.log('metamaskconnector', metamaskConnector)
    return (
        <div>
            {connectors.map((connector) => (
                <button key={connector.id} onClick={() => connect({connector})}>
                    {connector.name}
                    {connector.id}
                </button>
            ))}
            metamask
        </div>
    )
}