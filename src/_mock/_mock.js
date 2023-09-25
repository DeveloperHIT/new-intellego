import { _id, _descriptions, _insightTitles } from "./assets";

export const _mock = {
  id: (index) => _id[index],
  title: (index) => _insightTitles[index],
  description: (index) => _descriptions[index],

  // Image
  image: {
    cover: (index) => `/assets/images/cover/cover_${index + 1}.jpg`,
    insights: (index) => `/assets/images/z_product/product_${index + 1}.jpg`,
  },
};
