import { LexicalEditor } from "lexical";
import { useCallback, useEffect, useState } from "react";
import imageIcon from '../../assets/images/icons/image.png';
import shareIcon from '../../assets/images/icons/share.png';
import videoIcon from '../../assets/images/icons/video.png';
import ImageModal from "./imageModal";
import VideoModal from "./videoModal";
import SocialModal from "./socialModal";

interface EmbedOptionDropDownProp {
  editor: LexicalEditor;
  toggleDropDown: () => void;
  setShowEmbedOptions: React.Dispatch<React.SetStateAction<boolean>>
}

export default function EmbedOptionDropDown({
  editor,
  toggleDropDown,
  setShowEmbedOptions,
}: EmbedOptionDropDownProp) {

  const [pictureModal, setPictureModal] = useState(false);
  const [videoModal, setVideoModal] = useState(false);
  const [socialModal, setSocialModal] = useState(false);

  const toggleImageModal = useCallback(() => {
    setPictureModal(!pictureModal)
  }, [pictureModal]);

  const toggleVideoModal = useCallback(() => {
    setVideoModal(!videoModal)
  }, [videoModal]);

  const toggleSocialModal = useCallback(() => {
    setSocialModal(!socialModal)
  }, [socialModal]);

  useEffect(() => {
    editor.registerUpdateListener(() => {
      setShowEmbedOptions(false)
    })
  }, [editor, setShowEmbedOptions]);

  return (
    <div className="embed-dropdown dropdown py-1">
      <div className="px-3 py-2 text-muted">
        <small>EMBEDS</small>
      </div>
      <div>
        <div onClick={toggleImageModal} className="d-flex px-3 py-1 pointer align-items-start">
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
        <div onClick={toggleVideoModal} className="d-flex px-3 py-1 pointer align-items-start">
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
        <div onClick={toggleSocialModal} className="d-flex px-3 py-1 pointer align-items-start">
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

      <ImageModal toggleDropDown={toggleDropDown} toggle={toggleImageModal} open={pictureModal} editor={editor} setMainModal={setShowEmbedOptions} />
      <VideoModal toggleDropDown={toggleDropDown} toggle={toggleVideoModal} open={videoModal} editor={editor} setMainModal={setShowEmbedOptions} />
      <SocialModal toggleDropDown={toggleDropDown} toggle={toggleSocialModal} open={socialModal} editor={editor} setMainModal={setShowEmbedOptions} />
    </div>
  )
}