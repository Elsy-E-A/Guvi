import { useRef ,useEffect,useState} from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup'

function Add() {
 
  const navigate = useNavigate();
   const addFruitHandler = (values) => {
    console.log(values.bookName);
           var payload = {
        
      title: values.bookName,
      author:values.authName,
      ISBN: values.isbn,
      publication: values.pub,
      
    };
    axios.post("http://localhost:4000/user", payload).then(() => {
      navigate("/");
      alert("Book details are added");
          });
          
  };
  const validationSchema = Yup.object().shape({
    bookName: Yup.string()
        .required('Title is required'),
    authName: Yup.string()
        .required('Author Name is required'),
    isbn: Yup.string()
        .required('ISBN Number is required'),
    
        pub: Yup.string()
        .required('Publication Date is required'),
});


  return (
    <>
      <legend>Add New Book</legend>
      <Formik
      initialValues={{
        bookName: '',
        authName: '',
        isbn: '',
        pub: '',
      }}
      validationSchema={validationSchema}

      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        addFruitHandler(values);
      }}
    >
      <Form>
        <label htmlFor="bookName">Book Name</label>
        <Field id="bookName" name="bookName"  placeholder="Book Name" /><br></br><br></br>

        <label htmlFor="authName">Author Name</label>
        <Field id="authName" name="authName" placeholder="Author Name" /><br></br><br></br>

        <label htmlFor="isbn">ISBN Number</label>
        <Field id="isbn" name="isbn"placeholder="ISBN Number" /><br></br><br></br>

        <label htmlFor="pub">Publication Date</label>
        <Field id="pub" name="pub"placeholder="Publication Date" /><br></br><br></br>
       
        <button className="btn btn-primary" type="submit">Submit</button>
      </Form>
    </Formik>
  </>
  );
}

export default Add