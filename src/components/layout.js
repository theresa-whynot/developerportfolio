import React from 'react';
import NavBar from "./navbar";
import { Container} from "semantic-ui-react";

const Layout = (props) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                minHeight: "100vh",
            }}
        >
            <NavBar />

            <Container style={{ marginTop: "80px" }}>
            {props.children}
            </Container>
        </div>
    )
}

export default Layout;

