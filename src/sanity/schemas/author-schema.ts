import { UserIcon } from "@sanity/icons";

const author = {
  name: "author",
  title: "Authors",
  icon: UserIcon,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
  ],
};

export default author;
