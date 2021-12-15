import React, { Children } from 'react'
import { GatsbyLinkProps, Link as GatsbyLink } from "gatsby";

// NOTE: default classes are exported as an array for easier manipulation (e.g. filtering)
export const defaultClassNames = [
  'underline',
  'text-blue-600',
];

const Link = <TState,>({children, ref, className, ...props}: GatsbyLinkProps<TState>) => {
  console.log(className);
  // use default classes unless overwritten by user
  const cn = className ? className : defaultClassNames.join(' ');

  return (
    <GatsbyLink className={cn} {...props}>{children}</GatsbyLink>
  )
}

export default Link;
