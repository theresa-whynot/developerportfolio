import React from "react";
import Layout from "./components/layout";
import BookReviewList from "./components/bookreviewlist";
import { Segment, Icon, Header } from "semantic-ui-react";


const BookReviews = () => {

        return (
            <Layout>
                <Segment color="purple" style={{ textAlign: 'center', marginTop: '10px' }}>
                    <Header>
                        <h2> Book Reviews <Icon color="purple" name="book" /></h2>
                        <Header.Subheader style={{ marginTop: '-10px' }}>
                            Blockchain Book Reviews
                        </Header.Subheader>
                    </Header>
                </Segment>
                <Segment color="purple"><h5>The below book links, titles, authors, subtitles, and images were fetched through a Google Books REST API <Icon color="purple" name='object group' /></h5></Segment>
                <BookReviewList/>
            </Layout>
        );
    };

export default BookReviews;

