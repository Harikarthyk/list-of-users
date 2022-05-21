import React, { useState } from "react";
import "./Home.css";
import EmptyContent from "../../components/Table/EmptyContent";
import { useDispatch, useSelector } from "react-redux";
import { Button, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddNewUser from "../../components/Home/AddNewUser";
import UserListTable from "../../components/Home/UserListTable";
import { addNewUser, deleteUser } from "../../store/actions/user";
import { cities } from "../../mock/cities.js";


const Home = () => {

    const navigate = useNavigate();

    const users = useSelector(state => state?.users);
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState({
        name: "",
        email: "",
        gender: "Male",
        dob: "",
        city: cities[0]?.name
    });
    const [snackBarState, setSnackBarState] = useState({
        isOpen: false,
        message: ""
    });

    const addNewUserToggle = () => {
        setIsOpen(pre => !pre);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let data = user;
        data.id = new Date().getTime();

        const payload = {
            user
        }

        dispatch(addNewUser(payload));
        setSnackBarState({
            isOpen: true,
            message: 'New User Added Successfully.'
        });
        setUser({
            name: "",
            email: "",
            gender: "Male",
            dob: "",
            city: cities[0]?.name
        })
        setIsOpen(pre => !pre);

    }

    const handleChange = (key, value) => {
        setUser({
            ...user,
            [key]: value
        });
    }


    const editUserHandler = (id) => {
        navigate(`edit/${id}`);
        // window.open(`edit/${id}`)
    }

    const deleteUserHandler = (id) => {

        const payload = {
            id: id
        }
        dispatch(deleteUser(payload));
        setSnackBarState({
            isOpen: true,
            message: 'User Deleted Successfully.'
        });
    }


    const handleSnackBarClose = () => {
        setSnackBarState({
            isOpen: false,
            message: ""
        })
    }

    return (
        <div className="homeContainer">
            <Snackbar
                open={snackBarState.isOpen}
                autoHideDuration={4000}
                onClose={handleSnackBarClose}
                message={snackBarState.message}
            />
            <div className="homeHeader">
                <div className="homeText">
                    USER LIST
                </div>
                <Button onClick={addNewUserToggle} className="homeContainerAddNewUserButton" variant="contained">
                    Add New User
                </Button>
            </div>

            <AddNewUser
                isOpen={isOpen}
                user={user}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleClose={addNewUserToggle}
                cities={cities}
            />

            <UserListTable
                users={users}
                deleteUserHandler={deleteUserHandler}
                editUserHandler={editUserHandler}
            />

            {
                (!users || users.length === 0) &&
                <EmptyContent />
            }
        </div>
    )
}

export default Home
