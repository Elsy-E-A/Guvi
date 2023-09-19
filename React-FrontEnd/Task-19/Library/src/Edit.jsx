import { useEffect, useRef,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Formik ,Field} from "formik";
function Edit() {
  const [data, setData] = useState([]);

  const { index} = useParams();
 console.log(index);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:4000/author/${index}`)
      .then(function (response) {
       setData(data=>response.data)
      console.log(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  });

   const updateFruitHandler = (values) => {
    console.log(values.bookName);
           var payload = {
        
      title: values.bookName,
      author:values.authName,
      ISBN: values.isbn,
      publication: values.pub,
      
    };
    axios.put(`http://localhost:4000/user/${index}`, payload).then((response) => {
        navigate("/");
   alert("User details are updated")
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
    <>      <legend>Update Book</legend>
    <Formik

       initialValues={{
        bookName: data.title,
        authName: data.author,
        isbn: data.ISBN,
        pub: data.publication,
      }}
      validationSchema={validationSchema}

      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        updateFruitHandler(values);
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
export default Edit;