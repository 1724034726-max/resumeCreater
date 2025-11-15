/**
 * 业务辅助
 * Author:huangshouhua
 * Date:2025-11-12
 */
export function buildResumeModule(module: any) {
  return {
    key: "",
    cnType: module.title,
    init: false,
    canDelete: true,
    canCustom: true,
    content: [],
  };
}
export function changeOrder(
  dataList: any[],
  draggedIndex: number,
  dragOverIndex: number
) {
  const newDataList = [...dataList];
  const [draggedItem] = newDataList.splice(draggedIndex, 1);
  newDataList.splice(dragOverIndex, 0, draggedItem);
  return newDataList;
}
export function formatResumeModuleDetail(moduleDetail: ContentItem) {
  return Object.keys(moduleDetail).reduce(
    (acc: Record<string, string>, key: string) => {
      acc[key] = moduleDetail[key].innerText;
      return acc;
    },
    {} as Record<string, string>
  );
}
