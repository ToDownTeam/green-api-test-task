import * as YUP from "yup";

export const createChatSchema = YUP.object({
  phone: YUP.number().required("Phone number is required"),
});
