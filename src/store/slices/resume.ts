/**
 * 简历仓库
 * Author:huangshouhua
 * Date:2025-11-12
 */
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    resume: null,
}
const resumeSlice = createSlice({
    name: 'resume',
    initialState,
    reducers: {
        setResume: (state, action: PayloadAction<any>) => {
            state.resume = action.payload;
        },
    },
})
export const { setResume } = resumeSlice.actions;
export default resumeSlice.reducer;