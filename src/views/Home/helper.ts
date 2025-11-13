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
