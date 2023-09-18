import { Facebook } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";

export default {
  socials: [
    {
      icon: <Facebook />,
      link: "/",
    },
    {
      icon: <Instagram />,
      link: "/",
    },
    {
      icon: <Twitter />,
      link: "/",
    },
    {
      icon: <LinkedIn />,
      link: "/",
    },
  ],
  menus: [
    {
      name: "services",
      items: [
        {
          name: "Business Valuation",
          href: "/",
        },
        {
          name: "Compensation Valuation",
          href: "/",
        },
        {
          name: "Litigation Support",
          href: "/",
        },
        {
          name: "Strategy",
          href: "/",
        },
        {
          name: "Transaction Advisory",
          href: "/",
        },
      ],
    },
    {
      name: "clients",
      items: [
        {
          name: "Ambulatory Surgery Centers",
          href: "/",
        },
        {
          name: "Dialysis Clinics",
          href: "/",
        },
        {
          name: "Digital Health Startups",
          href: "/",
        },
        {
          name: "Vascular Access Clinics",
          href: "/",
        },
      ],
    },
    {
      name: "Other",
      items: [
        {
          name: "About Us",
          href: "/",
        },
        {
          name: "Insights",
          href: "/",
        },
        {
          name: "Careers",
          href: "/",
        },
      ],
    },
  ],
};
