
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  Users, 
  MessageSquare 
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard", icon: LayoutDashboard, isActive: true },
  { title: "Orders", icon: ShoppingCart },
  { title: "Pickups", icon: Package },
  { title: "Donors", icon: Users },
  { title: "Communications", icon: MessageSquare },
];

export function AppSidebar() {
  return (
    <Sidebar className="w-60 bg-[#0a2240] border-r-0">
      <SidebarContent>
        {/* Kiwanis Header */}
        <div className="p-6 border-b border-[#1e3a5c]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#fcc646] rounded-full flex items-center justify-center">
              <span className="text-[#0a2240] font-bold text-lg">K</span>
            </div>
            <div>
              <h2 className="text-white font-semibold text-lg">Kiwanis</h2>
              <p className="text-gray-300 text-sm">Club of Arlington, VA</p>
            </div>
          </div>
        </div>

        {/* Event Title */}
        <div className="p-6 border-b border-[#1e3a5c]">
          <h3 className="text-white font-medium">2022 Blueberry Fundraiser</h3>
        </div>

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className={`
                      w-full justify-start px-6 py-3 text-left hover:bg-[#1e3a5c] transition-colors
                      ${item.isActive ? 'bg-[#1e3a5c] text-white' : 'text-gray-300'}
                    `}
                  >
                    <button>
                      <item.icon className="w-5 h-5 mr-3" />
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
