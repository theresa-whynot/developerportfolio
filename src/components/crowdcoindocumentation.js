import React from "react";
import {
    Segment,
    Embed
} from "semantic-ui-react";
import "../App.css";



const CrowdCoinDocumention = () => {

    return (
        <div>
            <Segment color="green">
                <h5>CrowdCoin Video Demo</h5>
                <Embed
                    icon='play circle'
                    placeholder='/CrowdCoin1.png'
                    url='/CrowdCoinDemo.mp4'
                />
            </Segment>
            <Segment color="green">
                <h5>CrowdCoin Technical Documention</h5>
                <iframe src="CrowdCoin Technical Documentation.pdf" width="100%" height="600px" zoom="1" title="Crowdcoin"></iframe>

            </Segment>
        </div>
    )
}
export default CrowdCoinDocumention;
