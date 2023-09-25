import {
  _id,
  _booleans,
  _descriptions,
  _fullNames,
  _insightTitles,
  _postTitles,
  _roles,
} from "./assets";
import { sub } from "date-fns";

export const _mock = {
  id: (index) => _id[index],
  boolean: (index) => _booleans[index],
  description: (index) => _descriptions[index],
  fullName: (index) => _fullNames[index],
  postTitle: (index) => _postTitles[index],
  role: (index) => _roles[index],
  time: (index) => sub(new Date(), { days: index, hours: index }),
  title: (index) => _insightTitles[index],

  // Image
  image: {
    avatar: (index) => `/assets/images/avatar/avatar_${index + 1}.jpg`,
    career: (index) => `/assets/images/career/career_${index + 1}.jpg`,
    course: (index) => `/assets/images/course/course_${index + 1}.jpg`,
    cover: (index) => `/assets/images/cover/cover_${index + 1}.jpg`,
    insights: (index) => `/assets/images/z_product/product_${index + 1}.jpg`,
    marketing: (index) => `/assets/images/marketing/marketing_${index + 1}.jpg`,
    travel: (index) => `/assets/images/travel/travel_${index + 1}.jpg`,
  },
};
