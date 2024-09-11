//import SideNav from "../ui/components/sidenav";
import SideNav from "@/app/ui/components/sidenav"; //cool, we don't have to be relative

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "10%" }}>
        <SideNav />
      </div>
      <div>{children}</div>
    </div>
  );
}