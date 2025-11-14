export default {
  getResume: {
    url: "/resume/get",
    method: "get",
  },
  createResume: {
    url: "/resume/create",
    method: "post",
  },
  getResumeById: {
    url: "/resume/get/:id",
    method: "get",
  },
  updateResume: {
    url: "/resume/update/:id",
    method: "put",
  },
};
