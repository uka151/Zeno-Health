import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Dialog,

  DialogContent,
  Typography,
  Select,
  MenuItem,
  Input, IconButton
} from "@mui/material"

import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({

  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 18
  }
  ,
  title: {
    fontSize: 22,
    fontWeight: 700,
    marginLeft: 16,
    marginTop: 10
  },

  actionContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 16

  }

})
const defaultFormState = {
  fullName: "",
  age: "",
  address: "",
  medicalHistory: "",
  bloodGroup: "noSelect",
  gender: "noSelect"
};

function PatientRecordDialog(props) {
  // const dispatch = useDispatch();
  const classes = useStyles()

  const [form, setForm] = useState(defaultFormState);

  useEffect(() => {
    if (props.userDetails && props.userDetails.fullName.length > 0) {
      setForm(props.userDetails)
    } else {
      setForm(defaultFormState)
    }
  }, [props.userDetails])

  function handleChange(event, type) {
    let obj = JSON.parse(JSON.stringify(form))
    obj[type] = event.target.value
    setForm(obj)
  }




  function canBeSubmitted() {
    return form.medicalHistory.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.handleFilteredData(form)
    console.log("form", form)
    setForm(defaultFormState)
  }

  return (
    <Dialog
      open={props.open}
      onClose={props.handleDialog}
      maxWidth="md"
      fullWidth
    >
      <div className="flex flex-row w-full items-between justify-between">
        <Typography variant="h5" style={{ marginLeft: 24, marginTop: 24 }} color="inherit">
          {true ? "Create New User" : "Edit User"}
        </Typography>

        <IconButton
          aria-label="close"

        >


        </IconButton>
      </div>
      <DialogContent sx={{ root: "p-48" }}>

        <div className={classes.formContainer}>
          <TextField
            className={classes.textField}
            label="FullName"
            firstName="fullName"
            name="fullName"
            value={form.fullName}
            onChange={(ev) => handleChange(ev, "fullName")}
            variant="outlined"
            required
            fullWidth
          />




          <TextField
            className={classes.textField}
            label="Age"
            name="age"
            value={form.age}
            onChange={(ev) => handleChange(ev, "age")}
            variant="outlined"
            required
            fullWidth
          />

          <TextField
            className={classes.textField}
            label="Address"

            id="address"
            name="address"
            value={form.address}
            onChange={(ev) => handleChange(ev, "address")}
            variant="outlined"
            required
            fullWidth
          />
          <div style={{ display: "flex", flexDirection: "row", gap: 48 }}>
            <Select
              name="gender"
              label="Gender"
              value={form.bloodGroup}
              onChange={(ev) => handleChange(ev, "gender")}
              input={<Input variant="outlined" id="gender" />}
              variant="outlined"
              fullWidth
            >
              <MenuItem value={"noSelect"}>Select Gender</MenuItem>
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>

            </Select>
            <Select
              name="bg"
              value={form.bloodGroup}
              onChange={(ev) => handleChange(ev, "bloodGroup")}
              input={<Input variant="outlined" id="bg" />}
              variant="outlined"
              fullWidth
            >
              <MenuItem value={"noSelect"}>Select Blood Group</MenuItem>
              <MenuItem value={"O positive"}>O+</MenuItem>
              <MenuItem value={"O negatve"}>O-</MenuItem>
              <MenuItem value={"A positive"}>A+</MenuItem>
              <MenuItem value={"A negative"}>A-</MenuItem>
              <MenuItem value={"B positive"}>B+</MenuItem>
              <MenuItem value={"B negative"}>B-</MenuItem>
              <MenuItem value={"AB positive"}>AB+</MenuItem>
              <MenuItem value={"AB negative"}>AB-</MenuItem>

            </Select>
          </div>

          <TextField
            className={classes.textField}
            label="Medical History"
            id="medicalHistory"
            name="medicalHistory"
            multiline
            rows={4}
            value={form.medicalHistory}
            onChange={(ev) => handleChange(ev, "medicalHistory")}
            variant="outlined"
            required
            fullWidth
          />


        </div>
      </DialogContent>

      {true ? (
        <div className={classes.actionContainer}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            type="submit"
            disabled={!canBeSubmitted()}
          >
            Add
          </Button>
        </div>
      ) : (
        <div className={classes.actionContainer}>
          <Button
            variant="contained"

            type="submit"
            onClick={handleSubmit}
            disabled={!canBeSubmitted()}
          >
            Save
          </Button>
        </div>
      )}
    </Dialog>
  );
}

export default PatientRecordDialog;
