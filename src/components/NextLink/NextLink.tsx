import Link, { LinkProps } from "next/link";
import React, { forwardRef, ReactElement } from "react";

type NextLinkProps = LinkProps & {
  children: ReactElement;
};

// Use forwardRef to type the component properly.
const NextLink = forwardRef<HTMLAnchorElement, NextLinkProps>(
  ({ children, ...other }, ref) => (
    // You pass the ref to the child element, not to the Link component itself.
    <Link {...other}>{React.cloneElement(children, { ref })}</Link>
  ),
);

NextLink.displayName = "NextLink";

export default NextLink;
