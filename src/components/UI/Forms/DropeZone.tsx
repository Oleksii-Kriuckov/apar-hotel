import { useDropzone } from 'react-dropzone';

export function DropeZone(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path} className='file_item'>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    // <section className="drop_container"></section>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        {files.length === 0
          ? <p>Перетягніть сюди файли або натисність, щоб вибрати їх</p>
          : (
            <aside>
              <h4 className='files'>Файли</h4>
              <ul className='file_list'>{files}</ul>
            </aside>
          )}
      </div>

    
  );
}