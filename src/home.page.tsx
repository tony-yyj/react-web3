import React from "react";
import {Web3Button} from "@web3modal/react";
import {CustomerButtonComponent} from "./customer-button.component";

export function HomePage() {
    return (
        <div>
            <div>
                <label>web3 button:</label>
                <Web3Button/>
            </div>
            <div style={{marginTop: '100px'}}>
                <label>customer button:</label>
                <CustomerButtonComponent/>
            </div>

        </div>
    )
}