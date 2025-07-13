import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { LogoutButton } from "./LogoutButton";

export default function DashboardPage() {
  const auth = cookies().get("auth");

  if (!auth) {
    redirect("/admin/login");
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin dashboard!</p>
      <LogoutButton />
    </div>
  );
}
