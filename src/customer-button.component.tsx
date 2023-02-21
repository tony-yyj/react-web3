import {useEffect, useState} from "react";
import {useWeb3Modal} from "@web3modal/react";
import {useAccount, useDisconnect} from "wagmi";

export function CustomerButtonComponent() {
    const [loading, setLoading] = useState<boolean>(false)
    const {open, isOpen} = useWeb3Modal();
    const {isConnected} = useAccount();
    const {disconnect} = useDisconnect();

    useEffect(() => {
        if (!isOpen) {
            console.log('isopen', isOpen);
            setLoading(false);
        }

    }, [isOpen])

    const onOpen = async () => {
        setLoading(true)
        await open();
    }

    const onClick = () => {
        if (isConnected) {
            disconnect();
        } else {
            onOpen().then();
        }
    }

    return (
        <button onClick={onClick} disabled={loading}>
            {loading ? 'Loading...' : 'connect'}
        </button>
    )
}