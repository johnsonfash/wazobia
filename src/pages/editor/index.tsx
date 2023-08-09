import { TRANSFORMERS } from "@lexical/markdown";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import Navbar from "../../components/navbar";
import editorConfig from "../../lib/editor/config";
import MyAutoLinkPlugin from "../../lib/editor/plugins/autoLinkPlugin";
import CodeHighlightPlugin from "../../lib/editor/plugins/codeHighlightPlugin";
import EmbedPlugin from "../../lib/editor/plugins/embedPlugin";
import { ImagePlugin } from "../../lib/editor/plugins/imagePlugin";
import ListMaxIndentLevelPlugin from "../../lib/editor/plugins/listMaxIndentLevelPlugin";
import ToolbarPlugin from "../../lib/editor/plugins/toolbarPlugin";
import { VideoPlugin } from "../../lib/editor/plugins/videoPlugin";
import { SocialPlugin } from "../../lib/editor/plugins/socialPlugin";

export default function Editor() {

  return (
    <main>
      <Navbar />
      <div className="container py-4">
        <LexicalComposer initialConfig={editorConfig}>
          <div className="editor-container">
            <input type="text" placeholder="Add post title" className="border-0 bg-transparent py-2 px-3 fw-bold form-control mb-1 font-2" />
            <ToolbarPlugin />
            <div className="editor-inner">
              <RichTextPlugin
                contentEditable={<ContentEditable className="editor-input" />}
                placeholder={<div className="editor-placeholder">Add content...</div>}
                ErrorBoundary={LexicalErrorBoundary}
              />
              <EmbedPlugin />
              <VideoPlugin />
              <SocialPlugin />
              <ImagePlugin />
              <HistoryPlugin />
              <AutoFocusPlugin />
              <CodeHighlightPlugin />
              <ListPlugin />
              <LinkPlugin />
              <MyAutoLinkPlugin />
              <ListMaxIndentLevelPlugin maxDepth={7} />
              <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
            </div>
          </div>
        </LexicalComposer>
      </div>
    </main>
  );
}
