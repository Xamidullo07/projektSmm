import { useState } from "react";
import {
  Search,
  Filter,
  Download,
  MoreVertical,
  Shield,
  Ban,
  Mail,
} from "lucide-react";

const users = [
  {
    id: 1,
    name: "Abdulloh Sayfuddinov",
    email: "abdullohsayfuddinov4@gmail.com",
    phone: "+99894 651 55 88",
    role: "admin",
    status: "active",
    joinedDate: "2023-12-01",
    coursesCount: 3,
  },
  {
    id: 2,
    name: "Aziza Karimova",
    email: "aziza@example.com",
    phone: "+998 90 234 56 78",
    role: "user",
    status: "active",
    joinedDate: "2023-12-15",
    coursesCount: 2,
  },
  {
    id: 3,
    name: "Jasur Aliyev",
    email: "jasur@example.com",
    phone: "+998 90 345 67 89",
    role: "user",
    status: "blocked",
    joinedDate: "2024-01-05",
    coursesCount: 1,
  },
];

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === "all" || user.role === filterRole;
    const matchesStatus =
      filterStatus === "all" || user.status === filterStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Foydalanuvchilar</h1>
      </div>

      <div className="card p-4 md:p-6 mb-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6 flex-wrap">
          <div className="w-full md:w-auto flex-1 relative">
            <Search
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Foydalanuvchilarni qidirish..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full md:w-auto">
            <div className="relative w-full sm:w-auto">
              <Filter
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="w-full sm:w-auto pl-10 pr-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              >
                <option value="all">Barcha rollar</option>
                <option value="admin">Admin</option>
                <option value="user">Foydalanuvchi</option>
              </select>
            </div>

            <div className="relative w-full sm:w-auto">
              <Filter
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full sm:w-auto pl-10 pr-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              >
                <option value="all">Barcha statuslar</option>
                <option value="active">Faol</option>
                <option value="blocked">Bloklangan</option>
              </select>
            </div>

            <button className="btn btn-outline flex items-center gap-2 text-sm px-4 py-2 whitespace-nowrap">
              <Download size={18} />
              <span>Export</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4">Foydalanuvchi</th>
                <th className="text-left py-3 px-4">Rol</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Ro'yxatdan o'tgan sana</th>
                <th className="text-center py-3 px-4">Kurslar</th>
                <th className="text-center py-3 px-4">Amallar</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-border hover:bg-muted/50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img
                          src={`https://randomuser.me/api/portraits/${
                            user.id % 2 ? "men" : "women"
                          }/${user.id}.jpg`}
                          alt={user.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{user.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                        user.role === "admin"
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {user.role === "admin" ? "Admin" : "Foydalanuvchi"}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                        user.status === "active"
                          ? "bg-green-500/10 text-green-500"
                          : "bg-red-500/10 text-red-500"
                      }`}
                    >
                      {user.status === "active" ? "Faol" : "Bloklangan"}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    {new Date(user.joinedDate).toLocaleDateString("uz-UZ")}
                  </td>
                  <td className="py-4 px-4 text-center">{user.coursesCount}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                        <Mail size={18} className="text-muted-foreground" />
                      </button>
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                        <Shield size={18} className="text-muted-foreground" />
                      </button>
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                        <Ban size={18} className="text-destructive" />
                      </button>
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                        <MoreVertical
                          size={18}
                          className="text-muted-foreground"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
