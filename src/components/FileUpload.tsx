import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import { api } from "../lib/api";
import { useState } from "react";


const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

interface Props {
  type: "image" | "pdf";
}

export const FileUpload: React.FC<Props> = ({ type }) => {
  const [title, setTitle] = useState<string>("");
  const [file, setFile] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("titulo", title);
    formData.append("file", file);

    if (type === "image") {
      await api.sendImage(formData);
    }

    if (type === "pdf") {
      await api.sendPdf(formData);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleFileChange = (e: any) => {
    //setFile(e.target?.files[0]);

    setFile(e.target.files[0]);
  };

  return (
    <>
      <form className="flex flex-col " onSubmit={(e) => handleSubmit(e)}>
        <h2> {type.toUpperCase()} </h2>

        <TextField
          onChange={handleTitleChange}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          name="titulo"
          required
          className=""
        />
        <Button
          component="label"
          variant="contained"
          className=""
          startIcon={<CloudUploadIcon />}
        >
          Upload file
          <VisuallyHiddenInput
            required
            accept={type === "image" ? "image/*" : "application/pdf"}
            name="path"
            type="file"
            onChange={handleFileChange}
          />
        </Button>

        <Button type="submit" variant="contained">
          Contained
        </Button>
      </form>
    </>
  );
};
