import React from "react";
import { Paper, styled } from "@mui/material";
import { Search } from "@mui/icons-material";
import { StyledIconButton } from "@/components/SearchBox/SearchIconButton";
import { StyledSearchInputBase } from "@/components/SearchBox/SearchInputBase";

const StyledSearchBox = styled(Paper)({
  background: "transparent",
  border: "1px solid hsla(0, 0%, 53.3%, 0.4)",
  boxShadow: "hsla(0, 0%, 0%, 0)",
  display: "flex",
  alignItems: "center",
  height: "40px",
  width: 400,
  borderRadius: 25,
  fontSize: "16px",
  padding: "0 0 0 4px",
});

interface SearchBoxProps {}

const SearchBox = ({}: SearchBoxProps) => {
  return (
    <StyledSearchBox>
      <StyledSearchInputBase
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
      />
      <StyledIconButton type="submit" aria-label="search">
        <Search />
      </StyledIconButton>
    </StyledSearchBox>
  );
};

export default SearchBox;

// --ytd-searchbox-legacy-border-shadow-color: hsla(0, 0%, 0%, 0);
// --ytd-searchbox-background: hsl(0, 0%, 7%);
// --ytd-searchbox-text-color: ;
