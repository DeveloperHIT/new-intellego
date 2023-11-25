import { Breakpoint, useMediaQuery, useTheme, Theme } from "@mui/material";

type QueryType = "up" | "down" | "between" | "only";

export function useResponsive(
  query: QueryType,
  start: Breakpoint,
  end?: Breakpoint,
) {
  const theme: Theme = useTheme();

  let mediaQuery: string = "";

  switch (query) {
    case "up":
      mediaQuery = theme.breakpoints.up(start);
      break;
    case "down":
      mediaQuery = theme.breakpoints.down(start);
      break;
    case "between":
      if (end) {
        mediaQuery = theme.breakpoints.between(start, end);
      } else {
        throw new Error("End breakpoint is required for between query");
      }
      break;
    case "only":
      mediaQuery = theme.breakpoints.only(start);
      break;
    default:
      throw new Error("Invalid query type");
  }

  return useMediaQuery(mediaQuery);
}

export function useWidth() {
  const theme: Theme = useTheme();

  const keys = [...theme.breakpoints.keys].reverse();

  return (
    keys.reduce<string | null>((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));

      return !output && matches ? key : output;
    }, null) || "xs"
  );
}
