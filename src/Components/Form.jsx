import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../Firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userFile, setUserFile] = useState("");
  const [sendData, setSendData] = useState([]);
  

  // firebase
  const db = getFirestore(app);
  console.log(sendData);

  const submitDAta = async () => {
    if (userName === "") {
      toast("Enter User Name");
    } else if (userEmail === "") {
      toast("Enter User Email");
    } else if (userPassword === "") {
      toast("Enter User Password");
    } else if (userNumber === "") {
      toast("Enter User Number");
    } else if (userFile === "") {
      toast("Enter User File");
    } else {
      toast("Thanks");
      console.log(userName, userEmail, userPassword, userNumber, userFile);
      // Firebase  Realt Time Cloud Data
      try {
        const docRef = await addDoc(collection(db, "users"), {
          User_Name: userName,
          User_Email: userEmail,
          User_Passowrd: userPassword,
          User_Number: userNumber,
          User_File: userFile,
        });

        console.log("Document written with ID: ", docRef);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      //   Sign up new user
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setSendData(user);
          // console.log(user)
          updateProfile(user, {
            displayName: userName,
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
          // ..
        });
      //   firebase end
    }
  };
  return (
    <>
      <Box
        className="model_form"
        component="form"
        sx={{
          "& > :not(style)": { m: "10px 0", width: "100%", maxWidth: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          type="text"
          label="User Name"
          variant="outlined"
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          type="email"
          label="User Email"
          variant="outlined"
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <TextField
          type="password"
          label="User Password"
          variant="outlined"
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <TextField
          type="number"
          label="User Contact Number"
          variant="outlined"
          onChange={(e) => setUserNumber(e.target.value)}
        />
        <TextField type="file" onChange={(e) => setUserFile(e.target.value)} />
        <Button variant="contained" color="success" onClick={submitDAta}>
          Success
        </Button>
      </Box>

      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Form;
