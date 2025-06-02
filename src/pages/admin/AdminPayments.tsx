import { useState } from "react";
import {
  Search,
  Filter,
  Download,
  MoreVertical,
  Eye,
  RefreshCcw,
  AlertCircle,
} from "lucide-react";

const payments = [
  {
    id: 1,
    user: {
      name: "Abdulloh Tohiriy",
      email: "abdulloh@example.com",
    },
    course: "SMM sohasini 0 dan o'rganish",
    amount: 1200000,
    status: "completed",
    paymentMethod: "payme",
    date: "2024-02-01",
  },
  {
    id: 2,
    user: {
      name: "Aziza Karimova",
      email: "aziza@example.com",
    },
    course: "Instagram marketing to'liq kurs",
    amount: 950000,
    status: "pending",
    paymentMethod: "click",
    date: "2024-02-02",
  },
  {
    id: 3,
    user: {
      name: "Jasur Aliyev",
      email: "jasur@example.com",
    },
    course: "Facebook targetlangan reklama",
    amount: 850000,
    status: "failed",
    paymentMethod: "payme",
    date: "2024-02-03",
  },
];

const AdminPayments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterMethod, setFilterMethod] = useState("all");

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.course.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || payment.status === filterStatus;
    const matchesMethod =
      filterMethod === "all" || payment.paymentMethod === filterMethod;
    return matchesSearch && matchesStatus && matchesMethod;
  });

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/10 text-green-500";
      case "pending":
        return "bg-yellow-500/10 text-yellow-500";
      case "failed":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Muvaffaqiyatli";
      case "pending":
        return "Kutilmoqda";
      case "failed":
        return "Bekor qilingan";
      default:
        return status;
    }
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl sm:text-2xl font-bold">To'lovlar</h1>
      </div>

      {/* Statistik kartalar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <div className="card p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500/10 flex items-center justify-center">
              <RefreshCcw size={20} className="text-green-500" />
            </div>
            <span className="text-xs sm:text-sm text-muted-foreground">
              Bugun
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-medium mb-1">
            Jami to'lovlar
          </h3>
          <p className="text-xl sm:text-2xl font-semibold">3,000,000 so'm</p>
        </div>

        <div className="card p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-500/10 flex items-center justify-center">
              <AlertCircle size={20} className="text-yellow-500" />
            </div>
            <span className="text-xs sm:text-sm text-muted-foreground">
              Kutilmoqda
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-medium mb-1">
            Kutilayotgan to'lovlar
          </h3>
          <p className="text-xl sm:text-2xl font-semibold">950,000 so'm</p>
        </div>

        <div className="card p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-500/10 flex items-center justify-center">
              <AlertCircle size={20} className="text-red-500" />
            </div>
            <span className="text-xs sm:text-sm text-muted-foreground">
              Bekor qilingan
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-medium mb-1">
            Bekor qilingan to'lovlar
          </h3>
          <p className="text-xl sm:text-2xl font-semibold">850,000 so'm</p>
        </div>
      </div>

      {/* Filterlar */}
      <div className="card p-4 sm:p-6 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="To'lovlarni qidirish..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
            />
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <div className="relative">
              <Filter
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="pl-10 pr-4 py-2 bg-muted border border-border rounded-lg text-sm"
              >
                <option value="all">Barcha statuslar</option>
                <option value="completed">Muvaffaqiyatli</option>
                <option value="pending">Kutilmoqda</option>
                <option value="failed">Bekor qilingan</option>
              </select>
            </div>

            <div className="relative">
              <Filter
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <select
                value={filterMethod}
                onChange={(e) => setFilterMethod(e.target.value)}
                className="pl-10 pr-4 py-2 bg-muted border border-border rounded-lg text-sm"
              >
                <option value="all">Barcha usullar</option>
                <option value="payme">Payme</option>
                <option value="click">Click</option>
              </select>
            </div>

            <button className="btn btn-outline text-sm flex items-center gap-2">
              <Download size={18} />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Jadval */}
      <div className="card p-4 sm:p-6">
        <div className="overflow-auto">
          <table className="w-full min-w-[800px] text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-3 px-4">ID</th>
                <th className="py-3 px-4">Foydalanuvchi</th>
                <th className="py-3 px-4">Kurs</th>
                <th className="py-3 px-4 text-right">Summa</th>
                <th className="py-3 px-4">To'lov usuli</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Sana</th>
                <th className="py-3 px-4 text-center">Amallar</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.map((payment) => (
                <tr
                  key={payment.id}
                  className="border-b border-border hover:bg-muted/50"
                >
                  <td className="py-4 px-4">#{payment.id}</td>
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium">{payment.user.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {payment.user.email}
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-4">{payment.course}</td>
                  <td className="py-4 px-4 text-right">
                    {payment.amount.toLocaleString()} so'm
                  </td>
                  <td className="py-4 px-4 capitalize">
                    {payment.paymentMethod}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusBadgeClass(
                        payment.status
                      )}`}
                    >
                      {getStatusText(payment.status)}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    {new Date(payment.date).toLocaleDateString("uz-UZ")}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 hover:bg-muted rounded-lg">
                        <Eye size={16} className="text-muted-foreground" />
                      </button>
                      <button className="p-2 hover:bg-muted rounded-lg">
                        <MoreVertical
                          size={16}
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

export default AdminPayments;
