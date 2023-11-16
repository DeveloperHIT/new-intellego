// import CustomLink from "@/routes/routerLink";
import React from "react";
import { Link } from "@mui/material";

export default function Category({ postCount, path, title }) {
  return (
    <Link variant="body2" href={path} color="inherit">
      {title} ({postCount})
    </Link>
  );
}
