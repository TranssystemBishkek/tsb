import { useTranslations } from "next-intl";
import React from "react";

type Props = {};

export const Services = (props: Props) => {
  const t = useTranslations("Services");

  return (
    <section className="our-services">
      <div className="container">
        <div className="our-services-wrap">
          <div className="our-services-title">
            <h2
              id="our-services"
              className="h-36 lh-60 extra-bold text-color-2e75ff"
            >
              {t("main")}
            </h2>
          </div>
          <div className="our-services-description">
            <p className="p-20 lh-36 medium">{t("description")}</p>
            <p className="p-18 lh-34 bold">{t("lineOne")}</p>
          </div>
        </div>
      </div>
      <div className="route">
        <div className="container">
          <div className="route-cards">
            <div className="route-card first-point">
              <p className="p-18 lh-26 medium">{t("lineTwo")}</p>
            </div>
            <div className="route-card second-point">
              <p className="p-18 lh-26 medium">{t("lineThree")}</p>
            </div>
            <div className="route-card third-point">
              <p className="p-18 lh-26 medium">{t("lineFour")}</p>
            </div>
            <div className="route-card fourth-point">
              <p className="p-18 lh-26 medium">{t("lineFive")}</p>
            </div>
          </div>
          <div className="route-end">
            <p className="route-end-item p-18 ln-32 medium">{t("lineSix")}</p>
            <p className="route-end-item p-18 ln-32 medium">{t("lineSeven")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
