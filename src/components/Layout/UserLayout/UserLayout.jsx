import { UserNavbar } from "./UserNavbar";

export function UserLayout({ children }) {
  return (
    <>
      <UserNavbar />
      <main>{children}</main>
    </>
  );
}
