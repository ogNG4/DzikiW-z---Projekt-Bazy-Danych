import { AdminNavbar } from "./AdminNavbar";

export function AdminLayout({ children }) {
  return (
    <>
      <AdminNavbar />
      <main>{children}</main>
    </>
  );
}
