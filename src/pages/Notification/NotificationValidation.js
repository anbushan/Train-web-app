import * as Yup from "yup";

export const NotificationSchema = Yup.object().shape({
    tittle:Yup.mixed().required(" Title Must be Required..!"),
    subtittle:Yup.mixed().required(" Subtitle must be Required..!"),
    image:Yup.mixed().required(" Image must be Required..!"),
   
    
});
