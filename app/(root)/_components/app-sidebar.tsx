import {FlaskConical, Home, LayersIcon, Package, Table, Users} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Predict",
    url: "/predict",
    icon: FlaskConical,
  },
  {
    title: "Model",
    url: "/model",
    icon: Package,
  },
  {
    title: "Dataset",
    url: "/dataset",
    icon: Table,
  },
  {
    title: "Group Project",
    url: "/groupproject",
    icon: Users,
  },
  {
    title: "Tech Stack",
    url: "/techstack",
    icon: LayersIcon,
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
