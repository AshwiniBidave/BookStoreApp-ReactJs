import React from "react";
import { useState } from "react"; 
import { useHistory } from "react-router-dom";
import BookService from '../../Service/BookService';
import booklogo from "../../assets/booklogo.png";
import Button from '@mui/material/Button';
import "./BookDetailsForm.css";

export default function BookDetailsForm(){
    let [bookDetails, setBookDetails] = useState({
        bookName: "",
        authorName: "",
        coverImage: "",
        price: "",
        quantity: ""
    });
    let history=useHistory();
    const onNameChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setBookDetails({ ...bookDetails, [name]: value });
        console.log(bookDetails);
    };

    const addBook = (event) => {
        event.preventDefault();
        let bookData = {
            bookName: bookDetails.bookName,
            authorName: bookDetails.authorName,
            coverImage: bookDetails.coverImage,
            price: bookDetails.price,
            quantity: bookDetails.quantity
        };
        console.log("from add book method")
        console.log(bookData)

        let token = localStorage.getItem("token");
        console.log(token);

        BookService.addBook(bookData).then((response) => {
            console.log("Added" + response)
            alert("Book added successfully...");
            history.push({
                pathname: "/dashboard",
            });
        }).catch((response) => {
            console.log(response)
            alert(response.response.data.data);
        });

    };

    return(
<div>
<header className="header">
                <div className="logo-content">
                    <img
                        src={booklogo}
                        alt="logo-content"
                        className="logo-content-img"
                        width=""
                    />
                    <div>
                        <span className="text">BookStore</span>
                    </div>
                </div>
</header>
<div className="form-content">
    <form className="form" action="#" onSubmit={addBook}>
        <div className="form-head">
            Add Book
        </div>
        <div className="row-content">
            <label htmlFor="name" className="label text">Book Name</label>
            <input type="text" className="input" id="bookName" name="bookName" value={bookDetails.bookName}
                placeholder="Your first name.." required onChange={onNameChange} />
            <error-output className="text-error" htmlFor="Book Name "></error-output>
        </div>
        <div className="row-content">
            <label htmlFor="name" className="label text">Author Name</label>
            <input type="text" className="input" id="authorName" name="authorName" value={bookDetails.authorName}
                placeholder="Your last name.." required onChange={onNameChange} />
            <error-output className="text-error" htmlFor=" authorName"></error-output>
        </div>

        <div className="row-content">
            <label htmlFor="name" className="label text">Cover Image</label>
            <input type="text" className="input" id="coverImage" name="coverImage" value={bookDetails.coverImage}
                placeholder="Cover Image...." required onChange={onNameChange} />
            <error-output className="text-error" htmlFor="coverImage"></error-output>
        </div>
        <div className="row-content">
        <label className="label text" htmlFor="address">Price</label>
            <input type="text" className="input" name="price" id="price" rows="4" placeholder="Enter Price"
              required onChange={onNameChange} value={bookDetails.price} ></input>
        </div>
        <div className="row-content">
        <label className="label text" htmlFor="address">Quantity</label>
            <input type="text" className="input" name="quantity" id="quantity" rows="4" placeholder="Enter Quantity"
              required onChange={onNameChange} value={bookDetails.quantity} ></input>
        </div>
        {/* BUTTONS */}
        <div className="submit-reset">
                    <div className="buttonParent">
                            <Button variant="contained" size="large" type="submit" className="button submitButton" id="submitButton" onClick={addBook} >Submit</Button>
                    </div>
        
        </div>
        </form>
        </div>
        
          <div className="footer">
                <p>Copyright © 2020, Bookstore Private Limited. All Rights Reserved</p>
            </div>
       </div>
   )     
}