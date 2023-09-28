import React from "react";
import {
    Segment,
    Embed
} from "semantic-ui-react";
import "../App.css";



const TokenTalkDocumentation = () => {

    return (
        <div>
            <Segment color="orange">
                <h5>TokenTalk Initial Prototype Video Demo</h5>
                <Embed
                    icon='play circle'
                    placeholder='/TokenTalk.png'
                    url='/EthRiverDemo.mp4'
                />
            </Segment>
        </div>
    )
}
export default TokenTalkDocumentation;

