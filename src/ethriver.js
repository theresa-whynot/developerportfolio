import React, { Component } from "react";
import Layout from "./components/layout";
import { Segment, Icon, Header } from "semantic-ui-react";
import GitHubDetails from "./components/githubdetails";


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
                <GitHubDetails repoTitle="ethriver" repoColor="blue" />
            </Layout>
        );
    };
};

export default EthRiver;

