import React from 'react';
import {useDropzone} from 'react-dropzone';

export function DropeZone(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path} className='file_item'>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4 className='files'>Files</h4>
        <ul className='file_list'>{files}</ul>
      </aside>
    </section>
  );
}