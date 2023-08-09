import { LexicalEditor } from "lexical";
import { FormEvent, useEffect, useState } from "react";
import { INSERT_SOCIAL_COMMAND } from "../../lib/editor/nodes/socialNode";
import { formHandler } from "../../lib/form";
import Modal from "../modal";

interface SocialModalProp {
  toggle: () => void,
  toggleDropDown: () => void,
  open: boolean,
  setMainModal: (v: boolean) => void,
  editor: LexicalEditor
}

const SocialModal = ({ toggle, editor, toggleDropDown, open, setMainModal }: SocialModalProp) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(open)
  }, [open]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const { url, code } = formHandler(e, ['type', 'url', 'code'])
    editor.dispatchCommand(INSERT_SOCIAL_COMMAND, code);
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
            <small className="font-0-8 text-muted">SOCIAL MEDIA PLATFORM</small>
            <select required name="type" className="mt-1 form-select">
              <option value="facebook">Facebook</option>
            </select>
          </div>
          <div className="mt-2">
            <small className="font-0-8 text-muted">URL</small>
            <input type="url" name='url' placeholder="https://" className="form-control mt-1" />
          </div>
          <div className="mt-2">
            <small className="font-0-8 text-muted">CODE</small>
            <input required name='code' placeholder={`<iframe width="560" height="315" src="https://www.youtube.com/embed/dNt1QR1ecuM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`} className="form-control mt-1" />
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

export default SocialModal;
