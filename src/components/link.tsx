import React, { Children } from 'react'
import { GatsbyLinkProps, Link as GatsbyLink } from "gatsby";

// NOTE: default classes are exported as an array for easier manipulation (e.g. filtering)
export const defaultClassNames = [
  'underline',
  'text-blue-600',
];

const Link = <TState,>({
  children,
  to,
  ref, // external link only
  className, // use defaults if not set
  activeClassName, // internal link only
  partiallyActive, // internal link only
  ...props
}: GatsbyLinkProps<TState>) => {
  // links that start with "http://", "https://", "mailto:" or "tel:" are considered external
  const isExternal = /^ *(http(s)?:\/\/|mailto:|tel:)/.test(to);

  const myref = React.createRef();


  // use default classes unless overwritten by user
  const cn = className ? className : defaultClassNames.join(' ');

  if (isExternal) {
    // external link
    return (
      <a
        {...props}
        className={cn}
        href={to}
        ref={ref}
      >
        {children}
      </a>
    )
  } else {
    // internal link
    return (
      <GatsbyLink
        {...props}
        className={cn}
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
      >
        {children}
      </GatsbyLink>
    )
  }

}

export default Link;
