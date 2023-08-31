import React, { useState, useEffect } from 'react';
import { Segment, Table, Icon, Button, Grid } from "semantic-ui-react";
import ReactMarkdown from 'react-markdown';


const fetchData = (url, accessToken) => {
    return fetch(url, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    }).then(response => response.json());
};


const CrowdCoinDetails = () => {
    const [readmeContent, setReadmeContent] = useState(null);
    const [repoFiles, setRepoFiles] = useState(null);
    const [owner, setOwner] = useState('theresa-whynot'); 
    const [repoName, setRepoName] = useState('crowdcoin'); 

    useEffect(() => {
        const readmeUrl = `https://api.github.com/repos/${owner}/${repoName}/readme`;
        const filesUrl = `https://api.github.com/repos/${owner}/${repoName}/contents`;
        const accessToken = process.env.REACT_APP_GITHUB_TOKEN;

        fetchData(readmeUrl, accessToken)
            .then(data => {
                const decodedContent = atob(data.content);
                setReadmeContent(decodedContent);
            })
            .catch(error => console.error('Error fetching README:', error));

        fetchData(filesUrl, accessToken)
            .then(data => setRepoFiles(data))
            .catch(error => console.error('Error fetching repository files:', error));
    }, []);


    return (


        <div>
            <Segment.Group >
                <Segment color="green">
                    <h5>The below CrowdCoin information was fetched through a GitHub REST API call  <Icon color="green" name='object group' /></h5>
                </Segment>
                <Segment>
          {readmeContent ? (
                <div>
                            <ReactMarkdown>{readmeContent}</ReactMarkdown>
                </div>
            ) : (
                <p>Loading repository details...</p>
            )}
                </Segment>
            
            {repoFiles ? (
                    <div>
                        <Table celled striped>
                            <Table.Header>
                                <Table.Row>
                                   
                                    <Table.HeaderCell  colSpan='1'>
                                        <div style={{ textAlign: 'center' }}>Main Branch Code Files Linked to Github</div>

                                        <div style={{ marginTop: '10px', marginLeft: '30px'}}>
                                            <Grid columns={2}>
                                            <Grid.Column>
                                        <a href="https://github.com/theresa-whynot/crowdcoin/tree/main" target="_blank" rel="noopener noreferrer">
                                            <Button color="blue" >
                                                            <Icon name='code branch' /> Main Branch Code Here
                                        </Button>
                                        </a>
                                                </Grid.Column>
                                                <Grid.Column>
                                        <a href="https://github.com/theresa-whynot/crowdcoin/archive/main.zip">
                                                <Button color="green">
                                                            <Icon name='download' />Download Zip File
                                            </Button>
                                                    </a>
                                                </Grid.Column>
                                            </Grid>
                                        </div>
                                        </Table.HeaderCell>
                                    
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {repoFiles.map(file => (
                                    
                                    <Table.Row key={file.sha}>
                                        <a
                                            href={`https://github.com/${owner}/${repoName}/blob/main/${file.path}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ textDecoration: 'none' }}
                                        >
                                        <Table.Cell collapsing>
                                                <Icon color="black" name={file.type === 'dir' ? 'folder' : 'file'} /> {file.name}
                                            </Table.Cell>
                                        </a>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                            </Table>
                </div>
                ) : (<p>Loading repository files...</p>)}
            </Segment.Group>
        </div>
    );
};

export default CrowdCoinDetails;
