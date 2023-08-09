import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { ListItemNode, ListNode } from "@lexical/list";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import Theme from "../../lib/editor/theme";
import { ImageNode } from "./nodes/imageNode";
import { VideoNode } from "./nodes/videoNode";
import { SocialNode } from "./nodes/socialNode";

const editorConfig = {
  // The editor theme
  namespace: 'WazobiaEditor',
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
    VideoNode,
    SocialNode,
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

export default editorConfig