import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth-helpers";
import NewProjectForm from "./NewProjectForm";

export const metadata = {
  title: "New project | Admin | SylvaDev",
  description: "Create a new client project.",
};

export default async function NewProjectPage() {
  const { redirect: redirectTo } = await requireAdmin();
  if (redirectTo) redirect(redirectTo);

  return <NewProjectForm />;
}
