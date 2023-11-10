interface AdminLayoutProps {
  children: React.ReactNode;
}

// TODO: Add index for post images that allows one person to pick photos and the author to select from pre-approved list
export default function AdminLayout({ children }: AdminLayoutProps) {
  return <div>{children}</div>;
}
