/**
 * 简历编辑上下文
 * Author:huangshouhua
 * Date:2025-11-12
 */

import * as editStore from "@/store/slices/resume";
import {
  useAppDispatch,
  useAppSelector,
  useSelectResumeStore,
} from "@/hooks/redux";
import { createSelector } from "@reduxjs/toolkit";
/**
 * 拿单个简历所有配置
 */
export function useGetResume() {
  return useAppSelector(useSelectResumeStore);
}

/**
 * 拿单个简历所有模块（轻量级，只拿标题）
 */

export const useGetResumeModule = () => {
  //因为外部改了resume仓库除了resume字段的其他字段
  //也会触发selectResumeStore的selector重新执行
  //但resume字段引用不变,所以不会重新执行selectResumeList的selector

  //拿resume仓库的state的resume字段
  const selectResumeList = createSelector(
    [useSelectResumeStore],
    (resumeState) => resumeState.resume
  );
  /**
   * 拿selectResumeList的selector返回的resume字段数组的map(item => item.cnType)
   * 只要selectResumeList的selector返回的数组引用不变,selector就从缓存拿结果,不会重新执行
   */
  const selectResumeModules = createSelector(
    [selectResumeList],
    (resumeItems) =>
      resumeItems.map((item) => ({
        title: item.cnType,
        key: item.key,
      }))
  );
  //useAppSelector发现selectResumeModules的selector返回的数组引用不变
  //就会从缓存拿结果,所在的组件就不会重新渲染
  return useAppSelector(selectResumeModules);
};
/**
 * 拿当前选中模块
 */
export const useGetCurrentModule = () => {
  const selectCurrentModule = createSelector(
    [useSelectResumeStore],
    (resumeState) => resumeState.currentModule
  );
  return useAppSelector(selectCurrentModule);
};
/**
 * 根据模块key拿模块详细信息
 */
export const useGetCurrentModuleDetail = (currentModule: string) => {
  const selectResumeList = createSelector(
    [useSelectResumeStore],
    (resumeState) => resumeState.resume
  );
  const selectResumeModuleDetail = createSelector(
    [selectResumeList],
    (resumeItems) => resumeItems.find((item) => item.key === currentModule)
  );
  return useAppSelector(selectResumeModuleDetail);
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
/**
 * 添加简历模块
 */
export function useAddResumeModule(
  dispatch: ReturnType<typeof useAppDispatch>,
  module: any
) {
  dispatch(editStore.addResumeModule(module));
}
/**
 * 修改模块顺序
 */
export function useChangeModuleOrder(
  dispatch: ReturnType<typeof useAppDispatch>,
  moduleList: any[]
) {
  dispatch(editStore.changeModuleOrder(moduleList));
}
