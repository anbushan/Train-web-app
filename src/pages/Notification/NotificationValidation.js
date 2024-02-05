import * as Yup from "yup";

export const NotificationSchema = Yup.object().shape({
    tittle:Yup.mixed().required(" Tittle Must be Required..!"),
    subtittle:Yup.mixed().required(" Subtittle must be Required..!"),
    image:Yup.mixed().required(" Image must be Required..!"),
   
    
});
