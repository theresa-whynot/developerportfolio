import React, { Component } from "react";
import Layout from "./components/layout";
import { Segment, Icon, Header } from "semantic-ui-react";
import GitHubDetails from "./components/githubdetails";


class CryptoSettle extends Component {
    state = {

    }
    render() {
        return (
            <Layout>
                <Segment color="blue" style={{ textAlign: 'center', marginTop: '10px' }}>
                    <Header>
                        <h2> CryptoSettle <Icon color="blue" name="ethereum" /></h2>
                        <Header.Subheader style={{ marginTop: '-10px' }}>
                            Ethereum-Based Peer to Peer Payment System
                        </Header.Subheader>
                    </Header>
                </Segment>
                <GitHubDetails repoTitle="cryptosettle" repoColor="blue" />
            </Layout>
        );
    };
};

export default CryptoSettle;
