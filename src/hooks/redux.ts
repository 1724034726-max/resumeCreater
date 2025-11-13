/**
 * type redux hooks for redux-toolkit
 * Author:huangshouhua
 * Date:2025-11-12
 */
import type { TypedUseSelectorHook } from "react-redux";
import type store from "@/store";
import type { rootReducer } from "@/store/slices";
import { useDispatch, useSelector } from "react-redux";
type StoreState = ReturnType<typeof rootReducer>;
type StoreDispatch = typeof store.dispatch;
export const useAppDispatch: () => StoreDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector;
export const selectResumeStore = (state: StoreState): ResumeState => state.resume;