import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $insertNodes } from "lexical";
import { useEffect } from "react";
import { $createImageNode, INSERT_IMAGE_COMMAND } from "../nodes/imageNode";

export function ImagePlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Similar with command listener, which returns unlisten callback
    const removeListener = editor.registerCommand(
      INSERT_IMAGE_COMMAND,
      (payload) => {
        // Adding custom command that will be handled by this plugin
        editor.update(() => {
          $insertNodes([$createImageNode(payload)]);
        });
        return true;
      },
      0,
    );

    return () => {
      removeListener();
    };
  }, [editor]);

  return null;
}