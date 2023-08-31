import React from "react";
import Layout from "./components/layout";
import CoursesList from "./components/courseslist";
import { Segment, Icon, Header } from "semantic-ui-react";


const UdemyTrainings = () => {

        return (
            <Layout>
                <Segment color="purple" style={{ textAlign: 'center', marginTop: '10px' }}>
                    <Header>
                        <h2> Udemy Trainings <Icon color="purple" name="file code outline" /></h2>
                        <Header.Subheader style={{ marginTop: '-10px' }}>
                            Blockchain & Programming Udemy Trainings
                        </Header.Subheader>
                    </Header>
                </Segment>
               <CoursesList/>
            </Layout>
        );
    };

export default UdemyTrainings;
