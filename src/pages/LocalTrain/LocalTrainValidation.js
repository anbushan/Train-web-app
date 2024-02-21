import * as Yup from "yup";

export const LoaclTrainSchema = Yup.object().shape({
    trainNo:Yup.mixed().required(" TrainNo Must be Required..!"),
    trainName:Yup.mixed().required(" TrainName must be Required..!"),
    type:Yup.mixed().required("Type enter end date"),
    zone: Yup.mixed().required("Zone In Time Must be Required..!"),
    updatedOn:Yup.mixed().required("UpdatedOn Time Must be Required..!"),
    from:Yup.mixed().required("From Time Must be Required..!"),
    departure:Yup.mixed().required("Departure Time Must be Required..!"),
    to:Yup.mixed().required("To Time Must be Required..!"),
    arrival:Yup.mixed().required(" Arrival Must be Required..!"),
    duration:Yup.mixed().required(" Duration must be Required..!"),
    distance:Yup.mixed().required("Distance enter end date"),
    speed: Yup.mixed().required("Speed In Time Must be Required..!"),
    halts:Yup.mixed().required("Halts Time Must be Required..!"),
    sClasses:Yup.mixed().required("SClasses Time Must be Required..!"),
    sRunsOn:Yup.mixed().required("SRunsOn Time Must be Required..!"),
    trainID:Yup.mixed().required("TrainID Time Must be Required..!")
});
