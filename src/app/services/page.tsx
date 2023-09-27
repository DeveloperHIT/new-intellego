import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import ServicesView from "@/sections/view/servicesView";

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });
  const { data: services } = await supabase.from("services").select("*");
  return <ServicesView services={services} />;
}
