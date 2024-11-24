import {ReactNode} from "react";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {ModeToggle} from "@/app/(root)/_components/mode-toggle";
import {AppSidebar} from "@/app/(root)/_components/app-sidebar";

export default function Layout({children}:{children: ReactNode}) {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <main className="relative w-full h-screen">
        <div className="absolute left-0 top-0 m-4">
          <SidebarTrigger/>
        </div>
        <div className="absolute right-0 top-0 m-4">
          <ModeToggle />
        </div>
        <div className="p-12 grow basis-0 overflow-auto w-full h-full md:p-14 lg:p-16">
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}