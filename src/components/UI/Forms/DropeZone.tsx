import { useDropzone } from 'react-dropzone';

export function DropeZone() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file, ind) => (
    <li key={ind} className='file_item'>
      {file.name} - {file.size} bytes
    </li>
  ));

  return (
    <div {...getRootProps({ className: 'dropzone' })}>
      <input {...getInputProps()} />
      {files.length === 0
        ? <p>Drag 'n' drop some files here, or click to select files</p>
        : (
          <aside>
            <h4 className='files'>Files</h4>
            <ul className='file_list'>{files}</ul>
          </aside>
        )}
    </div>
  );
}