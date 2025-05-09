
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="border-b border-slate-200 px-4 py-3 flex items-center justify-between bg-white">
      <div>
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
