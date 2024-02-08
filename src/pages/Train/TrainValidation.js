import * as Yup from "yup";

export const TrainSchema = Yup.object().shape({
    TrainNo: Yup.string()
        .required("Train No Must be Required..!")
        .matches(/^\d{5}$/, "Train No must be exactly 5 numbers"),
    TrainName: Yup.string().required("Train Name Must be Required..!"),
});
