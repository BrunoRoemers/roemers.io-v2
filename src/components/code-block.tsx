import React from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
import vsDark from "prism-react-renderer/themes/vsDark";

const CodeBlock = ({ children, language }) => (
  <Highlight {...defaultProps} code={children} language={language} theme={vsDark as any}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <div className={`${className} overflow-x-auto pl-2 pr-4 py-2 rounded-md max-w-full`} style={style}>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line, key: i })}>
            <span data-line-nr={i + 1} className={`before:content-[attr(data-line-nr)] before:text-zinc-700 before:inline-block before:w-10 before:text-right before:pr-2`}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </span>
          </div>
        ))}
      </div>
    )}
  </Highlight>
)

export default CodeBlock;
