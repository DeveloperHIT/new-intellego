import merge from "lodash.merge";

import { accordion } from "@/theme/overrides/components/accordion";
import { alert } from "@/theme/overrides/components/alert";
import { appBar } from "@/theme/overrides/components/appbar";
import { autocomplete } from "@/theme/overrides/components/autocomplete";
import { avatar } from "@/theme/overrides/components/avatar";
import { backdrop } from "@/theme/overrides/components/backdrop";
import { badge } from "@/theme/overrides/components/badge";
import { breadcrumbs } from "@/theme/overrides/components/breadcrumbs";
import { button } from "@/theme/overrides/components/button";
import { buttonGroup } from "@/theme/overrides/components/buttonGroup";
import { card } from "@/theme/overrides/components/card";
import { checkbox } from "@/theme/overrides/components/checkbox";
import { chip } from "@/theme/overrides/components/chip";
import { cssBaseline } from "@/theme/overrides/components/cssBaseline";
import { dataGrid } from "@/theme/overrides/components/dataGrid";
import { datePicker } from "@/theme/overrides/components/datePicker";
import { defaultProps } from "@/theme/overrides/defaultProps";
import { dialog } from "@/theme/overrides/components/dialog";
import { drawer } from "@/theme/overrides/components/drawer";
import { fab } from "@/theme/overrides/components/fab";
import { formControl } from "@/theme/overrides/components/formControl";
import { list } from "@/theme/overrides/components/list";
import { loadingButton } from "@/theme/overrides/components/loadingButton";
import { menu } from "@/theme/overrides/components/menu";
import { pagination } from "@/theme/overrides/components/pagination";
import { paper } from "@/theme/overrides/components/paper";
import { popover } from "@/theme/overrides/components/popover";
import { progress } from "@/theme/overrides/components/progress";
import { radio } from "@/theme/overrides/components/radioButton";
import { rating } from "@/theme/overrides/components/rating";
import { select } from "@/theme/overrides/components/select";
import { skeleton } from "@/theme/overrides/components/skeleton";
import { slider } from "@/theme/overrides/components/slider";
import { stepper } from "@/theme/overrides/components/stepper";
import { svgIcon } from "@/theme/overrides/components/svgIcon";
import { switchs } from "@/theme/overrides/components/switch";
import { table } from "@/theme/overrides/components/table";
import { tabs } from "@/theme/overrides/components/tabs";
import { textField } from "@/theme/overrides/components/textField";
import { timeline } from "@/theme/overrides/components/timeline";
import { toggleButton } from "@/theme/overrides/components/toggleButton";
import { tooltip } from "@/theme/overrides/components/tooltip";
import { treeView } from "@/theme/overrides/components/treeView";
import { typography } from "@/theme/overrides/components/typography";

export function componentOverrides(theme) {
  const allComponents = [
    accordion(theme),
    alert(theme),
    appBar(theme),
    autocomplete(theme),
    avatar(theme),
    backdrop(theme),
    badge(theme),
    breadcrumbs(theme),
    button(theme),
    buttonGroup(theme),
    card(theme),
    checkbox(theme),
    chip(theme),
    cssBaseline(theme),
    dataGrid(theme),
    datePicker(theme),
    defaultProps(theme),
    dialog(theme),
    drawer(theme),
    fab(theme),
    formControl(theme),
    list(theme),
    loadingButton(theme),
    menu(theme),
    pagination(theme),
    paper(theme),
    popover(theme),
    progress(theme),
    radio(theme),
    rating(theme),
    select(theme),
    skeleton(theme),
    slider(theme),
    stepper(theme),
    svgIcon(theme),
    switchs(theme),
    table(theme),
    tabs(theme),
    textField(theme),
    timeline(theme),
    toggleButton(theme),
    tooltip(theme),
    treeView(theme),
    typography(theme),
  ];

  // Merging all component overrides together
  return merge({}, ...allComponents);
}
