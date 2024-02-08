import * as Yup from "yup";

export const StationSchema = Yup.object().shape({
    stationCode:Yup.mixed().required(" StationCode Must be Required..!"),
    stationName:Yup.mixed().required(" StationName Must be Required..!"),
    city:Yup.mixed().required(" City Must be Required..!"),
    state: Yup.mixed().required("State Must be Required..!"),
    
});
