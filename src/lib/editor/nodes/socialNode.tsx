import { DecoratorNode, LexicalCommand, LexicalNode, NodeKey, createCommand } from "lexical";
import html from "html-react-parser";
import { ReactNode } from "react";

export class SocialNode extends DecoratorNode<ReactNode> implements LexicalNode {
  __element: string;

  static getType(): string {
    return 'div';
  }

  static clone(node: SocialNode): SocialNode {
    return new SocialNode(node.__element, node.__key);
  }

  constructor(element: string, key?: NodeKey) {
    super(key);
    this.__element = element;
  }

  createDOM(): HTMLElement {
    return document.createElement('div');
  }

  getElement(): string {
    return this.__element;
  }

  updateDOM(): false {
    return false;
  }

  setURL(element: string): void {
    const writable = this.getWritable();
    writable.__element = element;
  }

  decorate(): ReactNode {
    const elem = this.__element.includes('iframe') ? `<div>${this.__element}</div` : `<div><iframe title='embed' /></div>`
    return html(elem);
  }
}

export function $createSocialNode(element: string): SocialNode {
  return new SocialNode(element);
}

export function $isSocialNode(node?: LexicalNode | null | undefined): node is SocialNode {
  return node instanceof SocialNode;
}

type CommandPayload = string;
export const INSERT_SOCIAL_COMMAND: LexicalCommand<CommandPayload> =
  createCommand('INSERT_SOCIAL_COMMAND');