import merge from "lodash.merge";

import { accordion } from "@/theme/overrides/components/accordion";
import { appBar } from "@/theme/overrides/components/appbar";
import { badge } from "@/theme/overrides/components/badge";
import { breadcrumbs } from "@/theme/overrides/components/breadcrumbs";
import { button } from "@/theme/overrides/components/button";
import { buttonGroup } from "@/theme/overrides/components/buttonGroup";
import { card } from "@/theme/overrides/components/card";
import { checkbox } from "@/theme/overrides/components/checkbox";
import { chip } from "@/theme/overrides/components/chip";
import { cssBaseline } from "@/theme/overrides/components/cssBaseline";
import { defaultProps } from "@/theme/overrides/defaultProps";
import { drawer } from "@/theme/overrides/components/drawer";
import { fab } from "@/theme/overrides/components/fab";
import { list } from "@/theme/overrides/components/list";
import { loadingButton } from "@/theme/overrides/components/loadingButton";
import { menu } from "@/theme/overrides/components/menu";
import { paper } from "@/theme/overrides/components/paper";
import { popover } from "@/theme/overrides/components/popover";
import { select } from "@/theme/overrides/components/select";
import { svgIcon } from "@/theme/overrides/components/svgIcon";
import { textField } from "@/theme/overrides/components/textField";
import { toggleButton } from "@/theme/overrides/components/toggleButton";
import { typography } from "@/theme/overrides/components/typography";
import { radio } from "@/theme/overrides/components/radioButton";
import { formControl } from "@/theme/overrides/components/formControl";

export function componentOverrides(theme) {
  const allComponents = [
    accordion(theme),
    appBar(theme),
    badge(theme),
    breadcrumbs(theme),
    button(theme),
    buttonGroup(theme),
    card(theme),
    checkbox(theme),
    chip(theme),
    cssBaseline(theme),
    defaultProps(theme),
    drawer(theme),
    fab(theme),
    formControl(theme),
    list(theme),
    loadingButton(theme),
    menu(theme),
    paper(theme),
    popover(theme),
    radio(theme),
    select(theme),
    svgIcon(theme),
    textField(theme),
    toggleButton(theme),
    typography(theme),
  ];

  // Merging all component overrides together
  return merge({}, ...allComponents);
}
