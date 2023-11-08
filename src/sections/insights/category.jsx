import CustomLink from "@/routes/routerLink";
import React from "react";

export default function Category({ postCount, path, title }) {
  return (
    <CustomLink variant="body2" href={path} color="inherit">
      {title} ({postCount})
    </CustomLink>
  );
}
