import LeftSidebar from "@/components/ui/LeftSidebar";
import MobileNav from "@/components/ui/MobileNav";
import RightSidebar from "@/components/ui/RightSidebar";
import Image from "next/image";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col relative">
        <main className="flex relative bg-black-3">
            <LeftSidebar/>
            <section className=" flex min-h-screen flex-1 flex-col px-4 mx:px-14">
              <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
                <div>
                  <Image src="icons/logo.svg" width={30} height={30} alt="menu icon"/>
                  <MobileNav/>
                </div>
                <div className="flex flex-col mb:pb-14">
                  Toaster
                  {children}  
                </div>
              </div>
            </section>
            <RightSidebar/>
        </main>
    </div>
  );
}
