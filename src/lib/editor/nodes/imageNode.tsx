import { DecoratorNode, LexicalCommand, LexicalNode, NodeKey, createCommand } from "lexical";
import { ReactNode } from "react";

export class ImageNode extends DecoratorNode<ReactNode> implements LexicalNode {
  __src: string;

  static getType(): string {
    return 'image';
  }

  static clone(node: ImageNode): ImageNode {
    return new ImageNode(node.__src, node.__key);
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
    return <img src={this.__src} alt="" className="editor-image" />;
  }
}

export function $createImageNode(src: string): ImageNode {
  return new ImageNode(src);
}

export function $isImageNode(node?: LexicalNode | null | undefined): node is ImageNode {
  return node instanceof ImageNode;
}

type CommandPayload = string;
export const INSERT_IMAGE_COMMAND: LexicalCommand<CommandPayload> =
  createCommand('INSERT_IMAGE_COMMAND');