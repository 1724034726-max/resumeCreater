/**
 * 简历编辑上下文
 * Author:huangshouhua
 * Date:2025-11-12
 */

import * as editStore from "@/store/slices/resume";
import { useAppDispatch, useAppSelector, selectResumeStore } from "@/hooks/redux";
import { createSelector } from "@reduxjs/toolkit";
/**
 * 拿单个简历所有配置
 */
export function useGetResume() {
  return useAppSelector(selectResumeStore);
}

/**
 * 拿单个简历所有模块（轻量级，只拿标题）
 */

export const useGetResumeModule = () => {
  const selectResumeList = createSelector(
    [selectResumeStore],
    (resumeState) => resumeState.resume
  );
  const selectResumeModules = createSelector(
    [selectResumeList],
    (resumeItems) =>
      resumeItems.map((item) => ({
        title: item.cnType,
      }))
  );
  return useAppSelector(selectResumeModules);
};

/**
 * 更新简历所有配置
 */
export function useUpdateResume(
  dispatch: ReturnType<typeof useAppDispatch>,
  resume: ResumeState
) {
  dispatch(editStore.setMenuSections(resume));
}
/**
 * 更新当前模块标题
 */
export function useUpdateResumeModule(
  dispatch: ReturnType<typeof useAppDispatch>,
  module: string
) {
  dispatch(editStore.setCurrentModule(module));
}
