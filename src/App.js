import React, { useEffect, useState } from "react";

import Form from "./Components/Form";

import SerachBar from "./Components/SerachBar";
import { auth } from "./Firebase";

const App = () => {
  const [userName, setUserName] = useState("")
  useEffect(() => {
    auth.onAuthStateChanged((users) => {
      setUserName(users)
  
    })
  })
  return (
    <>
      <SerachBar getUserName={userName}/>
      <Form />
    </>
  );
};

export default App;
