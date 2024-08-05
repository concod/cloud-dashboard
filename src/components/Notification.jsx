// components/Notification.js
import React, { useState, useEffect, useRef } from "react";
import { Alert, Snackbar } from "@mui/material";
import { generateNotification } from "../services/mockData";

const Notification = () => {
  const [notification, setNotification] = useState("");
  const [open, setOpen] = useState(false);
  let intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const newNotification = generateNotification();
      console.log(newNotification);
      setOpen(true);
      setNotification((prev) => newNotification);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleClose = () => {
    // clearInterval(intervalRef.current);
    setOpen(false);
  };

  return (
    <>
      {notification && (
        <Snackbar open={open} autoHideDuration={6000}>
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            {notification}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default Notification;
