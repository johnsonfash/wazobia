import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $insertNodes } from "lexical";
import { useEffect } from "react";
import { INSERT_SOCIAL_COMMAND, $createSocialNode } from "../nodes/socialNode";

export function SocialPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const removeListener = editor.registerCommand(
      INSERT_SOCIAL_COMMAND,
      (payload) => {
        editor.update(() => {
          $insertNodes([$createSocialNode(payload)]);
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