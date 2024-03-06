import * as Yup from "yup";

export const TransactionHistorySchema = Yup.object().shape({
    phoneNumber:Yup.mixed().required(" Phone Number Must be Required..!"),
    upiId:Yup.mixed().required(" UpiId Must be Required..!"),
    modeOfPayment:Yup.mixed().required(" Mode Of Payment Must be Required..!"),
    amount:Yup.mixed().required(" Amount Must be Required..!"),
    transactionId:Yup.mixed().required(" Transaction Id Must be Required..!"),
    image:Yup.mixed().required(" Image Must be Required..!"),
   
    
});
