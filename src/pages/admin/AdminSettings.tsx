import { useState } from "react";
import { Save } from "lucide-react";

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    siteName: "Abdulloh SMM",
    siteDescription: "SMM sohasini 0 dan o'rganing",
    email: "info@abdullohsmm.uz",
    phone: "+998 90 123 45 67",
    address: "Toshkent, O'zbekiston",
    telegramBot: "@abdullohsmm_bot",
    paymentMethods: {
      payme: true,
      click: true,
      apelsin: false,
    },
    notifications: {
      newUser: true,
      newPayment: true,
      courseCompletion: true,
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save logic
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Sozlamalar</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
          {/* Asosiy ma'lumotlar */}
          <div className="rounded-xl bg-white dark:bg-gray-900 p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-6">Asosiy ma'lumotlar</h2>

            <div className="space-y-4">
              {[
                {
                  label: "Sayt nomi",
                  value: settings.siteName,
                  key: "siteName",
                },
                {
                  label: "Sayt tavsifi",
                  value: settings.siteDescription,
                  key: "siteDescription",
                  type: "textarea",
                },
                { label: "Email", value: settings.email, key: "email" },
                { label: "Telefon", value: settings.phone, key: "phone" },
                { label: "Manzil", value: settings.address, key: "address" },
                {
                  label: "Telegram bot",
                  value: settings.telegramBot,
                  key: "telegramBot",
                },
              ].map(({ label, value, key, type }) => (
                <div key={key}>
                  <label className="block text-sm font-medium mb-1">
                    {label}
                  </label>
                  {type === "textarea" ? (
                    <textarea
                      value={value}
                      onChange={(e) =>
                        setSettings({ ...settings, [key]: e.target.value })
                      }
                      rows={3}
                      className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  ) : (
                    <input
                      type="text"
                      value={value}
                      onChange={(e) =>
                        setSettings({ ...settings, [key]: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* To‘lov usullari */}
          <div className="space-y-6">
            <div className="rounded-xl bg-white dark:bg-gray-900 p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-6">To'lov usullari</h2>
              {["payme", "click", "apelsin"].map((method) => (
                <div key={method} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium capitalize">{method}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {method} orqali to'lovlarni qabul qilish
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={
                        settings.paymentMethods[
                          method as keyof typeof settings.paymentMethods
                        ]
                      }
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          paymentMethods: {
                            ...settings.paymentMethods,
                            [method]: e.target.checked,
                          },
                        })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              ))}
            </div>

            {/* Xabarnomalar */}
            <div className="rounded-xl bg-white dark:bg-gray-900 p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-6">Xabarnomalar</h2>
              {[
                {
                  key: "newUser",
                  label: "Yangi foydalanuvchi",
                  desc: "Ro'yxatdan o'tganda xabar olish",
                },
                {
                  key: "newPayment",
                  label: "Yangi to'lov",
                  desc: "To'lov amalga oshirilganda xabar olish",
                },
                {
                  key: "courseCompletion",
                  label: "Kurs tugatilishi",
                  desc: "Kurs tugaganda xabar olish",
                },
              ].map(({ key, label, desc }) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{label}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {desc}
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={
                        settings.notifications[
                          key as keyof typeof settings.notifications
                        ]
                      }
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          notifications: {
                            ...settings.notifications,
                            [key]: e.target.checked,
                          },
                        })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Saqlash tugmasi */}
        <div className="mt-6">
          <button
            type="submit"
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition"
          >
            <Save size={20} />
            <span>Saqlash</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminSettings;
