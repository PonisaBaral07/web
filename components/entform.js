'use client'
import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';


const Entform = ({value, setValue}) => {

    return <ReactQuill theme="snow" value={value} onChange={setValue} className=""/>;
}

export default Entform