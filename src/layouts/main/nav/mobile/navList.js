import Collapse from "@mui/material/Collapse";

import { usePathname } from "@/hooks/usePathname";
import { useBoolean } from "@/hooks/useBoolean";
import NavSectionVertical from "@/components/NavSection/Vertical";

import NavItem from "./navItem";

export default function NavList({ item }) {
  const pathname = usePathname();

  const externalLink = item.path.includes("http");

  const listOpen = useBoolean();

  return (
    <>
      <NavItem
        item={item}
        open={listOpen.value}
        onClick={listOpen.onToggle}
        active={pathname === item.path}
        externalLink={externalLink}
      />

      {!!item.children && (
        <Collapse in={listOpen.value} unmountOnExit>
          <NavSectionVertical data={item.children} />
        </Collapse>
      )}
    </>
  );
}
