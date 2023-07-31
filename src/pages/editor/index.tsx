import Theme from "../../lib/editor/theme";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";
import CodeHighlightPlugin from "../../lib/editor/plugins/codeHighlightPlugin";
import ListMaxIndentLevelPlugin from "../../lib/editor/plugins/listMaxIndentLevelPlugin";
import MyAutoLinkPlugin from "../../lib/editor/plugins/autoLinkPlugin";
import ToolbarPlugin from "../../lib/editor/plugins/toolbarPlugin";
import EmbedPlugin from "../../lib/editor/plugins/embedPlugin";
import { ImageNode, ImagePlugin } from "../../lib/editor/plugins/imagePlugin";
import Navbar from "../../components/navbar";

function Placeholder() {
  return <div className="editor-placeholder">Add content...</div>;
}

const editorConfig = {
  // The editor theme
  namespace: 'MyEditor',
  theme: Theme,
  // Handling of errors during update
  onError(error: any) {
    throw error;
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ImageNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode
  ]
};

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
                placeholder={<Placeholder />}
                ErrorBoundary={LexicalErrorBoundary}
              />
              <EmbedPlugin />
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
