import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowRight,
  CreditCard,
  ShieldCheck,
  Calendar,
  Info,
} from "lucide-react";
import { courses } from "../data/courses";

const CheckoutPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courses.find((c) => c.id === Number(courseId));

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Update page title
    document.title = course
      ? `Checkout: ${course.title} - Abdulloh SMM`
      : "Checkout - Abdulloh SMM";
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [course]);

  if (!course) {
    return (
      <div className="container py-32 text-center">
        <h1 className="text-2xl font-bold mb-4">Kurs topilmadi</h1>
        <Link to="/courses" className="btn btn-primary">
          Barcha kurslar
        </Link>
      </div>
    );
  }

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // Navigate to success page or show success message
    }, 2000);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">To'lov</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="card p-6 mb-8">
                <h2 className="text-xl font-semibold mb-6">
                  To'lov ma'lumotlari
                </h2>

                <form onSubmit={handlePayment}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">
                        To'lov usulini tanlang
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("card")}
                          className={`flex flex-col items-center justify-center p-4 rounded-lg border transition-colors ${
                            paymentMethod === "card"
                              ? "border-primary bg-primary/5"
                              : "border-border hover:bg-muted"
                          }`}
                        >
                          <CreditCard
                            size={24}
                            className={
                              paymentMethod === "card"
                                ? "text-primary"
                                : "text-muted-foreground"
                            }
                          />
                          <span className="mt-2 text-sm font-medium">
                            Bank karta
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setPaymentMethod("payme")}
                          className={`flex flex-col items-center justify-center p-4 rounded-lg border transition-colors ${
                            paymentMethod === "payme"
                              ? "border-primary bg-primary/5"
                              : "border-border hover:bg-muted"
                          }`}
                        >
                          <div
                            className={`font-bold text-xl ${
                              paymentMethod === "payme"
                                ? "text-primary"
                                : "text-muted-foreground"
                            }`}
                          >
                            Payme
                          </div>
                          <span className="mt-2 text-sm font-medium">
                            Payme
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setPaymentMethod("click")}
                          className={`flex flex-col items-center justify-center p-4 rounded-lg border transition-colors ${
                            paymentMethod === "click"
                              ? "border-primary bg-primary/5"
                              : "border-border hover:bg-muted"
                          }`}
                        >
                          <div
                            className={`font-bold text-xl ${
                              paymentMethod === "click"
                                ? "text-primary"
                                : "text-muted-foreground"
                            }`}
                          >
                            Click
                          </div>
                          <span className="mt-2 text-sm font-medium">
                            Click
                          </span>
                        </button>
                      </div>
                    </div>

                    {paymentMethod === "card" && (
                      <div>
                        <h3 className="text-lg font-medium mb-4">
                          Karta ma'lumotlari
                        </h3>

                        <div className="space-y-4">
                          <div>
                            <label
                              htmlFor="cardNumber"
                              className="block text-sm font-medium mb-1"
                            >
                              Karta raqami
                            </label>
                            <input
                              type="text"
                              id="cardNumber"
                              className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all"
                              placeholder="0000 0000 0000 0000"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label
                                htmlFor="expiryDate"
                                className="block text-sm font-medium mb-1"
                              >
                                Amal qilish muddati
                              </label>
                              <input
                                type="text"
                                id="expiryDate"
                                className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all"
                                placeholder="MM/YY"
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="cvv"
                                className="block text-sm font-medium mb-1"
                              >
                                CVV
                              </label>
                              <input
                                type="text"
                                id="cvv"
                                className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all"
                                placeholder="123"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="cardholderName"
                              className="block text-sm font-medium mb-1"
                            >
                              Karta egasining ismi
                            </label>
                            <input
                              type="text"
                              id="cardholderName"
                              className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all"
                              placeholder="ABDULLOH SAYFUDDINOV"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {(paymentMethod === "payme" ||
                      paymentMethod === "click") && (
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <div className="flex items-start gap-3">
                          <Info
                            size={20}
                            className="text-muted-foreground mt-0.5"
                          />
                          <p className="text-muted-foreground text-sm">
                            "To'lash" tugmasini bosgandan so'ng{" "}
                            {paymentMethod === "payme" ? "Payme" : "Click"}{" "}
                            to'lov sahifasiga yo'naltirilasiz va to'lovni
                            yakunlagach kursga kirishingiz mumkin bo'ladi.
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-3 pt-2">
                      <ShieldCheck size={20} className="text-primary" />
                      <p className="text-sm text-muted-foreground">
                        Barcha to'lovlaringiz xavfsiz va shifrlangan
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={isProcessing}
                      className={`btn btn-primary w-full ${
                        isProcessing ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isProcessing ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          To'lov amalga oshirilmoqda...
                        </>
                      ) : (
                        <>
                          To'lash ({course.price.toLocaleString()} so'm)
                          <ArrowRight size={16} className="ml-2" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="card sticky top-24">
                <div className="aspect-video relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar size={16} className="mr-1" />
                    <span>Doimiy kirish</span>
                  </div>

                  <div className="border-t border-border pt-4 mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted-foreground">Kurs narxi</span>
                      <span>{course.price.toLocaleString()} so'm</span>
                    </div>

                    <div className="flex justify-between items-center font-semibold text-lg mt-4 pt-4 border-t border-border">
                      <span>Jami</span>
                      <span>{course.price.toLocaleString()} so'm</span>
                    </div>
                  </div>

                  <div className="mt-6 bg-muted/30 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Info size={20} className="text-primary mt-0.5" />
                      <div>
                        <p className="text-sm mb-1">
                          To'lovdan so'ng sizga quyidagilar taqdim etiladi:
                        </p>
                        <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
                          <li>Barcha video darslarga kirish huquqi</li>
                          <li>Qo'shimcha o'quv materiallari</li>
                          <li>Sertifikat olish imkoniyati</li>
                          <li>O'quvchilar chat guruhiga a'zolik</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
