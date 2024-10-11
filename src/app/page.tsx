import React from "react";
import Head from "next/head";
import {
  ArrowRightIcon,
  AcademicCapIcon,
  PencilAltIcon,
  RefreshIcon,
  ChatIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface InfoCardProps {
  title: string;
  description: string;
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  alt: string;
}

const Home: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900"
      dir="rtl"
    >
      <Head>
        <title>خدمة إعداد البحث العلمي - لطلاب العالم العربي</title>
        <meta
          name="description"
          content="خدمة احترافية لمساعدة الطلاب في إعداد بحوثهم العلمية بأسلوب منهجي."
        />
        <meta property="og:title" content="خدمة إعداد البحث العلمي" />
        <meta
          property="og:description"
          content="خدمة احترافية لمساعدة الطلاب في إعداد بحوثهم العلمية بأسلوب منهجي."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="خدمة إعداد البحث العلمي" />
        <meta
          property="twitter:description"
          content="خدمة احترافية لمساعدة الطلاب في إعداد بحوثهم العلمية."
        />
        <meta property="twitter:image" content="/twitter-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <header className="bg-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-yellow-600">
            خدمة إعداد البحوث العلمية
          </h1>
          <nav className="hidden md:flex space-x-reverse space-x-6">
            <a
              href="#service"
              className="hover:text-yellow-600 transition duration-300"
              aria-label="خدماتنا المميزة"
            >
              الخدمات
            </a>
            <a
              href="#info"
              className="hover:text-yellow-600 transition duration-300"
              aria-label="معلومات مفيدة"
            >
              معلومات مفيدة
            </a>
            <a
              href="#contact"
              className="hover:text-yellow-600 transition duration-300"
              aria-label="تواصل معنا"
            >
              تواصل معنا
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white min-h-screen flex flex-col justify-center items-center px-4 pt-16">
        <div className="text-center z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            أنت على بعد خطوة من بحث علمي مميز!
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            نحن هنا لدعمك في كل خطوة من خطوات إعداد البحث.
          </p>
          <a
            href="#service"
            className="bg-white text-yellow-600 py-3 px-8 rounded-full text-lg font-semibold flex items-center hover:bg-gray-100 transition duration-300 shadow-lg"
            aria-label="اكتشف الخدمة"
          >
            اكتشف الخدمة
            <ArrowRightIcon className="h-5 w-5 mr-2" />
          </a>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,170.7C672,149,768,107,864,96C960,85,1056,107,1152,122.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Service Section */}
      <section id="service" className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center">
            خدماتنا المميزة
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={
                <AcademicCapIcon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              }
              title="اختيار الموضوع"
              description="نساعدك في اختيار موضوع بحث مناسب وجديد لتخصصك الأكاديمي."
            />
            <ServiceCard
              icon={
                <PencilAltIcon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              }
              title="الإعداد المنهجي"
              description="نقدم خطة بحث متكاملة تشمل المنهجية العلمية اللازمة."
            />
            <ServiceCard
              icon={
                <RefreshIcon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              }
              title="المراجعة والتحسين"
              description="نقوم بمراجعة وتحسين البحث لضمان جودته الأكاديمية."
            />
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="info" className="py-16 bg-gray-100 relative">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">
            معلومات مفيدة للطلاب
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InfoCard
              title="كيفية تنظيم الوقت"
              description="استخدم جدولًا زمنيًا لتنظيم وقتك وإدارة المهام. أدوات مثل Trello وGoogle Calendar مفيدة جدًا."
            />
            <InfoCard
              title="مصادر البحث"
              description="ابحث في مصادر موثوقة مثل Google Scholar وPubMed للحصول على مراجع عالية الجودة."
            />
            <InfoCard
              title="أدوات التحليل"
              description="استخدم أدوات تحليل البيانات مثل SPSS وExcel لتحليل بياناتك بطريقة علمية دقيقة."
            />
            <InfoCard
              title="تجنب الانتحال"
              description="تأكد من توثيق جميع المصادر باستخدام أدوات مثل Grammarly وTurnitin لتجنب السرقة الأدبية."
            />
          </div>
        </div>
      </section>

      {/* New Contact Us Section */}
      <section id="reach-out" className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">تواصل معنا مباشرة</h3>
          <p className="mb-8 text-lg">
            يمكنك التواصل معنا على الفور عبر المنصات الاجتماعية التالية
          </p>
          <div className="flex justify-center space-x-reverse space-x-8">
            <a
              href="https://t.me/Jeogooussama"
              className="bg-blue-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-blue-600 transition duration-300 flex items-center space-x-reverse space-x-3"
              aria-label="تواصل معنا على Telegram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z"
                />
              </svg>
              <span>Telegram</span>
            </a>

            <a
              href="https://web.facebook.com/profile.php?id=100095660198183"
              className="bg-blue-600 text-white py-3 px-6 rounded-full shadow-md hover:bg-blue-700 transition duration-300 flex items-center space-x-reverse space-x-3"
              aria-label="تواصل معنا على Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M18 2h-4a6 6 0 00-6 6v2H7v4h1v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3V2z" />
              </svg>
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2024 خدمة إعداد البحث العلمي. جميع الحقوق محفوظة.</p>
      </footer>

      {/* Floating Chat Button */}
      <div className="fixed bottom-4 left-4 z-50">
        <button
          className="bg-yellow-500 text-white p-4 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
          aria-label="Open chat"
        >
          <ChatIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center transform hover:-translate-y-1">
    {icon}
    <h4 className="text-xl font-bold mb-4">{title}</h4>
    <p>{description}</p>
  </div>
);

const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
    <h4 className="text-xl font-bold mb-2">{title}</h4>
    <p>{description}</p>
  </div>
);

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, alt }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white p-3 rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-110"
    aria-label={alt}
  >
    {icon}
  </a>
);

export default Home;
