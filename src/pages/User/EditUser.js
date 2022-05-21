import { Button, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import NoUser from "../../components/EditUser/NoUser";
import Form from "../../components/Form";
import { cities } from "../../mock/cities";
import { editUser } from "../../store/actions/user";
import "./EditUser.css";

const EditUser = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    const [snackBarState, setSnackBarState] = useState({
        isOpen: false,
        message: ""
    });
    const [user, setUser] = useState({
        name: "",
        email: "",
        gender: "",
        city: cities[0].name,
        dob: "",
        id: null
    });
    useEffect(() => {
        const id = location.pathname.split("/")[2];
        let arr = users.filter(user => ((user.id) + "") === id);
        if(arr.length === 0){
            setSnackBarState({
                isOpen: true,
                message: 'Invalid User Id Found.'
            });
            return; 
        }
        setUser({
            ...arr[0]
        });
    }, [users, location.pathname]);

    const updateUserHandler = (event) => {
        event.preventDefault();
        const payload = {
            user,
            id: user.id
        }
        dispatch(editUser(payload));
        setSnackBarState({
            isOpen: true,
            message: 'Invalid User Id Found.'
        });
        alert('Updated User Information.');
        navigate('/');
    }

    const handleChange = (key, val) => {
        setUser({
            ...user,
            [key]: val
        });
    }

    const handleSnackBarClose = () => {
        setSnackBarState({
            isOpen: false,
            message: ""
        })
    }

    return (
        <div className="editUserContainer">
            <Snackbar
                open={snackBarState.isOpen}
                autoHideDuration={4000}
                onClose={handleSnackBarClose}
                message={snackBarState.message}
            />
            {
                user?.id ?
                    <form className="editUserForm" onSubmit={updateUserHandler}>
                        <Form
                            user={user}
                            handleChange={handleChange}
                            cities={cities}
                        />
                        <Button
                            type={"submit"}
                            variant="contained"
                            className="addNewUserButton"
                            onSubmit={updateUserHandler}

                        >
                            Update User
                        </Button>
                    </form>
                    :
                    <NoUser />
            }
        </div>
    )
}

export default EditUser;
