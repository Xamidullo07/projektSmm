import { useState } from "react";
import {
  Users,
  BookOpen,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
  User,
} from "lucide-react";

const AdminDashboard = () => {
  const [period, setPeriod] = useState("weekly");

  const stats = [
    {
      title: "Jami foydalanuvchilar",
      value: "1,234",
      icon: <Users size={24} className="text-primary" />,
      change: "+12.5%",
      isPositive: true,
    },
    {
      title: "Faol kurslar",
      value: "15",
      icon: <BookOpen size={24} className="text-primary" />,
      change: "+3.2%",
      isPositive: true,
    },
    {
      title: "Oylik to'lovlar",
      value: "15,600,000 so'm",
      icon: <CreditCard size={24} className="text-primary" />,
      change: "-2.4%",
      isPositive: false,
    },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="bg-muted border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 w-full md:w-auto"
        >
          <option value="daily">Kunlik</option>
          <option value="weekly">Haftalik</option>
          <option value="monthly">Oylik</option>
          <option value="yearly">Yillik</option>
        </select>
      </div>

      {/* Statistika kartalari */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                {stat.icon}
              </div>
              <div
                className={`flex items-center gap-1 ${
                  stat.isPositive ? "text-green-500" : "text-red-500"
                }`}
              >
                {stat.isPositive ? (
                  <ArrowUpRight size={20} />
                ) : (
                  <ArrowDownRight size={20} />
                )}
                <span>{stat.change}</span>
              </div>
            </div>
            <h3 className="text-lg font-medium mb-1">{stat.title}</h3>
            <p className="text-2xl font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* So'nggi faoliyat va Top kurslar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* So'nggi faoliyat */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6">So'nggi faoliyat</h2>
          <div className="space-y-4">
            {[1, 2].map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Foydalanuvchi #{index + 1}</h4>
                  <p className="text-sm text-muted-foreground">
                    {index % 2 === 0
                      ? "Yangi kurs sotib olindi"
                      : "Ro'yxatdan o'tdi"}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground ml-auto whitespace-nowrap">
                  2 soat oldin
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top kurslar */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6">Top kurslar</h2>
          <div className="space-y-4">
            {[1, 2].map((_, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <img
                    src={`https://picsum.photos/200/300?random=${index}`}
                    alt="Course"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">SMM Kurs #{index + 1}</h4>
                  <p className="text-sm text-muted-foreground">
                    {120 - index * 15} ta o'quvchi
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">
                    {(1200000 - index * 100000).toLocaleString()} so'm
                  </p>
                  <p className="text-sm text-muted-foreground">Umumiy savdo</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
