import React from "react"
import "./UserListTable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";


const UserListTable = ({ users, editUserHandler, deleteUserHandler }) => {
    
    return (
        <TableContainer component={Paper}>
            <Table  aria-label="user data table">
                <TableHead>
                    <TableRow>
                        <TableCell className="userListTableHeading">Id</TableCell>
                        <TableCell className="userListTableHeading" align="left">Name</TableCell>
                        <TableCell className="userListTableHeading" align="left">Email</TableCell>
                        <TableCell className="userListTableHeading" align="left">Gender</TableCell>
                        <TableCell className="userListTableHeading" align="left">Date of Birth</TableCell>
                        <TableCell className="userListTableHeading" align="left">City</TableCell>
                        <TableCell className="userListTableHeading" align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {users.map((row) => (
                        <TableRow
                            key={row.id}

                            sx={{
                                "&:last-child td, &:last-child th": { border: 0 },
                                "&:nth-of-type(odd)": {
                                    backgroundColor: "#F5F5F5",
                                },
                            }}
                        >
                            <TableCell className="userListTableText" component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell className="userListTableText" align="left">
                                {row.name}
                            </TableCell>
                            <TableCell className="userListTableText" align="left">
                                {row.email}
                            </TableCell>
                            <TableCell className="userListTableText" align="left">
                                {row.gender}
                            </TableCell>
                            <TableCell className="userListTableText" align="left">
                                {row.dob}
                            </TableCell>
                            <TableCell className="userListTableText" align="left">
                                {row.city}
                            </TableCell>
                            <TableCell
                                align="left"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-evenly"
                                }}
                            >
                                <Button onClick={() => editUserHandler(row.id)} variant="outlined" style={{ fontSize: 12 }} color="primary">
                                    Edit
                                </Button>
                                <Button onClick={() => deleteUserHandler(row.id)} variant="outlined" style={{ marginLeft: 5, fontSize: 12 }} color="error">
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default UserListTable
