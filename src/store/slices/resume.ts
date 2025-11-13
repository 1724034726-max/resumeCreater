/**
 * 简历仓库
 * Author:huangshouhua
 * Date:2025-11-12
 */
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
const initialState: InfoItem[] = [];
const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setMenuSections: (state, action: PayloadAction<InfoItem[]>) => {
      state = action.payload;
    },
  },
});

export const { setMenuSections } = resumeSlice.actions;
export default resumeSlice.reducer;
