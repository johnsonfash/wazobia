import { ChangeEvent } from "react";

interface SelectProp {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void,
  className: string,
  options: string[],
  value: string
}

export const supportedBlockTypes = new Set([
  "paragraph",
  "quote",
  "code",
  "h1",
  "h2",
  "ul",
  "ol"
]);

export const blockTypeToBlockName = {
  code: "Code Block",
  h1: "Large Heading",
  h2: "Small Heading",
  h3: "Heading",
  h4: "Heading",
  h5: "Heading",
  ol: "Numbered List",
  paragraph: "Paragraph",
  quote: "Quote",
  ul: "Bulleted List"
};


export default function Select({ onChange, className, options, value }: SelectProp) {
  return (
    <select className={className} onChange={onChange} value={value}>
      <option hidden={true} value="" />
      {options.map((option: string) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
