import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import ClientView from "@/sections/view/clientView";

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const supabase = createServerComponentClient({
    cookies,
  });
  const { data: client } = await supabase
    .from("clients")
    .select()
    .match({ slug })
    .single();

  return <ClientView client={client} />;
}
