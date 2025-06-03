import { useState, useRef, useEffect } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  CreditCard,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import logo from "../../img/img.jpg";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const sidebarRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { title: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/admin" },
    { title: "Kurslar", icon: <BookOpen size={20} />, path: "/admin/courses" },
    {
      title: "Foydalanuvchilar",
      icon: <Users size={20} />,
      path: "/admin/users",
    },
    {
      title: "To'lovlar",
      icon: <CreditCard size={20} />,
      path: "/admin/payments",
    },
    {
      title: "Sozlamalar",
      icon: <Settings size={20} />,
      path: "/admin/settings",
    },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed lg:static top-0 left-0 z-40 h-screen w-64 transition-transform bg-card border-r border-border
          ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <div className="flex items-center justify-between mb-6 px-3">
            <Link to="/admin" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-montserrat font-bold">
                  A
                </span>
              </div>
              <span className="font-montserrat font-bold text-lg">Admin</span>
            </Link>
            <button
              className="lg:hidden text-foreground"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          <nav className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-muted text-foreground"
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            ))}

            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 rounded-lg w-full text-left hover:bg-destructive/10 text-destructive transition-colors"
            >
              <LogOut size={20} />
              <span>Chiqish</span>
            </button>
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Header */}
        <header className="bg-card border-b border-border sticky top-0 z-30 px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden text-foreground focus:outline-none"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex items-center gap-4 ml-auto">
            <div className="relative">
              <button className="flex items-center gap-2 text-sm">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img
                    src={logo}
                    alt="Admin"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>Admin</span>
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </header>

        <main className="p-4 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
