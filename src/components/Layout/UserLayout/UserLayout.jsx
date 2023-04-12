import { UserNavbar } from "./UserNavbar";
import UserFooter from "./UserFooter";



export function UserLayout({ children }) {
  return (
    <>
      <UserNavbar />
      <main >{children}</main>
      <UserFooter />
    </>
  );
}
