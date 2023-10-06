import ServiceView from "@/sections/view/serviceView";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Page({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  const supabase = createServerComponentClient({
    cookies,
  });

  const { data: service } = await supabase
    .from("services")
    .select()
    .match({ slug })
    .single();

  return <ServiceView service={service} />;
}
