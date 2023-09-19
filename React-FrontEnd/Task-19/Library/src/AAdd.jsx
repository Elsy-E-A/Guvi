import React from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

function AAdd() {
  
    const navigate = useNavigate();
    const addFruitHandler = (values) => {
     console.log(values.bookName);
            var payload = {
         
       author: values.bookName,
       dob:values.authName,
       bio: values.isbn,
        
     };
     axios.post("http://localhost:4000/author", payload).then(() => {
       navigate("/author");
       alert("Author details are added");
           });
           
   };
   const validationSchema = Yup.object().shape({
    bookName: Yup.string()
        .required('Author Name is required'),
    authName: Yup.string()
        .required('DOB is required'),
    isbn: Yup.string()
        .required('Bio is required'),
    
});
 
   return (
     <>
       <legend>Add New Author</legend>
       <Formik
       initialValues={{
         bookName: '',
         authName: '',
         isbn: '',
         }}
         validationSchema={validationSchema}

       onSubmit={async (values) => {
         await new Promise((r) => setTimeout(r, 500));
         addFruitHandler(values);
       }}
     >
       <Form>
         <label htmlFor="bookName">Author Name</label>
         <Field id="bookName" name="bookName"  placeholder="Book Name" /><br></br><br></br>
 
         <label htmlFor="authName">Date of Birth</label>
         <Field id="authName" name="authName" placeholder="Author Name" /><br></br><br></br>
 
         <label htmlFor="isbn">Short Bio</label>
         <Field id="isbn" name="isbn"placeholder="ISBN Number" /><br></br><br></br>
 
         <button className="btn btn-primary" type="submit">Submit</button>
       </Form>
     </Formik>
   </>
   );
 }
 
export default AAdd