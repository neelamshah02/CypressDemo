import React from "react";
import { useForm } from "react-hook-form";
import "./style.css";

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    alert(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Cypress Demo</h1>
      <label>FirstName</label>
      <input
        name="firstName"
        ref={register({ required: true, maxLength: 10 })}
      />
      {errors.firstName && <p>FirstName is required</p>}
      <br />

      <label>LastName</label>
      <input
        name="lastName"
        ref={register({ required: true, maxLength: 10 })}
      />
      {errors.lastName && <p className="lastname">LastName is required</p>}
      <br />

      <label>Email</label>
      <input name="email" ref={register({ required: true, maxLength: 10 })} />
      {errors.email && <p id="emaild">Email is required</p>}
      <br />

      <label>Mobile</label>
      <input name="mobile" ref={register({ required: true, maxLength: 10 })} />
      {errors.mobile && <p>mobile is required</p>}
      <br />

      <label>Address Line 1</label>
      <input name="add1" ref={register({ required: true, maxLength: 10 })} />
      {errors.add1 && <p className="add1">Address Line 1 is required</p>}
      <br />

      <label>Address Line 2</label>
      <input name="add2" ref={register({ required: true, maxLength: 10 })} />
      {errors.add2 && <p className="add2"> Address Line 3 is required</p>}
      <br />

      <label>Address Line 3</label>
      <input name="add3" ref={register({ maxLength: 10 })} />
      <br />

      <label>PostCode</label>
      <input name="post" ref={register({ required: true, maxLength: 10 })} />
      {errors.post && <p>PostCode is required</p>}
      <br />

      <div style={checkStyle}>
        <input
          type="checkbox"
          id="checbox"
          name="citizen"
          ref={register({ required: true, maxLength: 10 })}
        />
        <label>are you Norwegian Citizen</label>
      </div>
      {errors.citizen && <p>this is required</p>}
      <br />
      
      <input type="submit" />
    </form>
  );
}
const checkStyle = {
  display: "-webkit-inline-box"
};
