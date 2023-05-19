import * as YUP from "yup";

export const createChatSchema = YUP.object({
  phone: YUP.number().min(8, "Phone must be 9 characters or less.").required("Phone number is required"),
});
