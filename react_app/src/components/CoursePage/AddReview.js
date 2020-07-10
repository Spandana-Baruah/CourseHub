import React from 'react';
import {Button, Dialog, DialogTitle, DialogContent, DialogActions, makeStyles} from '@material-ui/core';
import AddRating from './AddRating';
import TextBox from './TextBox';
import {connect} from 'react-redux';
import {toggleAddReviewBox} from '../../actions';

const useStyles = makeStyles({
    button: {
        marginRight: '10px',
        marginBottom: '10px',
        padding: '5px 12px',
        '&:hover': {
            color: 'white',
            backgroundColor: '#A17070',
        }
    }
});

const AddReview = ({toggle, toggleAddReviewBox}) => {

    const classes = useStyles();

    const handlePostReview = () => {

        // TODO: how to get values from text box and rating
        console.log('handlign post review');
    }

    const handleClose = (props) => {
        toggleAddReviewBox(false);
    }

    return <Dialog open={toggle} onClose={handleClose}>
        <DialogTitle>Add your review</DialogTitle>
        <DialogContent> 
            <AddRating/>
            <TextBox/>
        </DialogContent>
        <DialogActions>
            <Button className={classes.button} onClick={handlePostReview}> Post Review </Button>
        </DialogActions>
        </Dialog>;
}

const mapStateToProps = (state) => {
    return {toggle: state.toggleAddReviewBox}
}

export default connect(mapStateToProps, {toggleAddReviewBox})(AddReview);