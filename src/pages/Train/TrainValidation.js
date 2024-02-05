import * as Yup from "yup";

export const TrainSchema = Yup.object().shape({
    TrainNo:Yup.mixed().required(" Train No Must be Required..!"),
    TrainName:Yup.mixed().required(" Train Name must be Required..!"),
  
  
    
});
