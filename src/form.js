import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().email().required(),

    // phone number needs to match the regex expression
    phoneNumber: yup
      .string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Enter a valid phone number"
      ),
  
    firstName: yup.string().required(),
    lastName: yup.string().required(),
  
    // password is required with minimum length of 8
    password: yup.string().min(8).required(),
});

export default function Form() {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className="frm">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='frm-fld'><input {...register("firstName")} placeholder="firstName" /></div>
      <p>{errors.firstName?.message}</p>
        
      <div className='frm-fld'><input {...register("lastName")} placeholder="lastName"/></div>
      <p>{errors.lastName?.message}</p>

      <div className='frm-fld'><input {...register("email")} placeholder="email"/></div>
      <p>{errors.email?.message}</p>

      <div className='frm-fld'><input {...register("phoneNumber")} placeholder="phoneNumber"/></div>
      <p>{errors.phoneNumber?.message}</p>

      <div className='frm-fld'><input {...register("password")} placeholder="password"/></div>
      <p>{errors.password?.message}</p>
      
      <div className='frm-fld'><button type='submit'>submit</button></div>
    </form>
    </div>
  );
}