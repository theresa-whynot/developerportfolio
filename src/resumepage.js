import React from "react";
import Layout from "./components/layout";
import "./App.css";

const ResumePage = () => {

    return (
        <Layout>
            <div className="responsiveiframe" style={{ width: "100%", margin: "0 auto" }}>
                <iframe
                    src="TW_Resume.pdf"
                    width="100%"
                    height="600px"
                    style={{ border: "2px solid #A333C8", transform: "scale(1)" }}
                    title="Resume"
                ></iframe>
            </div>
        </Layout>
    );
};

export default ResumePage
