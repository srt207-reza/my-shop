"use client";
import { useAppDispatch } from "@/redux/hook";
import {
  deleteRepeatProduct,
  updateRepeatProduct,
} from "@/redux/store/selected";
import { Button } from "@mui/material";

import { useState } from "react";

const Counter: React.FC = (props: any) => {
  const dispatch = useAppDispatch();
  const [counter, setCounter] = useState(1);

  const addData = () => {
    dispatch(updateRepeatProduct(props.id));
    setCounter((perv) => ++perv);
  };

  const removeData = () => {
    dispatch(deleteRepeatProduct(props.id));
    setCounter((perv) => --perv);
  };

  return (
    <>
      <Button
        sx={{ width: 1 / 2 }}
        onClick={removeData}
        color="error"
        variant="contained"
      >
        حذف
      </Button>
      <Button
        sx={{ width: 1 / 2 }}
        onClick={addData}
        color="primary"
        variant="contained"
      >
        × {counter}
      </Button>
    </>
  );
};

export default Counter;
