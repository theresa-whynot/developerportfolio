import React, { Component } from "react";
import Layout from "./components/layout";
import { Segment, Icon, Header } from "semantic-ui-react";
import GitHubDetails from "./components/githubdetails";


class TokenTalk extends Component {
    state = {

    }
    render() {
        return (
            <Layout>
                <Segment color="orange" style={{ textAlign: 'center', marginTop: '10px' }}>
                    <Header>
                        <h2> TokenTalk <Icon color="orange" name="bitcoin" /></h2>
                        <Header.Subheader style={{ marginTop: '-10px' }}>
                            BRC-20 Token Social Forum
                        </Header.Subheader>
                    </Header>
                </Segment>
                <GitHubDetails repoTitle="tokentalk" repoColor="orange" />
            </Layout>
        );
    };
};

export default TokenTalk;

