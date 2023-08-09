import { LexicalEditor } from "lexical";
import { FormEvent, useEffect, useState } from "react";
import { INSERT_VIDEO_COMMAND } from "../../lib/editor/nodes/videoNode";
import { formHandler } from "../../lib/form";
import Modal from "../modal";

interface VideoModalProp {
  toggle: () => void,
  toggleDropDown: () => void,
  open: boolean,
  setMainModal: (v: boolean) => void,
  editor: LexicalEditor
}

const VideoModal = ({ toggle, editor, toggleDropDown, open, setMainModal }: VideoModalProp) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(open)
  }, [open]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const { url } = formHandler(e, ['type', 'url'])
    editor.dispatchCommand(INSERT_VIDEO_COMMAND, url);
    setMainModal(false)
    toggleDropDown()
  }

  return (
    <Modal toggle={toggle} open={isOpen}>
      <form onSubmit={handleSubmit} className="px-4 py-3">
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="my-0 fw-bold">Embed</h6>
          <button type='button' onClick={toggle} className="btn bg-white">✕</button>
        </div>
        <div className="rounded-2">
          <div>
            <small className="font-0-8 text-muted">VIDEO PROVIDER</small>
            <select required name="type" className="mt-1 form-select">
              <option value="youtube">Youtube</option>
            </select>
          </div>
          <div className="mt-2">
            <small className="font-0-8 text-muted">URL</small>
            <input required type="url" name='url' placeholder="https://" className="form-control mt-1" />
          </div>
        </div>
        <div className="mt-3">
          <button type="submit" className="btn btn-success me-2">
            Embed
          </button>
          <button type='button' onClick={toggle} className="btn border border-2">Cancel</button>
        </div>
      </form>
    </Modal>
  );
};

export default VideoModal;
