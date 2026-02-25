import { redirect } from "next/navigation";
import { requireProfile } from "@/lib/auth-helpers";
import ClientDashboard from "./ClientDashboard";

export const metadata = {
  title: "Dashboard | SylvaDev Client Portal",
  description: "Your projects and payments.",
};

export default async function ClientsDashboardPage() {
  const { profile, redirect: redirectTo } = await requireProfile();
  if (redirectTo) redirect(redirectTo);

  return <ClientDashboard />;
}
