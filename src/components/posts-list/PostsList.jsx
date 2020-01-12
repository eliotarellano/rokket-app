import React from 'react';
import './PostsList.css';
import {
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardLink,
    CardTitle,
} from 'reactstrap';

const PostList = (props) => {
    return (
        <div className="post-list">
            <Col sm="12" md={{'size': 6, 'offset':3}} lg="6">
                <Card>
                    <CardBody>
                        <Col className="row pl-md-3">
                            <CardImg className="post-user-avatar" src="https://randomuser.me/api/portraits/women/51.jpg" alt="" />
                            <CardTitle className="ml-3">Eliot Arellano</CardTitle>
                        </Col>
                    </CardBody>
                    <CardImg src="https://reactstrap.github.io/assets/318x180.svg" alt="" />
                    <CardBody>
                        <CardLink href="#">#Card</CardLink>
                        <CardLink href="#">#Another</CardLink>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                    <CardBody>
                        <CardText>a few seconds ago</CardText>
                    </CardBody>
                </Card>
            </Col>

        </div>
    )
}

export default PostList;