import React from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addMenu } from "../../redux/actions/menu";

export default function AddMenu() {
    const dispatch = useDispatch()
    const menu_add = useSelector((state)=>state.menu_add)
    const navigate = useNavigate();
    const [photo, setPhoto] = useState();
    const [inputData, setInputData] = useState({
        title: "",
        ingredients: "",
        category_id: "1",
        photo_url: "",
    });

    const postData = (event) => {
      event.preventDefault()
      let bodyData = new FormData()
      bodyData.append("title", inputData.title)
      bodyData.append("ingredients", inputData.ingredients)
      bodyData.append("category_id", inputData.category_id)
      bodyData.append("photo", photo)
      console.log(bodyData)

      dispatch(addMenu(bodyData,navigate))
    };

    const onChange = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
        console.log("input", e.target.name, e.target.value);
        console.log(inputData);
    };
    const onChangePhoto = (e) => {
      setPhoto(e.target.files[0])
      e.target.files[0] && setInputData({...inputData,photo_url:URL.createObjectURL(e.target.files[0])})
      console.log(e.target.files[0])
    }

    return (
        <>
            <Navbar color="primary"></Navbar>
            <div className="container col-3">
                <h1>Add New Menu</h1>
                <form onSubmit={postData}>

                    {photo && <img src={inputData.photo_url} width={200} />}
                    <div className="custom-file">
                        <input
                            type="file"
                            className="custom-file-input"
                            id="validatedCustomFile"
                            onChange={onChangePhoto}
                            required
                        />
                        <label
                            className="custom-file-label"
                        >
                            Choose file...
                        </label>
                        <div className="invalid-feedback">
                            Example invalid custom file feedback
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Menu Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            placeholder="Your Menu Title"
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Category</label>
                        <select className="form-control">
                            <option value={1}>main course</option>
                            <option value={2}>appetizer</option>
                            <option value={3}>dessert</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Ingredients</label>
                        <textarea
                            type="text"
                            className="form-control"
                            id="ingredients"
                            placeholder="Ingredients"
                            name="ingredients"
                            onChange={onChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-4">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}
