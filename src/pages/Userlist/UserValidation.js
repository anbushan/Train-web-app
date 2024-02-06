import * as Yup from 'yup';

const UserListSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  age: Yup.number().integer().min(18, 'Must be at least 18 years old').required('Age is required'),
  // Define other fields and their validation rules here
});

export default UserListSchema;
