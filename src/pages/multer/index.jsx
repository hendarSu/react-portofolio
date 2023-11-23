import 'react-dropzone-uploader/dist/styles.css'

import Dropzone from 'react-dropzone-uploader';
import { useState } from 'react';

export default function UploaderMulter() {

    const [urlImage, setUrlImage] = useState(null);

    const getUploadParams = () => {
        return { url: process.env.NEXT_PUBLIC_API_UPLOADER_MULTER }
    }

    const handleChangeStatus = ({ meta, xhr }, status) => {
        console.log(status, meta)

        if (status === 'done') {
            let response = JSON.parse(xhr.response);
            console.log("Ini Response:");
            console.log(response);
            setUrlImage(response.data.dir)
        }
    }

    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }

    return (
       <>
         <Dropzone
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}
            styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
            accept='image/*'
        />

        <p>Ini URL Image : {urlImage}</p>
       </>
    )
}
