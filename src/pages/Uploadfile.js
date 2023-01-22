import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
 
const FormValidation = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      validate={values => {
        const errors = {};

        if (!values.name) {
          errors.name = 'Name is required';
        }

        if (!values.email) {
          errors.email = 'Email is required';
        } else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) { // regex for email validation 
          errors.email = 'Invalid email address';   // if the email does not match the regex pattern   // then throw an error message 
        }

        return errors;   // return the errors object with all the error messages 

      }}

      onSubmit={(values, actions) => {   // when the form is submitted call this function 

        const data = new FormData();   // create a new form data object to store all the form values and files in it 

        data.append('name', values.name);   // append all the form values to the form data object 
        data.append('email', values.email);   // append all the form values to the form data object 

        if (file) {    // check if there is a file selected or not 

          data.append('file', file);    // append the file to the form data object if there is one selected  

        }
        axios({// make an axios request to send all this data to your server endpoint

          method: 'POST',     // specify that you are making a POST request    

          url: '/api/formValidation',    // specify your server endpoint here    

          headers: {'Content-Type': 'multipart/form-data'},    // set your content type header here    

          data: data    // pass in your formData object as your request body here    

         }).then((response) => { 
			 console.log(response);
			 actions.setSubmitting(false);
			 alert('Form Submitted Successfully!');})
			 .catch((error) => {
			 console.log(error);
			 actions.setSubmitting(false);
			 alert('Something went wrong!');
			});
		}}>
		{({ isSubmitting }) => (
			<Form>
				<Field type="text" name="name" placeholder="Name" />
				<Field type="text" name="email" placeholder="Email" />
				<input type="file" onChange={handleFileChange} />
				<button type="submit" disabled={isSubmitting}>Submit</button>
			</Form>)}
		</Formik> ); }; 
		
export default FormValidation;


// import React, { useState } from 'react';
// import { Formik, Form, Field } from 'formik';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// // import { addData } from '../redux/actions/dataActions';
//  const addData =()=>{
// 	return 2
//  }
// const FormValidation = () => {

//   const [file, setFile] = useState(null);

//   const dispatch = useDispatch();

//   return (
//     <Formik
//       initialValues={{ name: '', email: '' }}
//       validate={values => {
//         const errors = {};

//         if (!values.name) {
//           errors.name = 'Name is required';
//         }

//         if (!values.email) {
//           errors.email = 'Email is required';
//         } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//         ) {
//           errors.email = 'Invalid email address';
//         }

//         return errors;   //returns an object of key value pairs of the field and the error message for that field.  If there are no errors then an empty object is returned.   This will be used by formik to display the error messages on the form fields.   The keys in this object must match the names of the fields in your form.   In this case it's name and email.  You can add more fields as needed for your form validation needs.  For example if you had a password field you would add a key for password and an error message for when it's not valid or not present in the form submission.   The same goes for any other field you want to validate on your form submission such as a file input or a checkbox input etc...   Just make sure to add a key with an appropriate error message for each field you want to validate on your form submission and return that object at the end of this function so that Formik can handle displaying those error messages on your form fields when necessary!  Hope this helps! :)  Good luck! :)   

//       }}

//       onSubmit={(values, actions) => { //this function will be called when the user submits their data after all validation checks have passed successfully! :)   Here we can send our data to our server using axios or whatever other method we choose! :)   

//         const dataToSend = new FormData(); //create a new FormData object which will hold all our data that we want to send to our server! :)   

//         Object.keys(values).forEach((key) => { //loop through all our values in our values object and add them one by one to our FormData object so we can send them off to our server! :)   

//             dataToSend.append(key, values[key]); //add each value one by one to our FormData object using its key as its name so we know what each value is when it gets sent off to our server! :)
//         });
	  
//         dataToSend.append('file', file); //add our file input value (if present) to our FormData object so we can send it off with all of our other values when we make our request! :)   

//         axios({ //make an axios request with all of our data inside of it so we can send it off to our server! :)   

//             method: "POST", //specify which type of request we are making (in this case it's a POST request since we are sending data!)    

//             url: "YOUR_URL_HERE", //specify which URL we want to make this request too (this should be wherever your server is located!)    

//             data: dataToSend, //include all of the data inside of this request so it gets sent off with it when making the request!    

//             headers: {"Content-Type": "multipart/form-data"} //specify what type of content is being sent in this request (in this case it's multipart/form-data since we are sending both text and files!)    

//          })
// 		 .then((response) => { //if everything went well then do something with the response here such as dispatching an action or something else depending on what you need here! :)    

//              dispatch(addData(response))
// 			})
// 		}}/>)}

// 		export default FormValidation