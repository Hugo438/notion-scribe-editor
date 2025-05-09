
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { SidebarContext } from "../Sidebar/SidebarContext";

const Navbar = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <nav className="border-b border-slate-200 px-4 py-3 flex items-center justify-between bg-white">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-semibold text-slate-800">NotionLike</h1>
      </div>
      <div>
        <Button variant="outline" size="sm">
          Sign In
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
