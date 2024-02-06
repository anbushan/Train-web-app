import * as Yup from "yup";

export const UserSchema = Yup.object().shape({
    email:Yup.email().required(" Email No Must be Required..!"),
    password:Yup.password().required(" Password Name must be Required..!"),
    confirmPassword:Yup.password().required(" Confirm Password Name must be Required..!"),

  
  
    
});
