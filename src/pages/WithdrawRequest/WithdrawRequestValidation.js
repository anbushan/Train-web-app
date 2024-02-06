import * as Yup from "yup";

export const WithdrawrequestSchema = Yup.object().shape({
    status:Yup.mixed().required(" status Must be Required..!"),
   
    
});
