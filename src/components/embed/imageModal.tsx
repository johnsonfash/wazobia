import { LexicalEditor } from "lexical";
import { FormEvent, useEffect, useState } from "react";
import { INSERT_IMAGE_COMMAND } from "../../lib/editor/nodes/imageNode";
import { uploadFile } from "../../lib/fileUpload";
import Modal from "../modal";
import Spinner from "../spinner";


interface ImageModalProp {
  toggle: () => void,
  toggleDropDown: () => void,
  open: boolean,
  setMainModal: (v: boolean) => void,
  editor: LexicalEditor
}

const ImageModal = ({ toggle, editor, toggleDropDown, open, setMainModal }: ImageModalProp) => {
  const [loading, setLoading] = useState(false);
  const [imageName, setImageName] = useState<any>('');
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    setIsOpen(open)
  }, [open]);

  const toggleModal = () => { if (!loading) toggle() }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const file = (e.target as any).file.files[0]
    setLoading(true)
    const res = await uploadFile(file)
    setLoading(false)
    if (res.status && res.data?.url) {
      editor.dispatchCommand(INSERT_IMAGE_COMMAND, res.data?.url);
      setMainModal(false)
      toggleDropDown()
    } else {
      setError(res.message)
    }
  }

  return (
    <Modal toggle={toggleModal} open={isOpen}>
      <form onSubmit={handleSubmit} className="px-4 py-3">
        <div className="d-flex pb-2 justify-content-between align-items-center">
          <h6 className="my-0 fw-bold">Embed</h6>
          <button type='button' onClick={toggleModal} className="btn bg-white">✕</button>
        </div>
        <div>
          <p>Upload Image</p>
          <small className="font-0-8">FILE UPLOAD</small>
        </div>
        <div className="upload-area rounded-2 bg-light mt-2 d-flex justify-content-center align-items-center">
          <div>
            <p className="text-center">{imageName && <em><small>image:</small></em>} {imageName}</p>
            <label className="btn border-success bg-white font-0-8">
              Import Image from Device
              <input disabled={loading} required name='file' accept="image/*" onChange={(e) => setImageName((e.target as any)?.files[0]?.name)} type="file" className="opacity-0 max-w-0" />
            </label>
            <p className="text-center mt-1 text-danger">{error ?? ''}</p>
          </div>
        </div>
        <div className="mt-3">
          <button disabled={loading} type="submit" className="btn btn-success me-2">
            {loading && <Spinner />}Embed
          </button>
          <button disabled={loading} type='button' onClick={toggle} className="btn border border-2">Cancel</button>
        </div>
      </form>
    </Modal>
  );
};

export default ImageModal;
