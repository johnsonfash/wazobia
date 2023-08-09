import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $insertNodes } from "lexical";
import { useEffect } from "react";
import { $createVideoNode, INSERT_VIDEO_COMMAND } from "../nodes/videoNode";

export function VideoPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const removeListener = editor.registerCommand(
      INSERT_VIDEO_COMMAND,
      (payload) => {
        editor.update(() => {
          $insertNodes([$createVideoNode(payload)]);
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