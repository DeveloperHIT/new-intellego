import merge from "lodash.merge";

import { accordion } from "@/theme/overrides/components/accordion";
import { appBar } from "@/theme/overrides/components/appbar";
import { badge } from "@/theme/overrides/components/badge";
import { breadcrumbs } from "@/theme/overrides/components/breadcrumbs";
import { button } from "@/theme/overrides/components/button";
import { buttonGroup } from "@/theme/overrides/components/buttonGroup";
import { card } from "@/theme/overrides/components/card";
import { cssBaseline } from "@/theme/overrides/components/cssBaseline";
import { defaultProps } from "@/theme/overrides/defaultProps";
import { drawer } from "@/theme/overrides/components/drawer";
import { list } from "@/theme/overrides/components/list";
import { loadingButton } from "@/theme/overrides/components/loadingButton";
import { menu } from "@/theme/overrides/components/menu";
import { paper } from "@/theme/overrides/components/paper";
import { popover } from "@/theme/overrides/components/popover";
import { svgIcon } from "@/theme/overrides/components/svgIcon";
import { textField } from "@/theme/overrides/components/textField";
import { typography } from "@/theme/overrides/components/typography";

export function componentOverrides(theme) {
  const allComponents = [
    accordion(theme),
    appBar(theme),
    badge(theme),
    breadcrumbs(theme),
    button(theme),
    buttonGroup(theme),
    card(theme),
    cssBaseline(theme),
    defaultProps(theme),
    drawer(theme),
    list(theme),
    loadingButton(theme),
    menu(theme),
    paper(theme),
    popover(theme),
    svgIcon(theme),
    textField(theme),
    typography(theme),
  ];

  // Merging all component overrides together
  return merge({}, ...allComponents);
}
