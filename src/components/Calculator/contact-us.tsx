"use client";
import { useTranslations } from "next-intl";
import { cleanPhoneNumber } from "@/lib";
import { phone } from "@/lib/contents";

interface PhoneIconProps extends React.SVGProps<SVGSVGElement> {}

const PhoneIcon: React.FC<PhoneIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
};

export const ContactUs = () => {
  const t = useTranslations("ServiceCalculation");

  return (
    <section className="relative calculation-of-services">
      <div className="container">
        <h2
          id="calculation-of-services"
          className="h-36 lh-60 extra-bold text-color-2e75ff"
        >
          {t("main")}
        </h2>
        <p className="calculation-of-services-paragraph p-17 lh-36 medium">
          {t("description")}
          <span className="regular text-color-8C8B9C">{t("componentOne")}</span>
        </p>
        <p className="p-17 lh-36 medium">{t("componentOne")}</p>
        <div className="flex py-5">
          <div className="bg-card text-card-foreground">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className=" text-black">{t("contactUs")}</p>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-6 w-6 text-primary" />
                  <p className="text-3xl font-bold">{phone}</p>
                </div>
              </div>

              <a
                href={`tel:${cleanPhoneNumber(phone)}`}
                className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white bg-gray-600 shadow   focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {t("callNow")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
