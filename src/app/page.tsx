import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import LandingView from "@/sections/view/landingView";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: insights } = await supabase.from("insights").select("*");

  return <LandingView insights={insights} />;
}
