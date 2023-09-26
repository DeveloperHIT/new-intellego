import InsightView from "@/sections/view/insightView";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const supabase = createServerComponentClient({
    cookies,
  });
  const { data: insight } = await supabase
    .from("insights")
    .select()
    .match({ slug })
    .single();

  const { data: insights } = await supabase.from("insights").select("*");

  const { data: insightTags } = await supabase.from("insight-tags").select("*");

  return (
    <InsightView
      insight={insight}
      insights={insights}
      insightTags={insightTags}
    />
  );
}
