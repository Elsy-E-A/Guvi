import { useEffect, useRef,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Formik, Field, Form } from 'formik';
function AuthEdit() {
     
  const [data, setData] = useState([]);
    const { index} = useParams();
   const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const[name,setName]=useState();
  const[birth,setBirth]=useState();
  const[biod,setBio]=useState();
  
     useEffect(() => {
    axios.get(`http://localhost:4000/author/${index}`)
      .then(function (response) {
       setData(data=>response.data)
       setName(name=>data.author);
       setName(birth=>data.dob);
       setName(biod=>data.bio);
       console.log(name);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  });

  if(loading) {
    return <div><h1>Loading...</h1></div>
  }

  if(error) {
    return <div>Error: {error.message}</div>
  }
  
    const updateFruitHandler = (values) => {
      var payload = {
      id:{index},
           
      author: values.bookName,
      dob:values.authName,
      bio: values.isbn,
             };
      axios.put(`http://localhost:4000/author/${index}`, payload).then((response) => {
          navigate("/");
     alert("User details are updated")
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
      bookName: name,
      authName: birth,
      isbn: biod,
      }}
      validationSchema={validationSchema}

    onSubmit={async (values) => {
      await new Promise((r) => setTimeout(r, 500));
      updateFruitHandler(values);
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
export default AuthEdit