import { DecoratorNode, LexicalCommand, LexicalNode, NodeKey, createCommand } from "lexical";
import { ReactNode } from "react";

export class VideoNode extends DecoratorNode<ReactNode> implements LexicalNode {
  __src: string;

  static getType(): string {
    return 'iframe';
  }

  static clone(node: VideoNode): VideoNode {
    return new VideoNode(node.__src, node.__key);
  }

  constructor(src: string, key?: NodeKey) {
    super(key);
    this.__src = src;
  }

  createDOM(): HTMLElement {
    return document.createElement('div');
  }

  getSrc(): string {
    return this.__src;
  }

  updateDOM(): false {
    return false;
  }

  setURL(src: string): void {
    const writable = this.getWritable();
    writable.__src = src;
  }

  decorate(): ReactNode {
    return <iframe width="100%" height="315" src={this.__src} title='video player' className="editor-video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />;
  }
}

export function $createVideoNode(src: string): VideoNode {
  return new VideoNode(src);
}

export function $isVideoNode(node?: LexicalNode | null | undefined): node is VideoNode {
  return node instanceof VideoNode;
}

type CommandPayload = string;
export const INSERT_VIDEO_COMMAND: LexicalCommand<CommandPayload> =
  createCommand('INSERT_VIDEO_COMMAND');