import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import InsightsView from "@/sections/view/insightsView";
import { getProjects } from "@/sanity/sanity-utils";

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });
  const { data: insightTags } = await supabase
    .from("insights-tags")
    .select("*");

  const { data: insights } = await supabase.from("insights").select("*");

  const projects = await getProjects();

  return (
    <div>
      <div>Insights from sanity:</div>
      {projects.map((project) => (
        <div key={project._id}>{project.name}</div>
      ))}
      <InsightsView insights={insights} insightsTags={insightTags} />
    </div>
  );
}
