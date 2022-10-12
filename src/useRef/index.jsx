import { useRef } from "react";
import { PrimaryButton } from "../Button";
import "./style.css";

export const UploadFile = () => {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.click();
  }

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded)
  }

  return (
    <>
      <h2 className="header">Use Ref Example</h2>
      <PrimaryButton onClick={handleClick}>Upload a file</PrimaryButton>
      <input 
        type="file"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={handleChange}
      />
    </>
  )
}