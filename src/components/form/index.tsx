import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { sendNewMember } from "../../api/members";
import { useAppState } from "../../state";
import "./index.scss";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [ssn, setSsn] = useState("");
  const { token, setTableData, tableData } = useAppState();

  const regExp = /(\d{3})-(\d{2})-(\d{4})/;

  const reset = () => {
    setFirstName("");
    setLastName("");
    setAddress("");
    setSsn("");
  };

  const checkSsn = () => {
    const ssnArray = tableData.map((value) => value.ssn === ssn);
    return ssnArray.includes(true);
  };

  const save = () => {
    const data = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      address: address.trim(),
      ssn,
    };
    setTableData((prevState) => [
      ...prevState,
      data,
    ]);
    sendNewMember(token, data);
    reset();
  };

  return (
    <section className="form-container">
      <TextField
        label="First Name"
        variant="outlined"
        size="small"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
        error={firstName.trim().length < 2 && firstName.length > 0}
        helperText={
          firstName.trim().length < 2 && firstName.length > 0
            ? "First Name is to short"
            : " "
        }
      />
      <TextField
        label="Last Name"
        variant="outlined"
        size="small"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        error={lastName.trim().length < 2 && lastName.length > 0}
        helperText={
          lastName.trim().length < 2 && lastName.length > 0
            ? "Last Name is to short"
            : " "
        }
      />
      <TextField
        label="Adress"
        variant="outlined"
        size="small"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        error={address.trim().length < 2 && address.length > 0}
        helperText={
          address.trim().length < 2 && address.length > 0
            ? "Address is to short"
            : " "
        }
      />
      <TextField
        label="SSN"
        variant="outlined"
        size="small"
        value={ssn}
        onChange={(e) => {
          setSsn(e.target.value);
        }}
        error={
          (!regExp.test(ssn) && ssn.length > 0) || checkSsn() || ssn.length > 11
        }
        helperText={
          (!regExp.test(ssn) && ssn.length > 0) || ssn.length > 11
            ? "The number of character is incorrect"
            : checkSsn()
            ? "Ssn already exist"
            : ""
        }
      />
      <div className="buttons">
        <Button onClick={reset}>Reset</Button>
        <Button
          onClick={save}
          disabled={
            firstName.trim().length < 2 ||
            lastName.trim().length < 2 ||
            address.trim().length < 2 ||
            !regExp.test(ssn) ||
            checkSsn() ||
            ssn.length > 11
          }
        >
          Save
        </Button>
      </div>
    </section>
  );
};

export default Form;
