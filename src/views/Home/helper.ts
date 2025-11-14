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
export function changeModuleOrder(
  moduleList: any[],
  draggedIndex: number,
  dragOverIndex: number
) {
  const newModuleList = [...moduleList];
  const [draggedItem] = newModuleList.splice(draggedIndex, 1);
  newModuleList.splice(dragOverIndex, 0, draggedItem);
  return newModuleList;
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
