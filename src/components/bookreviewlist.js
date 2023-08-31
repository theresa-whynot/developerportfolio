import React, { useState, useEffect } from "react";
import { Header, Image, Rating, Segment, Grid } from "semantic-ui-react";

const BookReviewList = () => {
    const initialIsbns = [
        "9781119473916",
        "9781491971949",
        "9781981522026",
        "9781633698048",
    ];

    const bookRatings = [
        3, 5, 5, 4,
    ];

    const bookReviews = [
        "The book provided an insightful overview of the history of money, delving into its evolution across various historical societies and time periods. It explored the diverse roles of currency, from the exchange of beads to the golden era and the emergence of fiat currency. This comprehensive analysis naturally led to a discussion of the ascent of Bitcoin technology and its potential to counteract the prevailing inflationary trends in our society. The historical lessons and the examination of 'sound money' (currency resistant to abrupt fluctuations) proved to be particularly enlightening. The book adeptly conveyed the value of such principles. However, it leaned noticeably towards a Bitcoin - centric perspective, advocating its adoption while underemphasizing the merits of alternative coins and other blockchain solutions. The book's parallels between the Renaissance period and the contemporary art world were an unnecessary overreach. It suggested that the ease and speed of modern art creation devalue its worth, akin to how gold's scarcity and difficulty of extraction maintain its enduring value, in contrast to the less steadfast attributes of a currency like the US dollar. In sum, the book excelled in presenting factual information about the evolution of money, yet it occasionally veered into opinionated territory. While its historical insights were commendable, some of its viewpoints may be seen as overreaching.",
        "I thoroughly enjoyed immersing myself in 'Mastering Ethereum', particularly as it coincided with the completion of my initial Solidity developer bootcamp. The book solidified the foundational concepts I had just acquired: the fundamental principles of blockchain, the components comprising the Ethereum Blockchain, and the connection of the Ethereum Blockchain and Smart Contract code to a digital wallet and frontend interface. The book's breadth of coverage was impressive. It is a comprehensive guide that I can lean on moving forward. I foresee myself referring back to its insights, especially for navigating the intricate terrains of more advanced topics such as cryptography, hashing, smart contract security, ECDSA math, HD Wallet Trees, etc. I anticipate revisiting the book in a year or so time, eager to gauge how my understanding has evolved. This book has enriched my journey in the realm of Ethereum, and I anticipate it continuing to play a pivotal role as I navigate through the complexities of blockchain development.",
        "This book was truly exceptional for a blockchain beginner. I delved into its pages over a year ago, seeking a foundational grasp of blockchain technology's significance within our society. Fortunately, the book was not overly technical, making it an ideal starting point for comprehending the historical roots of blockchain and grasping its high-level architecture. Learning about blockchain theory and its far - reaching societal implications is what truly sparks my enthusiasm for this technology and drives me to continue on my blockchain developer journey.The book's high-level insights into the role of distributed ledgers in domains like supply chain management, voting systems, crowdfunding platforms, etc. further fuels my excitement for contributing to blockchain solutions.",
        "This book proved to be a valuable resource tailored to business leaders. I would recommend it to managers, executives, and anyone occupying a strategic leadership role, seeking to deepen their understanding of blockchain technology. While contemplating the technical & theoretical aspects of blockchain is exciting, delving into the pragmatic and financial considerations that business leaders grapple with for the genuine realization of blockchain's potential is equally crucial. The book navigates beyond theoretical musings to address the practical and financial dimensions that underpin effective blockchain integration.It underscores that for organizations and individuals to embrace blockchain, a holistic structural transformation is imperative. These transformative adaptations necessitate thoughtful deliberation and decisive action from leaders, as they redefine operational frameworks, security protocols, and data governance strategies. That said, some specific concepts relating to business operations and security protocol went over my head, not currently being in a strategic business leadership role, but nonetheless is a good read for those who are.",
    ];

    
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBookDetails = async () => {
            const bookPromises = initialIsbns.map(async (isbn, index) => {
                const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
                const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${apiKey}`;
                const response = await fetch(url);
                const data = await response.json();
                const bookInfo = data.items[0].volumeInfo;
                const ratingIndex = index % bookRatings.length; 
                const reviewIndex = index % bookReviews.length; 
                return {
                    title: bookInfo.title,
                    subtitle: bookInfo.subtitle,
                    authors: bookInfo.authors,
                    image: bookInfo.imageLinks?.thumbnail,
                    rating: bookRatings[ratingIndex],
                    review: bookReviews[reviewIndex],
                    link: bookInfo.infoLink,
                };
            });

            const fetchedBooks = await Promise.all(bookPromises);
            setBooks(fetchedBooks);
        };

        fetchBookDetails();
    }, []);

    return (
        <div>
            {books.map((book, index) => (
                <div key={index}>
                    <Segment color='purple' style={{ marginTop: '10px' }}>
                        <Grid columns={2}>
                            <Grid.Column width={2}>
                                <a href={book.link} target="_blank" rel="noopener noreferrer">
                                    <Image src={book.image} />
                                </a>
                            </Grid.Column>
                            <Grid.Column width={14}>
                                <a href={book.link} target="_blank" rel="noopener noreferrer">
                                    <Header>{book.title}</Header>
                                </a>
                                
                                    <Header.Subheader>{book.subtitle}</Header.Subheader>
                                    <Header.Subheader>
                                        <div>
                                            {book.authors.map((author, authorIndex) => (
                                                <span key={authorIndex}>
                                                    {author}
                                                    {authorIndex !== book.authors.length - 1 && ", "}
                                                </span>
                                            ))}
                                        </div>
                                    </Header.Subheader>

                                
                                <div style={{ marginTop: '10px' }}>
                                    <h5>My Personal Rating: <Rating icon='star' defaultRating={book.rating} maxRating={5} /></h5>
                                </div>
                                <div style={{ marginTop: '10px' }}>
                                    <h5>My Personal Review:</h5>
                                </div>
                                <div style={{ marginTop: '5px' }}>
                                    <p>{book.review}</p>
                                </div>


                            </Grid.Column>
                        </Grid>
                    </Segment>
                </div>
            ))}
        </div>

    );
};

export default BookReviewList;
