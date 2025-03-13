import { AddPhotoAlternate } from '@mui/icons-material'
import { Button, CircularProgress, Grid2, IconButton, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { uploadImageToCloudinary } from '../util/UploadToCloudinary';

const initialValues = {
  name: "",
  description: "",
  cuisineType: "",
  streetAddress: "",
  city: "",
  stateProvince: "",
  postalCode:"",
  country:"",
  email:"",
  mobile:"",
  X: "",
  instagram:"",
  linkedIn:"",
  facebook:"",
  openingHours:"",
  closingHours:"",
  images:[],
};
const CreateRestaurantForm = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const formik=useFormik({
    initialValues,
    onSubmit: (values) =>{
      const data={
        name:values.name,
        description:values.description,
        cuisineType:values.cuisineType,
        address:{
          streetAddress:values.streetAddress,
          city:values.city,
          stateProvince:values.stateProvince,
          postalCode:values.postalCode,
          country:values.country
        },
        contactInformation:{
          email:values.email,
          mobile:values.mobile,
          X:values.X,
          instagram:values.instagram
        },
        openingHours:values.openingHours,
        images:values.images,      
      };
      console.log("data ---",data)
    },
  });
  const handleImageChange = async(e) => {
    const file=e.target.files[0];
    setUploadImage(true)
    const image = await uploadImageToCloudinary(file)
    console.log("image ---",image)
    formik.setFieldValue("images",[...formik.values.images,image])
    setUploadImage(false)
  };
  const handleRemoveImage=(index) => {
    const updatedImages = [...formik.values.images]
    updatedImages.splice(index,1);
    formik.setFieldValue("images",updatedImages)
  };
  return (
    <div className="py-20 px-20 lg:flex itmes-center justify-center min-h-screen">
     <div className="lg:max-w-4xl">
     <h1 className="font-bold text-2xl text-center py-2">
        Add New Restaurant
      </h1>
      <form onSubmit={formik.handleSubmit} className="spy-5">
        <Grid2 container spacing={5}>
          <Grid2 className="flex flex-wrap gap-3" item xs={12} lg={6}>
              <input
              accept='image/*'
              id='fileinput'
              style={{display:"none"}}
              onChange={handleImageChange}
              type='file' />

              <label className='relative' htmlFor="fileInput">
              <span 
                className='w-24 h-24 cursor-pointer flex items-center justify-center 
              p-3 bprder rounded-md border-gray-600 '>
                <AddPhotoAlternate className='text-white' />

              </span>
              {
                uploadImage && <div className="absolute top-0 bottom-0 right-0 left-0 w-24 h-24 flex items-center justify-center">
                  <CircularProgress />
                </div>
              }
            </label>
            <div
            className="flex flex-wrap gap-2">
              {(formik.values.images).map((image,index)=>
              <div className="relative" key={index}>
                <img className="w-24 h-24 object-cover"
                key={index}
                  src={image}
                 alt="" />
                 <IconButton 
                 size="small"
                 sx={{position:"absolute",top:0,right:0, outline:"none"}}
                 onClick={()=>handleRemoveImage(index)}>
                  <CloseIcon sx={{fontSize:"1rem"}}/>
                 </IconButton>

              </div>)}

            </div>

          </Grid2>
          <Grid2 item xs={12}>
            <TextField fullWidth
            label="Name"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            >

            </TextField>

          </Grid2>
          <Grid2 item xs={12}>
            <TextField fullWidth
            label="description"
            id="description"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
            >

            </TextField>

          </Grid2>
          <Grid2 item xs={12}>
            <TextField fullWidth
            label="Cuisine Type"
            id="cuisineType"
            name="cuisineType"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.cuisineType}
            >

            </TextField>

          </Grid2>
          

          <Grid2 item xs={12}>
            <TextField fullWidth
            label="Street Address"
            id="streetAddress"
            name="streetAddress"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.streetAddress}
            >

            </TextField>

          </Grid2>

          <Grid2 item xs={12} lg="4">
            <TextField fullWidth
            label="City"
            id="city"
            name="city"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.city}
            >

            </TextField>

          </Grid2>


          <Grid2 item xs={12}>
            <TextField fullWidth
            label="State Province"
            id="stateProvince"
            name="stateProvince"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.stateProvince}
            >

            </TextField>

          </Grid2>
          <Grid2 item xs={12} lg="4">
            <TextField fullWidth
            label="Postal Code"
            id="postalCode"
            name="postalCode"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.postalCode}
            >

            </TextField>

          </Grid2>

          <Grid2 item xs={12} lg="4">
            <TextField fullWidth
            label="Country"
            id="country"
            name="country"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.country}
            >

            </TextField>

          </Grid2>

          <Grid2 item xs={12} lg="6">
            <TextField fullWidth
            label="Email"
            id="email"
            name="email"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.email}
            >

            </TextField>

          </Grid2>

          <Grid2 item xs={12} lg="6">
            <TextField fullWidth
            label="Phone Number"
            id="mobile"
            name="mobile"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.mobile}
            >

            </TextField>

          </Grid2>

          <Grid2 item xs={12}>
            <TextField fullWidth
            label="Opening Hours"
            id="openingHours"
            name="openingHours"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.openingHours}
            >

            </TextField>

          </Grid2>

          <Grid2 item xs={12}>
            <TextField fullWidth
            label="Closing Hours"
            id="closingHours"
            name="closingHours"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.closingHours}
            >

            </TextField>

          </Grid2>

          <Grid2 item xs={6}>
            <TextField fullWidth
            label="X(Twitter)"
            id="X"
            name="X"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.X}
            >

            </TextField>

          </Grid2>

          <Grid2 item xs={12} lg={6}>
            <TextField fullWidth
            label="Instagram"
            id="instagram"
            name="instagram"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.instagram}
            >

            </TextField>

          </Grid2>
        </Grid2>
        <Button variant="contained" color="primary" type="submit">Create Restaurent</Button>
      </form>
     </div>
    </div>
  )
}

export default CreateRestaurantForm;
