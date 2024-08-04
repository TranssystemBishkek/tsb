import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

type Props = {};

export const AboutUs = (props: Props) => {
  const t = useTranslations("AboutUs");
  return (
    <section className="about-us z-0">
      <div className="container">
        <div className="flex flex-wrap about-us-wrap">
          <div className="">
            <Image
              width={538}
              height={664}
              src="/assets/images/moving-train.jpg"
              alt="moving train on railway with high column of smoke flowing river hills and railway on the foreground"
            />
          </div>
          <div className="about-us-description-box">
            <h2
              id="about-us"
              className="about-us-title h-50 lh-60 extra-bold text-white"
            >
              {t("main")}
            </h2>
            <span className="h-30 lh-36 bold text-white">{t("mission")}</span>
            <p className="p-17 lh-30 medium">{t("lineOne")}</p>
            <p className="p-17 lh-30 regular">{t("lineTwo")}</p>
            <p className="p-17 lh-30 regular">{t("lineThree")}</p>
          </div>
        </div>
        <div className="about-us-achievements flex flex-wrap">
          <div className="about-us-achievement flex">
            <div className="about-us-img-box">
              <img
                src="./assets/images/co-founders-icon.svg"
                alt="Cоучредители Ассоциации экспедиторов Кыргызстана"
              />
            </div>
            <p className="p-17 lh-30 regular">{t("lineFour")}</p>
          </div>
          <div className="about-us-achievement flex">
            <div className="about-us-img-box">
              <img
                src="./assets/images/more-10-years-icon.svg"
                alt="Более 10 лет сотрудничества с Международной федерацией экспедиторских
          ассоциаций FIATA"
              />
            </div>
            <p className="p-17 lh-30 regular">{t("lineFive")}</p>
          </div>
          <div className="about-us-achievement flex">
            <div className="about-us-img-box">
              <img
                src="./assets/images/membership-icon.svg"
                alt="Более 10 лет сотрудничества с Международной федерацией экспедиторских
          ассоциаций FIATA"
              />
            </div>
            <p className="p-17 lh-30 regular">{t("lineSix")}</p>
          </div>
          <div className="about-us-achievement flex">
            <div className="about-us-img-box">
              <img
                src="./assets/images/choose-of-year-icon.svg"
                alt="Победители конкурса «Выбор года» 2004, 2005, 2011 гг."
              />
            </div>
            <p className="p-17 lh-30 regular">{t("lineSeven")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
