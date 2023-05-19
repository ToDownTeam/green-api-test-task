import * as YUP from "yup";

export const authValidateSchema = YUP.object({
    idInstance: YUP.number().min(8, "Phone must be 9 characters or less.").required("Id instance number is required"),
    idTokenInstance: YUP.string().required("Token Instance is Required"),


});
