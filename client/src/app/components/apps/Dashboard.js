import React, { useState } from "react";
import { makeStyles } from '@mui/styles';
import { Icon, IconButton, Typography, Table, Card, TableBody, TextField, TableCell, TableRow, TableHead, TablePagination, TableContainer, TableSortLabel, Dialog, DialogActions, DialogTitle, DialogContent, Button } from "@mui/material";
//import { useDispatch } from "react-redux";
import PatientRecordDialog from "./PatientRecordDialog";


const useStyles = makeStyles({
    root: {
        display: "flex",
        width: "100%",
        alignItems: "flex-start",
        padding: 16,
        flexDirection: "column",
        minHeight: "100%"
    },
    headerContainer: {
        display: "flex",
        width: "100%",
        marginRight: 24,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between"
    },

    tableroot: {
        minHeight: 720,
        boxShadow: "none",
        marginTop: 5
    },
    tableWrapper: {
        maxHeight: 700,
        overflow: "auto",
        boxShadow: "none"
    },

    head: {
        top: 10,
        border: 2
    },
    cell: {
        display: "flex",
        flexDirection: "row",
        justifyItems: "center",
        alignItems: "center"
    },
    tableRow: {
        display: "flex",
        flexDirection: "row",
        paddingLeft: 24
    }
    ,
    subTitle2: {
        fontSize: 18,
        fontWeight: 700
    },

    btn: {
        fontSize: 12,
        fontWeight: 700,
        marginRight: 60,
        height: 34,
        shadow: "none",
        width: 120,
        border: "1px solid #152938",
        borderRadius: 4,
        textTransform: "none",
        '&:hover': {
            color: "#ffffff",
            backgroundColor: "#152938"
        }
    },
    searchText: {
        "& .MuiInputBase-root": {
            height: 48,
            marginTop: 10,
            borderRadius: 16,
            width: 420,
            marginBottom: 20
        }
    }
});

function Dashboard(props) {
    // const dispatch = useDispatch();
    const classes = useStyles()
    const [filteredData, setFilteredData] = useState([{
        "fullName": "Umesh Agrahari",
        "age": "28",
        "address": "ISAULI SULTANPUR ",
        "medicalHistory": "Fever & Cold",
        "bloodGroup": "O positive",
        "gender": "Male"
    }]);
    const [isDeleteDialogOpen, setDeleteDialog] = useState(false)
    const [userDetails, setUserDetails] = useState()
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [filterParams, setFilterParams] = useState("firstName")
    const [order, setOrder] = useState('asc')

    // Open Dialog

    const [open, setOpen] = useState(false)


    const handleDialogDelete = (userDetails) => {
        setUserDetails(userDetails)
        setDeleteDialog(!isDeleteDialogOpen)
    }

    const handleDelete = (ev) => {
        setFilteredData(filteredData.filter(user => user.fullName !== userDetails.fullName))
        setDeleteDialog(false)
    }


    const handleChangePage = (ev, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleSort = (params) => {
        const isAsc = filterParams === params && order === "asc";
        setOrder(isAsc ? 'desc' : 'asc')
        setFilterParams(params)
        if (filteredData) {
            let filterList = filteredData.sort((a, b) => {
                return isAsc === true
                    ? descendingComparator(a, b, params)
                    : -descendingComparator(a, b, params)
            })
            setFilteredData(filterList)
        }
    }

    function descendingComparator(a, b, params) {

        if (b[params] < a[params]) {
            return -1;
        }
        if (b[params] > a[params]) {
            return 1;
        }
        return 0;
    }


    const handleDialog = () => {
        setOpen(!open)
        setUserDetails()
    }


    const handleFilteredData = (patientDetail) => {
        let patientList = JSON.parse(JSON.stringify(filteredData))
        patientList.push(patientDetail)
        setFilteredData(patientList)
        setOpen(false)

    }

    const handleEdit = (row) => {
        setUserDetails(row)
        setOpen(!open)
    }


    return (

        <Card className={classes.root}>
            <div className={classes.headerContainer}>
                <Typography variant="h5" color="GrayText">Dashboard</Typography>
                <Button style={{ marginRight: 60, textTransform: "none" }} color="primary" variant="contained"
                    onClick={() => handleDialog()}
                >Add User</Button>
            </div>

            <TextField
                placeholder="Search"

                className={classes.searchText}
                //   value={searchText}
                //   onChange={handleSearchText}
                variant="outlined"
                fullWidth

                InputLabelProps={{ shrink: true, variant: "outlined" }}
            />

            <TableContainer className={classes.tableroot} >
                <Table className={classes.root} aria-label="sticky table">
                    <TableHead className={classes.head}>
                        <TableRow
                        >
                            <TableCell

                                style={{ backgroundColor: "#ffffff", width: 180, }}
                                size="small" align="left">
                                <div className={classes.cell}>
                                    <Typography className={classes.subTitle2} variant="subtitle"> Name</Typography>
                                    <TableSortLabel
                                        direction={filterParams === "fullName" ? order : 'desc'}
                                        className="text-black"
                                        active={true}
                                        onClick={() => handleSort("fullName")}
                                    /></div>
                            </TableCell>
                            <TableCell

                                style={{ backgroundColor: "#ffffff", width: 180, }}
                                size="small" align="center">
                                <div className={classes.cell}>
                                    <Typography className={classes.subTitle2} variant="subtitle">Age</Typography>
                                    <TableSortLabel
                                        direction={filterParams === "age" ? order : 'desc'}
                                        className="text-black"
                                        active={true}
                                        onClick={() => handleSort("age")}
                                    /></div>
                            </TableCell>
                            <TableCell

                                style={{ backgroundColor: "#ffffff", width: 180, }}
                                size="small" align="center">
                                <div className={classes.cell}>
                                    <Typography className={classes.subTitle2} variant="subtitle">Gender</Typography>
                                    <TableSortLabel
                                        direction={filterParams === "gender" ? order : 'desc'}
                                        className="text-black"
                                        active={true}
                                        onClick={() => handleSort("gender")}
                                    /></div>
                            </TableCell>
                            <TableCell

                                style={{ backgroundColor: "#ffffff", width: 180, }}
                                size="small" align="center">
                                <div className={classes.cell}>
                                    <Typography className={classes.subTitle2} variant="subtitle">Blood Group</Typography>
                                    <TableSortLabel
                                        direction={filterParams === "bloodGroup" ? order : 'desc'}
                                        className="text-black"
                                        active={true}
                                        onClick={() => handleSort("bloodGroup")}
                                    /></div>
                            </TableCell>
                            <TableCell

                                style={{ backgroundColor: "#ffffff", width: 230, }}
                                size="small" align="center">
                                <div className={classes.cell}>
                                    <Typography className={classes.subTitle2} variant="subtitle">Address</Typography>
                                    <TableSortLabel
                                        direction={filterParams === "address" ? order : 'desc'}
                                        className="text-black"
                                        active={true}
                                        onClick={() => handleSort("address")}
                                    /></div>
                            </TableCell>


                            <TableCell
                                className="flex flex-row items-center justify-center "
                                style={{ backgroundColor: "#ffffff", width: 180, }}
                                size="small" align="center">
                                <div className={classes.cell}>
                                    <Typography className={classes.subTitle2} variant="subtitle">Medical History</Typography>
                                    <TableSortLabel
                                        direction={filterParams === "medicalHistory" ? order : 'desc'}
                                        className="text-black"
                                        active={true}
                                        onClick={() => handleSort("medicalHistory")}
                                    /></div>
                            </TableCell>
                            <TableCell

                                style={{ backgroundColor: "#ffffff", width: 230, }}
                                size="small" align="center">

                                <div className={classes.cell}>
                                    <Typography className={classes.subTitle2} variant="subtitle">Action</Typography>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, idx) => (
                            <TableRow

                                key={"user" + idx}
                            >

                                <TableCell
                                    style={{ backgroundColor: "#ffffff", width: 180 }}
                                    size="small" align="left">

                                    <Typography className="text-14 font-400 ml-10 mt-4">{row.fullName ? row.fullName : ""}</Typography>
                                </TableCell>
                                <TableCell
                                    style={{ backgroundColor: "#ffffff", width: 180 }}
                                    size="small" align="left">
                                    <div className="flex flex-row w-full items-center justify-center">
                                        <Typography className="text-14 font-400 ml-10 mt-4">{row.age ? row.age : ""}</Typography></div>
                                </TableCell>
                                <TableCell
                                    style={{ backgroundColor: "#ffffff", width: 180 }}
                                    size="small" align="left">
                                    <div className="flex flex-row w-full items-center justify-center">
                                        <Typography className="text-14 font-400 mt-4">{row.gender ? row.gender : ""}</Typography></div>
                                </TableCell>

                                <TableCell
                                    style={{ backgroundColor: "#ffffff", width: 180 }}
                                    size="small" align="left">
                                    <div className="flex flex-row w-full items-center justify-center">
                                        <Typography className="text-14 font-400 mt-4">{row.bloodGroup ? row.bloodGroup : ""}</Typography></div>
                                </TableCell>
                                <TableCell
                                    style={{ backgroundColor: "#ffffff", width: 230 }}
                                    size="small" align="left">
                                    <div className="flex flex-row w-full items-center justify-center">
                                        <Typography className="text-14 font-400 mt-4">{row.address ? row.address : ""}</Typography></div>
                                </TableCell>

                                <TableCell
                                    style={{ backgroundColor: "#ffffff", width: 180 }}
                                    size="small" align="left">
                                    <div className="flex flex-row w-full items-center justify-center">
                                        <Typography className="text-14 font-400 mt-4">{row.medicalHistory ? row.medicalHistory : ""}</Typography></div>
                                </TableCell>
                                <TableCell
                                    style={{ backgroundColor: "#ffffff", width: 230, justifyContent: "space-between" }}
                                    size="small" align="left">

                                    <IconButton
                                        onClick={ev => {
                                            ev.stopPropagation()
                                            handleEdit(row)
                                        }}
                                        className="text-primary"
                                        size="small"

                                    >
                                        <span class="material-symbols-outlined">edit
                                        </span>
                                    </IconButton>


                                    <IconButton
                                        onClick={() => handleDialogDelete(row)}
                                        className="text-primary"
                                        style={{ marginLeft: 20 }}
                                        size="small"
                                    >
                                        <span class="material-symbols-outlined">delete
                                        </span>
                                    </IconButton>




                                </TableCell>
                            </TableRow>
                        ))}


                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 20, 50]}
                    component="div"
                    count={filteredData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
            <PatientRecordDialog handleFilteredData={handleFilteredData} userDetails={userDetails} open={open} handleDialog={handleDialog} />

            <Dialog
                open={isDeleteDialogOpen}
                onClose={() => setDeleteDialog(false)}
            >
                <DialogTitle>
                    <Typography variant="h5" className="text-primary">CONFIRMATION</Typography>
                </DialogTitle>
                <DialogContent>
                    <Typography className="text-14 text-primary">Are you sure you want to delete this {userDetails?.fullName}?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined"
                        size="small"
                        className={classes.btn}
                        onClick={() => handleDelete()}
                        style={{ marginRight: 20 }}
                    >
                        Yes
                    </Button>
                    <Button variant="outlined"
                        size="small"
                        className={classes.btn}
                        onClick={() => setDeleteDialog(false)}
                    >
                        No
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>

    );
}

export default Dashboard;