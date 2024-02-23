import * as Yup from "yup";

export const MetroTrainSchema = Yup.object().shape({
    route:Yup.mixed().required(" Route Must be Required..!"),
    day:Yup.mixed().required(" Day must be Required..!"),
    source:Yup.mixed().required("Source enter end date"),
    destination: Yup.mixed().required("Destination In Time Must be Required..!"),
    via:Yup.mixed().required("Via Time Must be Required..!"),
    firsttrain:Yup.mixed().required("Firsttrain Time Must be Required..!"),
    lasttrain:Yup.mixed().required("Lasttrain Time Must be Required..!"),
    timing1:Yup.mixed().required("Timing1 Time Must be Required..!"),
    timing1frequency:Yup.mixed().required(" Timing1frequency Must be Required..!"),
    timing2:Yup.mixed().required(" Timing2 must be Required..!"),
    timing2frequency:Yup.mixed().required("Timing2frequency enter end date"),
    timing3: Yup.mixed().required("Timing3 In Time Must be Required..!"),
    timing3frequency:Yup.mixed().required("Timing3frequency Time Must be Required..!"),
  
});
