import axios from 'axios';
import React, { useState } from 'react'
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

function Add() {
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("")
    const [content, setContent] = useState("")
    const [file, setFile] = useState("")


    const createPost = async (e) => {
        e.preventDefault();
        var formData = new FormData();
        formData.append('title', title);
        formData.append('summary', summary);
        formData.append('file', file);
        formData.append('content', content);

       await axios({
            method: "post",
            url: "http://localhost:5000/post",
            data: formData,
        }
        )
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (err) {
                //handle error
                console.log(err);
            });
       

    }

    return (
        <>
            <form onSubmit={createPost}>
                <input type='title' placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <input type='summary' placeholder='Summary' value={summary} onChange={(e) => setSummary(e.target.value)}></input>
                <input type='file' value={file} onChange={(e) => setFile(e.target.value)}></input>
                <ReactQuill value={content} onChange={newValue => setContent(newValue)} />
                <button type='submit' style={{ marginTop: "5px" }}>Create Post</button>
            </form>
        </>
    )
}

export default Add