"use client";
import { useTranslations } from "next-intl";
import React from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValues, RequestDto } from "@/app/api/request.dto";
import { Bounce, toast } from "react-toastify";

type Props = {};

export const Calculator = (props: Props) => {
  const t = useTranslations("ServiceCalculation");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(RequestDto),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const res = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    reset();
    toast.success(t("feedbackMessage"), {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Bounce,
    });
  };

  return (
    <section className=" relative -z-10 calculation-of-services">
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
        <form
          className="form-box flex flex-wrap"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-box-left">
            <div className="svg-and-input-boxes flex">
              <div className="svg-box-form">
                <svg
                  width={18}
                  height={24}
                  viewBox="0 0 18 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="path-default"
                    d="M17.7692 10.9542C17.7692 5.87397 13.5469 1.78767 8.44722 2.00855C3.89589 2.22943 0.167085 6.03963 0.00257884 10.6229C-0.0522565 12.9974 0.770274 15.151 2.19599 16.8076L8.22788 23.7101C8.55689 24.0966 9.16008 24.0966 9.48909 23.7101L15.5758 16.8628C16.9467 15.2614 17.7692 13.2183 17.7692 10.9542Z"
                    fill="#CFCED6"
                  />
                  <path
                    d="M9.004 7.44C10.1053 7.44 10.9453 7.706 11.524 8.238C12.112 8.76067 12.406 9.554 12.406 10.618V15H10.754V14.09C10.5393 14.4167 10.2313 14.6687 9.83 14.846C9.438 15.014 8.962 15.098 8.402 15.098C7.842 15.098 7.352 15.0047 6.932 14.818C6.512 14.622 6.18533 14.356 5.952 14.02C5.728 13.6747 5.616 13.2873 5.616 12.858C5.616 12.186 5.86333 11.6493 6.358 11.248C6.862 10.8373 7.65067 10.632 8.724 10.632H10.656V10.52C10.656 9.99733 10.4973 9.596 10.18 9.316C9.872 9.036 9.41 8.896 8.794 8.896C8.374 8.896 7.95867 8.96133 7.548 9.092C7.14667 9.22267 6.806 9.40467 6.526 9.638L5.84 8.364C6.232 8.06533 6.70333 7.83667 7.254 7.678C7.80467 7.51933 8.388 7.44 9.004 7.44ZM8.766 13.824C9.20467 13.824 9.592 13.726 9.928 13.53C10.2733 13.3247 10.516 13.0353 10.656 12.662V11.794H8.85C7.842 11.794 7.338 12.1253 7.338 12.788C7.338 13.1053 7.464 13.3573 7.716 13.544C7.968 13.7307 8.318 13.824 8.766 13.824Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="input-box">
                <input
                  {...register("from")}
                  id="from"
                  type="text"
                  aria-label={t("departureStation.title")}
                />
                <div className="label-box">
                  <label htmlFor="from" className="p-14 lh-20 regular">
                    {t("departureStation.title")}
                  </label>
                </div>
                {errors?.from && (
                  <p className="invalid-message p-14 lh-16 regular text-right">
                    {t("departureStation.required")}
                  </p>
                )}
              </div>
            </div>
            <div className="svg-and-input-boxes flex">
              <div className="svg-box-form">
                <svg
                  width={18}
                  height={23}
                  viewBox="0 0 18 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="path-default"
                    d="M17.7692 9.95423C17.7692 4.87397 13.5469 0.787671 8.44722 1.00855C3.89589 1.22943 0.167085 5.03963 0.00257884 9.62291C-0.0522565 11.9974 0.770274 14.151 2.19599 15.8076L8.22788 22.7101C8.55689 23.0966 9.16008 23.0966 9.48909 22.7101L15.5758 15.8628C16.9467 14.2614 17.7692 12.2183 17.7692 9.95423Z"
                    fill="#CFCED6"
                  />
                  <path
                    d="M9.52277 7.44C10.2508 7.44 10.8994 7.59867 11.4688 7.916C12.0474 8.23333 12.5001 8.68133 12.8268 9.26C13.1534 9.83867 13.3168 10.506 13.3168 11.262C13.3168 12.018 13.1534 12.69 12.8268 13.278C12.5001 13.8567 12.0474 14.3047 11.4688 14.622C10.8994 14.9393 10.2508 15.098 9.52277 15.098C9.00944 15.098 8.53811 15.0093 8.10877 14.832C7.68877 14.6547 7.33411 14.3887 7.04477 14.034V15H5.37877V4.612H7.12877V8.434C7.42744 8.10733 7.77744 7.86 8.17877 7.692C8.58944 7.524 9.03744 7.44 9.52277 7.44ZM9.32677 13.6C9.97077 13.6 10.4981 13.3853 10.9088 12.956C11.3288 12.5267 11.5388 11.962 11.5388 11.262C11.5388 10.562 11.3288 9.99733 10.9088 9.568C10.4981 9.13867 9.97077 8.924 9.32677 8.924C8.90677 8.924 8.52877 9.022 8.19277 9.218C7.85677 9.40467 7.59077 9.67533 7.39477 10.03C7.19877 10.3847 7.10077 10.7953 7.10077 11.262C7.10077 11.7287 7.19877 12.1393 7.39477 12.494C7.59077 12.8487 7.85677 13.124 8.19277 13.32C8.52877 13.5067 8.90677 13.6 9.32677 13.6Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="input-box">
                <input
                  {...register("to")}
                  id="to"
                  type="text"
                  aria-label={t("destinationStation.title")}
                />
                <div className="label-box">
                  <label htmlFor="to" className="p-14 lh-20 regular">
                    {t("destinationStation.title")}
                  </label>
                </div>

                {errors?.to && (
                  <p className="invalid-message p-14 lh-16 regular text-right">
                    {t("destinationStation.required")}
                  </p>
                )}
              </div>
            </div>
            <div className="svg-and-input-boxes flex">
              <div className="svg-box-form">
                <svg
                  width={19}
                  height={18}
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="path-default"
                    d="M15.3 0H18.9V18H15.3V0Z"
                    fill="#BAB9C4"
                  />
                  <path
                    className="path-default"
                    d="M11.7 0H13.5V18H11.7V0Z"
                    fill="#BAB9C4"
                  />
                  <path
                    className="path-default"
                    d="M0 0H1.8V18H0V0Z"
                    fill="#BAB9C4"
                  />
                  <path
                    className="path-default"
                    d="M3.6001 0H6.3001V18H3.6001V0Z"
                    fill="#BAB9C4"
                  />
                  <path
                    className="path-default"
                    d="M9 0H9.9V18H9V0Z"
                    fill="#BAB9C4"
                  />
                </svg>
              </div>
              <div className="input-box">
                <input
                  {...register("code")}
                  id="code"
                  type="text"
                  aria-label={t("cargoCode.title")}
                />
                <div className="label-box">
                  <label htmlFor="code" className="p-14 lh-20 regular">
                    {t("cargoCode.title")}
                  </label>
                </div>
                <p className="default-message p-14 lh-16 regular text-right">
                  {t("cargoCode.note")}
                </p>
                {errors?.code && (
                  <p className="invalid-message p-14 lh-16 regular text-right ">
                    {t("cargoCode.required")}
                  </p>
                )}
              </div>
            </div>
            <div className="svg-and-input-boxes flex">
              <div className="svg-box-form">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="path-default"
                    d="M17.9855 16.9061L15.7586 6.0663C15.655 5.61878 15.2925 5.32044 14.8264 5.32044H12.1851C12.4958 4.8232 12.703 4.1768 12.703 3.53039C12.703 1.59116 11.0457 0 9.02592 0C7.00611 0 5.34884 1.59116 5.34884 3.53039C5.34884 4.1768 5.556 4.77348 5.86674 5.32044H3.17367C2.70756 5.32044 2.34504 5.61878 2.24146 6.0663L0.0144958 16.9061C-0.0890837 17.453 0.377024 18 0.946712 18H17.0015C17.623 18 18.0891 17.453 17.9855 16.9061ZM8.97413 1.98895C9.85455 1.98895 10.5796 2.68508 10.5796 3.53039C10.5796 4.37569 9.85455 5.07182 8.97413 5.07182C8.0937 5.07182 7.36864 4.37569 7.36864 3.53039C7.36864 2.68508 8.0937 1.98895 8.97413 1.98895Z"
                    fill="#BAB9C4"
                  />
                </svg>
              </div>
              <div className="input-box">
                <input
                  {...register("weight")}
                  id="weight"
                  type="text"
                  aria-label={t("rollingStockType.title")}
                />

                <div className="label-box">
                  <label htmlFor="weight" className="p-14 lh-20 regular">
                    {t("rollingStockType.title")}
                  </label>
                </div>
                <p className="default-message p-14 lh-16 regular text-right">
                  {t("rollingStockType.note")}
                </p>
                {errors?.weight && (
                  <p className="invalid-message p-14 lh-16 regular text-right ">
                    {t("rollingStockType.required")}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="form-box-right">
            <div className="svg-and-input-boxes flex">
              <div className="svg-box-form">
                <svg
                  width={20}
                  height={18}
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="path-default"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.821 12.2989H1.90142C1.44165 12.2989 0.981884 11.954 0.981884 11.4368L0.00487119 1.03448C-0.0526001 0.459771 0.407171 0 0.924412 0H18.798C19.3727 0 19.775 0.459771 19.7175 1.03448L18.7405 11.4368C18.7405 11.954 18.3382 12.2989 17.821 12.2989ZM16.3612 14C15.2416 14 14.3619 14.92 14.3619 16C14.3619 17.12 15.2816 18 16.3612 18C17.4409 18 18.3606 17.08 18.3606 16C18.4006 14.92 17.4809 14 16.3612 14ZM5.36188 16C5.36188 17.1046 4.46645 18 3.36188 18C2.25731 18 1.36188 17.1046 1.36188 16C1.36188 14.8954 2.25731 14 3.36188 14C4.46645 14 5.36188 14.8954 5.36188 16Z"
                    fill="#BAB9C4"
                  />
                </svg>
              </div>
              <div className="input-box">
                <input
                  {...register("type")}
                  id="type"
                  type="text"
                  aria-label={t("stockOwnership.title")}
                />
                <div className="label-box">
                  <label htmlFor="type" className="p-14 lh-20 regular">
                    {t("stockOwnership.title")}
                  </label>
                </div>
                <p className="default-message p-14 lh-16 regular text-right">
                  {t("stockOwnership.note")}
                </p>
                {errors?.type && (
                  <p className="invalid-message p-14 lh-16 regular text-right ">
                    {t("stockOwnership.required")}
                  </p>
                )}
              </div>
            </div>
            <div className="svg-and-input-boxes flex">
              <div className="svg-box-form">
                <svg
                  width={20}
                  height={18}
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="path-default"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.5403 11.207C19.7702 11.7242 19.3679 12.2989 18.7932 12.2989V12.3564H1.09196C0.459773 12.3564 0 11.8391 0 11.2644V1.09196C0 0.459773 0.459773 0 1.09196 0H14.5978C15.0001 0 15.4024 0.287358 15.5748 0.689659L19.5403 11.207ZM3.56324 1.49426C3.10347 1.49426 2.75864 1.83909 2.75864 2.29886V6.14946C2.75864 6.60923 3.10347 6.95406 3.56324 6.95406H9.13798C9.59775 6.95406 9.94258 6.60923 9.94258 6.14946V2.29886C9.94258 1.83909 9.59775 1.49426 9.13798 1.49426H3.56324ZM3 18C4.10457 18 5 17.1046 5 16C5 14.8954 4.10457 14 3 14C1.89543 14 1 14.8954 1 16C1 17.1046 1.89543 18 3 18ZM10 16C10 14.92 10.8797 14 11.9994 14C13.119 14 14.0387 14.92 13.9987 16C13.9987 17.08 13.079 18 11.9994 18C10.9197 18 10 17.12 10 16ZM15 16C15 14.92 15.8797 14 16.9994 14C18.119 14 19.0387 14.92 18.9987 16C18.9987 17.08 18.079 18 16.9994 18C15.9197 18 15 17.12 15 16Z"
                    fill="#BAB9C4"
                  />
                </svg>
              </div>
              <div className="input-box">
                <input
                  {...register("options")}
                  id="options"
                  type="text"
                  aria-label={t("stockOwnership.title")}
                />
                <div className="label-box">
                  <label htmlFor="options" className="p-14 lh-20 regular">
                    {t("stockOwnership.title")}
                  </label>
                </div>
                <p className="default-message  p-14 lh-16 regular text-right">
                  {t("stockOwnership.note")}
                </p>
                {errors?.options && (
                  <p className="invalid-message p-14 lh-16 regular text-right ">
                    {t("stockOwnership.required")}
                  </p>
                )}
              </div>
            </div>
            <div className="svg-and-input-boxes flex">
              <div className="svg-box-form">
                <svg
                  width={19}
                  height={16}
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="path-default"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 0H15V12H0V0ZM17.455 13.7758V1.92082H19V15.3626H1.92089V13.7758H17.455Z"
                    fill="#BAB9C4"
                  />
                </svg>
              </div>
              <div className="input-box">
                <input
                  {...register("domains")}
                  id="domains"
                  type="text"
                  aria-label={t("paidTerritories.title")}
                />
                <div className="label-box">
                  <label htmlFor="domains" className="p-14 lh-20 regular">
                    {t("paidTerritories.title")}
                  </label>
                </div>
                {errors?.domains && (
                  <p className="invalid-message p-14 lh-16 regular text-right ">
                    {t("paidTerritories.required")}
                  </p>
                )}
              </div>
            </div>
            <div className="svg-and-input-boxes flex">
              <div className="svg-box-form">
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="path-default"
                    d="M9.93984 8.84083C9.39567 8.41331 8.82712 8.01466 8.31445 7.5443C8.10749 7.35537 7.95651 7.36018 7.72034 7.51495C7.53415 7.63717 7.36045 7.7763 7.2013 7.93515C7.03933 8.09608 6.86696 8.24292 6.67967 8.37249C6.5399 8.46914 6.40532 8.48144 6.25403 8.38854C6.07275 8.2786 5.9194 8.1328 5.75613 8.00304C4.79936 7.25545 4.07756 6.32787 3.60761 5.20782C3.49169 4.92992 3.36523 4.65544 3.28372 4.36519C3.23972 4.20831 3.27678 4.07866 3.40222 3.97734C3.48503 3.90967 3.572 3.84764 3.66143 3.78598C3.93177 3.6038 4.23221 3.47124 4.49081 3.26726C4.77551 3.03966 4.82077 2.88871 4.66251 2.55936C4.48113 2.18395 4.33735 1.79167 4.19075 1.40147C4.08364 1.11488 3.99197 0.82561 3.86625 0.546235C3.79911 0.393382 3.68552 0.316177 3.52132 0.308983C3.22268 0.296572 2.92695 0.314652 2.63476 0.375836C2.49515 0.404901 2.37071 0.466301 2.25519 0.551583C2.03788 0.714196 1.8623 0.915648 1.69749 1.12874C1.32326 1.61832 1.08345 2.16321 1.10992 2.78575C1.14997 3.65074 1.34676 4.48926 1.62255 5.3021C1.86204 6.0068 2.23968 6.64215 2.65848 7.25364C3.22067 8.07705 3.84877 8.84527 4.60942 9.49822C5.11501 9.93246 5.70284 10.2363 6.28111 10.5538C6.66303 10.7616 7.05035 10.9501 7.48868 11.0161C7.58247 11.0252 7.67834 11.0371 7.77287 11.0414C8.34604 11.0601 8.86984 10.891 9.37227 10.6311C9.64125 10.4913 9.84658 10.2918 9.96221 10.0062C10.0254 9.85291 10.0906 9.70246 10.1419 9.5449C10.2655 9.17285 10.2469 9.0799 9.93984 8.84083Z"
                    fill="#54535F"
                  />
                </svg>
              </div>
              <div className="input-box">
                <input
                  {...register("contact")}
                  id="contact"
                  type="text"
                  aria-label={t("contactInfo.title")}
                />
                <div className="label-box">
                  <label htmlFor="contact" className="p-14 lh-20 regular">
                    {t("contactInfo.title")}
                  </label>
                </div>
                <p className="default-message  p-14 lh-16 regular text-right">
                  {t("contactInfo.note")}
                </p>
                {errors?.contact && (
                  <p className="invalid-message p-14 lh-16 regular text-right ">
                    {t("contactInfo.warning")}
                  </p>
                )}
              </div>
            </div>
            <div className="submit-btn-box flex">
              <button
                className={
                  isValid
                    ? "submit-btn"
                    : "submit-btn !bg-gray-300 !text-black transition-opacity"
                }
                type="submit"
              >
                {t("calculateButton")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
