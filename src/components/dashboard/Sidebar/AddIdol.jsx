import React, { useState } from "react";
import "./addIdol.css";
import axios from "axios";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    stock: "",
    thumbnail: { image: null },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      thumbnail: { image: e.target.files[0] },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("image", formData.thumbnail.image);

    try {
      const response = await axios.post("http://localhost:2000/addproduct", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if(response){
        console.log(response);
        console.log("Idol Added");
        alert("Idol Added Successful");
       
      }else{
        alert("Idol not added");
    }

      console.log("Image Uploaded:", response.data);

      const imageUrl = response.data.img_url;

      const productData = {
        title: formData.title,
        price: formData.price,
        stock: formData.stock,
        thumbnail: imageUrl, // URL received from Cloudinary
      };

      const result = await axios.post("http://localhost:2000/uploadproduct/idol", productData);
      console.log("Product Uploaded:", result.data);
      
    } catch (error) {
      alert("Idol not added");
      console.error("Error uploading image or product:", error);
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="stock">Stock</label>
        <input
          type="number"
          id="stock"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleFileChange}
          required
        />
      </div>

      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default FormComponent;
