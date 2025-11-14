/**
 * 简历仓库
 * Author:huangshouhua
 * Date:2025-11-12
 */
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
const initialState: ResumeState = {
  resume: [
    {
      key: "personal",
      cnType: "个人信息",
      init: true,
      canDelete: false,
      canCustom: false,
      content: [
        {
          name: { cnType: "姓名", enType: "name", innerText: "张三" },
          phone: { cnType: "电话", enType: "phone", innerText: "13800138000" },
          email: {
            cnType: "邮箱",
            enType: "email",
            innerText: "zhangsan@example.com",
          },
          address: {
            cnType: "地址",
            enType: "address",
            innerText: "北京市朝阳区",
          },
          github: {
            cnType: "GitHub",
            enType: "github",
            innerText: "github.com/zhangsan",
          },
        },
      ],
    },
    {
      key: "education",
      cnType: "教育经历",
      init: true,
      canDelete: true,
      canCustom: true,
      content: [
        {
          school: {
            cnType: "学校名称",
            enType: "school",
            innerText: "北京大学",
          },
          major: {
            cnType: "专业",
            enType: "major",
            innerText: "计算机科学与技术",
          },
          degree: { cnType: "学历", enType: "degree", innerText: "本科" },
          startTime: {
            cnType: "开始时间",
            enType: "startTime",
            innerText: "2016-09",
          },
          endTime: {
            cnType: "结束时间",
            enType: "endTime",
            innerText: "2020-06",
          },
        },
        {
          school: {
            cnType: "学校名称",
            enType: "school",
            innerText: "清华大学",
          },
          major: { cnType: "专业", enType: "major", innerText: "软件工程" },
          degree: { cnType: "学历", enType: "degree", innerText: "硕士" },
          startTime: {
            cnType: "开始时间",
            enType: "startTime",
            innerText: "2020-09",
          },
          endTime: {
            cnType: "结束时间",
            enType: "endTime",
            innerText: "2023-06",
          },
        },
      ],
    },
    {
      key: "work",
      cnType: "工作经历",
      init: true,
      canDelete: true,
      canCustom: true,
      content: [
        {
          company: {
            cnType: "公司名称",
            enType: "company",
            innerText: "阿里巴巴",
          },
          position: {
            cnType: "职位",
            enType: "position",
            innerText: "高级前端工程师",
          },
          department: {
            cnType: "部门",
            enType: "department",
            innerText: "技术部",
          },
          startTime: {
            cnType: "开始时间",
            enType: "startTime",
            innerText: "2023-07",
          },
          endTime: { cnType: "结束时间", enType: "endTime", innerText: "至今" },
          description: {
            cnType: "工作描述",
            enType: "description",
            innerText:
              "负责公司核心产品的前端架构设计与开发，使用 React、TypeScript、微前端等技术栈，带领团队完成多个重要项目",
          },
        },
      ],
    },
    {
      key: "project",
      cnType: "项目经历",
      init: false,
      canDelete: true,
      canCustom: true,
      content: [
        {
          projectName: {
            cnType: "项目名称",
            enType: "projectName",
            innerText: "电商平台重构",
          },
          role: { cnType: "担任角色", enType: "role", innerText: "前端负责人" },
          startTime: {
            cnType: "开始时间",
            enType: "startTime",
            innerText: "2024-01",
          },
          endTime: {
            cnType: "结束时间",
            enType: "endTime",
            innerText: "2024-06",
          },
          techStack: {
            cnType: "技术栈",
            enType: "techStack",
            innerText: "React, TypeScript, Vite, Micro-Frontend",
          },
          description: {
            cnType: "项目描述",
            enType: "description",
            innerText:
              "主导完成了公司电商平台的微前端架构升级，将单体应用拆分为多个微应用，提升了40%的页面加载速度和开发效率",
          },
        },
      ],
    },
    {
      key: "skills",
      cnType: "技能特长",
      init: false,
      canDelete: true,
      canCustom: true,
      content: [
        {
          category: {
            cnType: "技能类别",
            enType: "category",
            innerText: "前端框架",
          },
          skills: {
            cnType: "技能列表",
            enType: "skills",
            innerText: "React, Vue.js, TypeScript",
          },
          proficiency: {
            cnType: "熟练程度",
            enType: "proficiency",
            innerText: "精通",
          },
          description: {
            cnType: "详细描述",
            enType: "description",
            innerText: "深入理解框架原理，有大型项目实战经验",
          },
        },
        {
          category: {
            cnType: "技能类别",
            enType: "category",
            innerText: "工程化",
          },
          skills: {
            cnType: "技能列表",
            enType: "skills",
            innerText: "Webpack, Vite, Docker, CI/CD",
          },
          proficiency: {
            cnType: "熟练程度",
            enType: "proficiency",
            innerText: "熟练",
          },
          description: {
            cnType: "详细描述",
            enType: "description",
            innerText: "熟悉前端工程化体系搭建和性能优化",
          },
        },
      ],
    },
  ],
  currentModule: "project",
};
const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setMenuSections: (state, action: PayloadAction<ResumeState>) => {
      state = action.payload;
    },
    setCurrentModule: (state, action: PayloadAction<string>) => {
      state.currentModule = action.payload;
    },
    addResumeModule: (state, action: PayloadAction<InfoItem>) => {
      state.resume.push(action.payload);
    },
    changeModuleOrder: (
      state,
      action: PayloadAction<Array<{ key: string; title: string }>>
    ) => {
      const orderMap = new Map(action.payload.map(({ key }, index) => [key, index]));
      if (orderMap.size !== action.payload.length) {
        return;
      }
      state.resume.sort((a, b) => {
        const indexA = orderMap.get(a.key);
        const indexB = orderMap.get(b.key);
        if (indexA === undefined || indexB === undefined) {
          return 0;
        }
        return indexA - indexB;
      });
    },  
  },
});

export const { setMenuSections, setCurrentModule, addResumeModule, changeModuleOrder } = resumeSlice.actions;
export default resumeSlice.reducer;
