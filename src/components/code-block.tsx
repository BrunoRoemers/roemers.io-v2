import React, { useEffect, useState } from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
import vsDark from "prism-react-renderer/themes/vsDark";
import useUrlFragment from '../hooks/use-url-state';
import useDigest from '../hooks/use-digest';
import join from '../utils/string/join';

// create a line id
const getLineId = (digest: string, lineNr: number) => digest ? `${digest}-L${lineNr}` : null;

// extract the line number from the line id
const getLineNr = (lineId: string, digest: string) => {
  if (!lineId || !digest) { return null; }

  const prefix = digest + '-L';

  if (!lineId.startsWith(prefix)) { return null; }

  const lineNr = lineId.substring(prefix.length);

  return parseInt(lineNr);
}

const CodeBlock = ({ children, language }) => {
  // url fragment stores selected line number
  const [urlFragment, setUrlFragment] = useUrlFragment();

  // calculate digest to uniquely identify codeblock on page
  const [digest] = useDigest(children);
  const shortDigest = digest?.substring(0, 10);

  // get selected line number (if any)
  const selectedLine = getLineNr(urlFragment, shortDigest);

  // scroll selected line into view, once it's available
  useEffect(() => {
    document.getElementById(urlFragment)?.scrollIntoView();
  }, [selectedLine]);

  return (
    <Highlight {...defaultProps} code={children} language={language} theme={vsDark as any}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className={`${className} overflow-x-auto py-2 rounded-md max-w-full`} style={style}>
          <div className='min-w-full inline-block px-2'>
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({ line, key: i })}
                id={getLineId(shortDigest, i + 1)}
                className={join('token-line w-full hover:bg-black hover:rounded-md', selectedLine === (i + 1) ? 'bg-black rounded-md' : null)}
                onClick={e => setUrlFragment(selectedLine === (i + 1) ? null : getLineId(shortDigest, i + 1))}
              >
                <span data-line-nr={i + 1} className={`before:content-[attr(data-line-nr)] before:text-zinc-700 before:inline-block before:w-10 before:text-right before:pr-2`}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </Highlight>
  )
}

export default CodeBlock;
