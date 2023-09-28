import React, { Component } from "react";
import Layout from "./components/layout";
import { Segment, Icon, Header, Grid} from "semantic-ui-react";
import GitHubDetails from "./components/githubdetails";
import TokenTalkDocumentation from "./components/tokentalkdocumentation";


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





                <div className="desktop-project">
                    <Grid columns={2}>
                        <Grid.Column>
                            <GitHubDetails repoTitle="tokentalk" repoColor="orange" />
                        </Grid.Column>
                        <Grid.Column>
                            <TokenTalkDocumentation />
                        </Grid.Column>
                    </Grid>
                </div>

                <div className="mobile-project">

                    <TokenTalkDocumentation />

                    <div style={{ marginTop: "15px" }}>
                        <GitHubDetails repoTitle="tokentalk" repoColor="orange" />
                    </div>
                </div>



            </Layout>
        );
    };
};

export default TokenTalk;

