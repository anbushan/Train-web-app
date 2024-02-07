import * as Yup from "yup";

export const StationSchema = Yup.object().shape({
    stationCode:Yup.mixed().required(" StationCode Must be Required..!"),
    stationName:Yup.mixed().required(" StationName must be Required..!"),
    city:Yup.mixed().required(" City must be Required..!"),
    state: Yup.mixed().required("State must be Required..!"),
    
});
