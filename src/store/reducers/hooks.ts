import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { TypedUseSelectorHook } from "react-redux/es/types";
import { AppDispatch, RootState } from "../index";

export const useAppDispatch : () =>AppDispatch = useDispatch

export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector
//created two hooks from 2 methods from redux
//whenever we want to access any reducer or method from reduxjs toolkit, we use dispatch method , we created a hook for that
//a typescript enabled hook

//useSelector -- when we want any state from reduxjs toolkit we grab it thru useSelector
//