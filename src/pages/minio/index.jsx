import 'react-dropzone-uploader/dist/styles.css'

import Dropzone from 'react-dropzone-uploader';

export default function UploaderMinio() {
    const getUploadParams = () => {
        return { url: process.env.NEXT_PUBLIC_API_UPLOADER_MINIO }
    }

    const handleChangeStatus = ({ meta }, status) => {
        console.log(status, meta)
    }

    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }

    return (
        <Dropzone
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}
            styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
            accept='image/*'
        />
    )
}
