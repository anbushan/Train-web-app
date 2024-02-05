import * as Yup from "yup";

export const StationSchema = Yup.object().shape({
    stationCode:Yup.mixed().required(" stationCode Must be Required..!"),
    stationName:Yup.mixed().required(" stationName must be Required..!"),
    city:Yup.mixed().required(" city must be Required..!"),
    state: Yup.mixed().required("state must be Required..!"),
    
});
