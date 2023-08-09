import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useCallback, useState } from "react";
import DropDown from "../../../components/dropDown";
import EmbedOptionDropDown from "../../../components/embed/dropDown";

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