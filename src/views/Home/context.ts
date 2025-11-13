/**
 * 简历编辑上下文
 * Author:huangshouhua
 * Date:2025-11-12
 */

import * as editStore from "@/store/slices/resume";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

export function useGetResume() {
  return useAppSelector((state) => state.resume);
}
export function updateResume(
  dispatch: ReturnType<typeof useAppDispatch>,
  resume: ResumeState
) {
  dispatch(editStore.setMenuSections(resume));
}
