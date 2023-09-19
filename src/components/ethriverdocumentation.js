import React from "react";
import {
    Segment,
    Embed
} from "semantic-ui-react";
import "../App.css";



const EthRiverDocumentation = () => {

    return (
        <div>
            <Segment color="blue">
                <h5>EthRiver Video Demo</h5>
                <Embed
                    icon='play circle'
                    placeholder='/EthRiver1.png'
                    url='/CrowdCoinDemo.mp4'
                />
            </Segment>
        </div>
    )
}
export default EthRiverDocumentation;
