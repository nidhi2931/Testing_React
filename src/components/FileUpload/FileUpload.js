import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        setFiles([...e.target.files]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();

        if (files.length === 0) {
            alert('Please select at least one file.');
            return;
        }

        const formData = new FormData();
        files.forEach((file) => {
            formData.append("files", file);
        });

        setLoading(true);

        try {
            const response = await axios.post('http://127.0.0.1:8000/test1/documents/', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            alert('Files uploaded successfully.');
            console.log(response.data);
            setFiles([]); // Reset file input
        } catch(error) {
            console.error("Error uploading files", error);
            if (error.response) {
                alert(`Failed to upload files. Server responded with: ${error.response.status}`);
            } else {
                alert("Failed to upload files. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ margin: "50px auto", textAlign: "center" }}>
            <h2>Upload Multiple Files</h2>
            <form onSubmit={handleUpload}>
                <input
                    type="file"
                    multiple
                    accept=".doc,.docx,.pdf"
                    onChange={handleFileChange}
                />
                <br />
                <button type="submit" style={{ marginTop: "20px" }} disabled={loading}>
                    {loading ? 'Uploading...' : 'Upload'}
                </button>
            </form>
        </div>
    );
};

export default FileUpload;
