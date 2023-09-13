import React, { Component } from "react";
import Layout from "./components/layout";
import { Grid, Segment, Icon, Header } from "semantic-ui-react";
import GitHubDetails from "./components/githubdetails";
import CrowdCoinDocumentation from "./components/crowdcoindocumentation";

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

                <div className="desktop-crowdcoin">
                <Grid columns={2}>
                <Grid.Column>
                            <GitHubDetails repoTitle="crowdcoin" repoColor="green" />
                    </Grid.Column>
                    <Grid.Column>
                          <CrowdCoinDocumentation/>
                    </Grid.Column>
                    </Grid>
                </div>

                <div className="mobile-crowdcoin">
                  
                            <CrowdCoinDocumentation />

                    <div style={{ marginTop: "15px" }}>
                    <GitHubDetails repoTitle="crowdcoin" repoColor="green"/>
                    </div>
                </div>



            </Layout>
    );
    };
};

export default CrowdCoin;