import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth-helpers";
import AdminProjectsList from "./AdminProjectsList";

export const metadata = {
  title: "Projects | Admin | SylvaDev",
  description: "Manage client projects.",
};

export default async function AdminProjectsPage() {
  const { profile, redirect: redirectTo } = await requireAdmin();
  if (redirectTo) redirect(redirectTo);

  return <AdminProjectsList />;
}
