import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dur9aanij', 
  api_key: '735344582644294', 
  api_secret: '46IyQ9oT0Ei0OhSfnF-fhqWmkNg' 
});
cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });

  export default cloudinary;