import React from "react";
import Layout from "./components/layout";

const ResumePage = () => {

    return (
        <Layout>
            <div style={{ width: "100%", margin: "0 auto" }}>
                <iframe src="TW_Resume.pdf" width="100%" height="600px" zoom="1" style={{ border: "2px solid #A333C8" }} title="Resume" ></iframe>
            </div>
        </Layout>
    );
};

export default ResumePage
