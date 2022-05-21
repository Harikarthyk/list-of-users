import { Button } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom";
import "./NoUser.css"

const NoUser = () => {

    const navigate = useNavigate();

    const goBackHomeHandler = () => {
        navigate("/");
    }

    return (
        <div className="noUserContainer"> 
            <div className="noUserText">
                Invalid User Id.
            </div>
            <Button onClick={goBackHomeHandler} variant="contained">
                Go Back Home
            </Button>
        </div>
    )
}

export default NoUser
