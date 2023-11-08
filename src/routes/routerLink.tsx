import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Link as MuiLink, LinkProps } from "@mui/material";

// Rename next link's href to _href to avoid conflict with mui's href
export type CustomNextLinkProps = Omit<NextLinkProps, "href"> & {
  _href: NextLinkProps["href"];
};

// Rename next link to custom next link to avoid conflict with mui's link
export const CustomNextLink = ({ _href, ...props }: CustomNextLinkProps) => {
  return <NextLink href={_href} {...props} />;
};

// Combine mui link props with next link props
type CombinedLinkProps = LinkProps<typeof NextLink>;

// Remove both href properties and define a new one using NextLinkProps
type CustomLinkProps = Omit<CombinedLinkProps, "href"> & {
  href: NextLinkProps["href"];
};

const CustomLink = ({ href, ...props }: CustomLinkProps) => {
  // Use _href props of CustomNextLink to set the href
  return <MuiLink {...props} component={CustomNextLink} _href={href} />;
};

export default CustomLink;
