import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import InsightsView from "@/sections/view/insightsView";

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });
  const { data: insightTags } = await supabase
    .from("insights-tags")
    .select("*");

  const { data: insights } = await supabase.from("insights").select("*");

  return <InsightsView insights={insights} insightsTags={insightTags} />;
}
