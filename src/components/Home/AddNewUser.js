import { Button, Modal } from "@mui/material"
import React from "react"
import Form from "../Form";
import "./AddNewUser.css";

const AddNewUser = ({
    isOpen,
    user,
    handleChange,
    handleClose,
    handleSubmit,
    cities
}) => {

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="add-new-user-model"
        >
            <div className="addNewUserWrapper">
                <div className="addNewUserTitle">
                    User Information  
                </div>
                <form onSubmit={handleSubmit}>
                    <Form
                        cities={cities}
                        user={user}
                        handleChange={handleChange}
                    />
                    <Button
                        type={"submit"}
                        variant="contained"
                        className="addNewUserButton"
                        onSubmit={handleSubmit}
                        
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </Modal>
    )
}

export default AddNewUser
