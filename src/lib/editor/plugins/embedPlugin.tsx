import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { LexicalEditor } from "lexical";
import { useCallback, useEffect, useState } from "react";
import imageIcon from '../../../assets/images/icons/image.png';
import shareIcon from '../../../assets/images/icons/share.png';
import videoIcon from '../../../assets/images/icons/video.png';
import DropDown from "../../../components/dropDown";
import Modal from "../../../components/modal";
import { INSERT_IMAGE_COMMAND } from "./imagePlugin";

interface EmbedOptionDropDownProp {
  editor: LexicalEditor;
  toggleDropDown: () => void;
  setShowEmbedOptions: React.Dispatch<React.SetStateAction<boolean>>
}

function EmbedOptionDropDown({
  editor,
  toggleDropDown,
  setShowEmbedOptions,
}: EmbedOptionDropDownProp) {

  const [image, setImage] = useState<any>({ name: '' });
  const [embedPictureModal, setEmbedPictureModal] = useState(false);

  const toggle = useCallback(() => {
    setEmbedPictureModal(!embedPictureModal)
  }, [embedPictureModal]);

  useEffect(() => {
    editor.registerUpdateListener(() => {
      setShowEmbedOptions(false)
    })
  }, [editor, setShowEmbedOptions]);

  const readURL = (file: any): Promise<string> => {
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = (e: any) => res(e.target.result);
      reader.onerror = e => rej(e);
      reader.readAsDataURL(file);
    });
  };

  const handleEmbed = async () => {
    const url = await readURL(image)
    editor.dispatchCommand(INSERT_IMAGE_COMMAND, url);
    setShowEmbedOptions(false)
    toggleDropDown()
  }

  return (
    <div className="embed-dropdown dropdown py-1">
      <div className="px-3 py-2 text-muted">
        <small>EMBEDS</small>
      </div>
      <div>
        <div onClick={toggle} className="d-flex px-3 py-1 pointer align-items-start">
          <div className="me-2 max-w-1-5"><img src={imageIcon} alt="" /></div>
          <div>
            <p className="my-0 fw-bold font-0-9">
              Picture
            </p>
            <small className="font-0-6 text-muted">
              jpeg, png
            </small>
          </div>
        </div>
        <div className="d-flex px-3 py-1 pointer align-items-start">
          <div className="me-2 max-w-1-5"><img src={videoIcon} alt="" /></div>
          <div>
            <p className="my-0 fw-bold font-0-9">
              Video
            </p>
            <small className="font-0-6 text-muted">
              jW player, Youtube, Vimeo
            </small>
          </div>
        </div>
        <div className="d-flex px-3 py-1 pointer align-items-start">
          <div className="me-2 max-w-1-5"><img src={shareIcon} alt="" /></div>
          <div>
            <p className="my-0 fw-bold font-0-9">
              Social
            </p>
            <small className="font-0-6 text-muted">
              Instagram, Twitter, Tiktok, Snapchat, Facebook
            </small>
          </div>
        </div>
      </div>
      <Modal toggle={toggle} open={embedPictureModal}>
        <div className="px-4 py-3">
          <div className="d-flex pb-2 justify-content-between align-items-center">
            <h6 className="my-0 fw-bold">Embed</h6>
            <button onClick={toggle} className="btn bg-white">✕</button>
          </div>
          <div>
            <p>Upload Image</p>
            <small className="font-0-8">FILE UPLOAD</small>
          </div>
          <div className="upload-area rounded-2 bg-light mt-2 d-flex justify-content-center align-items-center">
            <div>
              <p className="text-center">{image?.name && <em><small>image:</small></em>} {image?.name}</p>
              <label className="btn border-success bg-white font-0-8">
                Import Image from Device
                <input accept="image/*" onChange={(e) => setImage((e.target as any).files[0])} type="file" className="d-none" />
              </label>
            </div>
          </div>
          <div className="mt-3">
            <button onClick={handleEmbed} className="btn btn-success me-2">Embed</button>
            <button onClick={toggle} className="btn border border-2">Cancel</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
export default function EmbedPlugin() {
  const [editor] = useLexicalComposerContext();
  const [showEmbedOptions, setShowEmbedOptions] = useState(false);
  const toggle = useCallback(() => {
    setShowEmbedOptions(!showEmbedOptions)
  }, [showEmbedOptions]);

  return (
    <DropDown
      open={showEmbedOptions}
      className="embed"
      toggleElem={<button className="embed-button" onClick={toggle}>＋</button>}
    >
      <EmbedOptionDropDown
        editor={editor}
        toggleDropDown={toggle}
        setShowEmbedOptions={setShowEmbedOptions}
      />
    </DropDown>
  )
}