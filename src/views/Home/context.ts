/**
 * 简历编辑上下文
 * Author:huangshouhua
 * Date:2025-11-12
 */

import * as editStore from "@/store/slices/resume";
import { useAppDispatch, useAppSelector, selectResume } from "@/hooks/redux";
import { createSelector } from "@reduxjs/toolkit";
export function useGetResume() {
  return useAppSelector((state) => state.resume);
}

export const useGeResumetModule = () => {
  const selectResumeModules = createSelector([selectResume], (resumeState) =>
    resumeState.resume.map((item) => ({
      title: item.cnType,
    }))
  );
  return useAppSelector(selectResumeModules);
};

export function updateResume(
  dispatch: ReturnType<typeof useAppDispatch>,
  resume: ResumeState
) {
  dispatch(editStore.setMenuSections(resume));
}
