import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import './UserCard.scss';
import Context from '../../context/Context';
import { 
    Col,
    Card,
    CardText,
    CardBody,
    CardImg
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { findPostsAsyncActionCreator } from '../../store/modules/post/actions';

const UserCard = (props) => {
    // assigning the useDispatch function to a const

    const dispatch = useDispatch();

    // getting global theme

    const themeData = useContext(Context);

    // onClick function that dispatch the findposts action

    const handleOnDelete = () => {
        dispatch(findPostsAsyncActionCreator());
    };

    // returning component

    return (
        <div className="user-card">
            <Col sm="12" md={{'size': 8, 'offset': 2}} lg={{'size': 6, 'offset': 3}}>
                <Card 
                    className={
                        themeData.theme === 'light' 
                        ? 'bg-transparent posts-card-light mt-4 border-0'
                        : 'bg-transparent posts-card-dark mt-4 border-0'
                    }
                >
                    <CardText className="text-right m-0 p-0">
                        <FontAwesomeIcon icon={faTimes} className="user-card-b mr-2" onClick={handleOnDelete} />
                    </CardText>
                    <CardBody className="text-center mt-0 pt-0 pb-0">
                        <CardImg 
                            className="user-card-img"
                            src={props.data.image} 
                            alt=""
                        />
                    </CardBody>
                    <CardBody className="text-center">
                        <CardText className="mb-0">
                            <FontAwesomeIcon icon={faUser} className="mr-2" />
                            {props.data.firstName + ' ' + props.data.lastName}
                        </CardText>
                        <CardText className="mb-0">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                            {props.data.email}
                        </CardText>
                        <CardText>
                            <FontAwesomeIcon icon={faPhone} className="mr-2" />
                            {props.data.cell}
                        </CardText>
                    </CardBody>
                </Card> 
            </Col>
        </div>
    )
};

export default UserCard;
