import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth-helpers";
import EditProjectForm from "./EditProjectForm";

export const metadata = {
  title: "Edit project | Admin | SylvaDev",
  description: "Edit client project.",
};

export default async function EditProjectPage({ params }) {
  const { redirect: redirectTo } = await requireAdmin();
  if (redirectTo) redirect(redirectTo);

  const { id } = await params;
  return <EditProjectForm projectId={id} />;
}
