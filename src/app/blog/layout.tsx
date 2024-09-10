//import SideNav from "../ui/components/sidenav";
import SideNav from "@/app/ui/components/sidenav"; //cool, we don't have to be relative

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SideNav />
      {children}
    </>
  );
}