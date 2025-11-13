/**
 * 简历编辑上下文
 * Author:huangshouhua
 * Date:2025-11-12
 */
import type { TypedUseSelectorHook } from "react-redux";
import type store from "@/store";
import type { rootReducer } from "@/store/slices";
import { useDispatch, useSelector } from "react-redux";
import * as editStore from "@/store/slices/resume";
type StoreState = ReturnType<typeof rootReducer>;
type StoreDispatch = typeof store.dispatch;
const useAppDispatch: () => StoreDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector;

export function useGetResume() {
  return useAppSelector((state) => state.resume);
}
export function updateResume(
  dispatch: ReturnType<typeof useAppDispatch>,
  resume: InfoItem[]
) {
  dispatch(editStore.setMenuSections(resume));
}
