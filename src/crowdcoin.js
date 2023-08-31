import React, { Component } from "react";
import Layout from "./components/layout";
import { Grid, Segment, Embed, Icon, Header } from "semantic-ui-react";
import CrowdCoinDetails from "./components/crowdcoindetails";


class CrowdCoin extends Component {
    state = {

    }
    render() {
        return (
            <Layout>
                <Segment color="green" style={{ textAlign: 'center', marginTop: '10px' }}>
                    <Header>
                        <h2> CrowdCoin <Icon color="green" name="ethereum" /></h2>
                        <Header.Subheader style={{ marginTop: '-10px' }}>
                            Ethereum-Based Decentralized Crowd Funding
                        </Header.Subheader>
                    </Header>
                </Segment>
                <Grid columns={2}>
                <Grid.Column>
                        <CrowdCoinDetails />
                    </Grid.Column>
                    <Grid.Column>
                      

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
                           


                    </Grid.Column>

                </Grid>
            </Layout>
    );
    };
};

export default CrowdCoin;