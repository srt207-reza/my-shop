"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Button } from "@mui/material";

import {
  deleteSelectedRepeatProduct,
  selectedRepeatProductsForStore,
  updateSelectedRepeatProduct,
} from "@/redux/store/selected";
import { useState } from "react";

const Counter: React.FC = (props: any) => {
  const dispatch = useAppDispatch();
  const [counter, setCounter] = useState(1);

  const addData = () => {
    setCounter((count) => count + 1);
    dispatch(updateSelectedRepeatProduct(props));
  };

  const removeData = () => {
    setCounter(1);
    dispatch(deleteSelectedRepeatProduct(props.id));
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
