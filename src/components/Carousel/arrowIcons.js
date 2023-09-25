import Iconify from "@/components/Iconify";

export function LeftIcon({ icon = "eva:arrow-ios-forward-fill", isRTL }) {
  return (
    <Iconify
      icon={icon}
      sx={{
        transform: " scaleX(-1)",
        ...(isRTL && {
          transform: " scaleX(1)",
        }),
      }}
    />
  );
}

export function RightIcon({ icon = "eva:arrow-ios-forward-fill", isRTL }) {
  return (
    <Iconify
      icon={icon}
      sx={{
        ...(isRTL && {
          transform: " scaleX(-1)",
        }),
      }}
    />
  );
}
