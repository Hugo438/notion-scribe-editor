
import { useContext } from "react";
import { ChevronDown, File, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarContext } from "./SidebarContext";

const Sidebar = () => {
  const { isOpen } = useContext(SidebarContext);

  if (!isOpen) return null;

  return (
    <aside className="w-64 border-r border-slate-200 h-screen bg-slate-50 flex flex-col overflow-hidden transition-all duration-300 shrink-0">
      <div className="p-4 border-b border-slate-200">
        <Button className="w-full justify-start gap-2" variant="outline">
          <Plus className="h-4 w-4" />
          New Page
        </Button>
      </div>
      <div className="flex-1 overflow-auto p-3">
        <div className="space-y-1">
          <div className="flex items-center justify-between group p-2 rounded-md hover:bg-slate-200 cursor-pointer">
            <div className="flex items-center gap-2">
              <File className="h-4 w-4 text-slate-500" />
              <span className="text-sm font-medium">Getting Started</span>
            </div>
            <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 h-6 w-6">
              <Trash2 className="h-3 w-3 text-slate-500" />
            </Button>
          </div>
          <div className="flex items-center justify-between group p-2 rounded-md bg-slate-200">
            <div className="flex items-center gap-2">
              <File className="h-4 w-4 text-slate-500" />
              <span className="text-sm font-medium">My Document</span>
            </div>
            <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 h-6 w-6">
              <Trash2 className="h-3 w-3 text-slate-500" />
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
