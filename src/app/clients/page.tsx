import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import ClientsView from "@/sections/view/clientsView";

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });
  const { data: clients } = await supabase.from("clients").select("*");
  return <ClientsView clients={clients} />;
}
