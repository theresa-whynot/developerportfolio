import React, { Component } from "react";
import Layout from "./components/layout";
import { Segment, Icon, Header } from "semantic-ui-react";
import GitHubDetails from "./components/githubdetails";
import EthRiverDocumentation from "./components/ethriverdocumentation";


class EthRiver extends Component {
    state = {

    }
    render() {
        return (
            <Layout>
                <Segment color="blue" style={{ textAlign: 'center', marginTop: '10px' }}>
                    <Header>
                        <h2> EthRiver <Icon color="blue" name="ethereum" /></h2>
                        <Header.Subheader style={{ marginTop: '-10px' }}>
                            Ethereum-Based Test Faucet
                        </Header.Subheader>
                    </Header>
                </Segment>


                <div className="desktop-project">
                    <Grid columns={2}>
                        <Grid.Column>
                            <GitHubDetails repoTitle="ethriver" repoColor="blue" />
                        </Grid.Column>
                        <Grid.Column>
                            <EthRiverDocumentation />
                        </Grid.Column>
                    </Grid>
                </div>

                <div className="mobile-project">

                    <EthRiverDocumentation />

                    <div style={{ marginTop: "15px" }}>
                        <GitHubDetails repoTitle="ethriver" repoColor="blue" />
                    </div>
                </div>



            </Layout>
        );
    };
};

export default EthRiver;

