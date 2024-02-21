import * as Yup from "yup";

export const MetroTrainSchema = Yup.object().shape({
    route:Yup.mixed().required(" route Must be Required..!"),
    day:Yup.mixed().required(" day must be Required..!"),
    source:Yup.mixed().required("source enter end date"),
    destination: Yup.mixed().required("destination In Time Must be Required..!"),
    via:Yup.mixed().required("via Time Must be Required..!"),
    firsttrain:Yup.mixed().required("firsttrain Time Must be Required..!"),
    lasttrain:Yup.mixed().required("lasttrain Time Must be Required..!"),
    timing1:Yup.mixed().required("timing1 Time Must be Required..!"),
    timing1frequency:Yup.mixed().required(" timing1frequency Must be Required..!"),
    timing2:Yup.mixed().required(" timing2 must be Required..!"),
    timing2frequency:Yup.mixed().required("timing2frequency enter end date"),
    timing3: Yup.mixed().required("timing3 In Time Must be Required..!"),
    timing3frequency:Yup.mixed().required("timing3frequency Time Must be Required..!"),
  
});
