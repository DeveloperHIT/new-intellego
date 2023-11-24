import {
  _id,
  _booleans,
  _descriptions,
  _fullNames,
  _insightTitles,
  _roles,
} from "./assets";
import { sub } from "date-fns";

export const _mock = {
  id: (index) => _id[index],
  boolean: (index) => _booleans[index],
  description: (index) => _descriptions[index],
  fullName: (index) => _fullNames[index],
  insightTitle: (index) => _insightTitles[index],
  role: (index) => _roles[index],
  time: (index) => sub(new Date(), { days: index, hours: index }),
  title: (index) => _insightTitles[index],

  // Image
  image: {
    cover: "/assets/images/cover/cover_1.jpg",
    insights: "/assets/images/filteredInsights/insight_1.jpg",
  },
};
