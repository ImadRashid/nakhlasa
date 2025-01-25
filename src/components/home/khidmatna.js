import Image from "next/image";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const Khidmatna = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const [formStep, setFormStep] = useState(1);

  // const {
  //   handleSubmit,
  //   control,
  //   reset,
  //   formState: { errors },
  // } = useForm();

  const {
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const servicesData = [
    {
      img: "/assets/images/service1.svg",
      heading: "تمويل عقاري",
      desc: "نوفر لك تمويلك، نحقق لك طموحك ! من خلال العمل مع مجموعة واسعة من الشركاء، قادرين على تزويد عملائنا بإمكانية الوصول إلى أفضل الخيارات الممكنة لتلبية احتياجاتهم المالية.",
      link: "اطلب تمويلك",
    },
    {
      img: "/assets/images/service2.svg",
      heading: "تمويل سيارات",
      desc: "نوفر لك تمويلك، نحقق لك طموحك ! من خلال العمل مع مجموعة واسعة من الشركاء، قادرين على تزويد عملائنا بإمكانية الوصول إلى أفضل الخيارات الممكنة لتلبية احتياجاتهم المالية",
      link: "اطلب تمويلك ",
    },
    {
      img: "/assets/images/service3.svg",
      heading: "تمويل شخصي ",
      desc: "ملتزمون بتوفير أفضل خيارات القروض الممكنة والمصممة خصيصًا لتلبية احتياجاتك. تضمن عمليتنا المبسطة السهولة والكفاءة، مما يوفر لك إمكانية الوصول السريع إلى الأموال التي تحتاجها",
      link: " اطلب تمويلك ",
    },
  ];

  const openModal = (service) => {
    setCurrentService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentService(null);
    setFormStep(1);
    reset();
  };

  const handleNextStep = () => {
    setFormStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setFormStep((prevStep) => prevStep - 1);
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    closeModal();
  };
  const watchedValues = watch([
    "service",
    "service1",
    "service2",
    "service3",
    "service4",
    "jawad",
  ]); // Replace with actual field names
  const isNextButtonDisabled = watchedValues.some((value) => !value);
  return (
    <section className="px-[18px] md:px-[170px] mb-20">
      <div className="flex justify-end">
        <div className="max-w-[343px] md:max-w-[373px] gap-4 md:gap-5 flex flex-col justify-end">
          <h2 className="text-[50px] md:text-[76px] font-[800] text-end">
            خدماتنا
          </h2>
          <p className="text-[14px] md:text-[18px] text-end text-[#979797] font-semibold">
            تسهيلات تمويلية لحياتك اليومية، مع منصة نخلصها نعمل منذ عام 2018 في
            قطاع التمويل وسداد الديون
          </p>
        </div>
      </div>
      <div className="flex 2xl:justify-between gap-[70px] flex-wrap flex-row-reverse mt-12 md:mt-24">
        {servicesData.map((item, ind) => (
          <div
            key={ind}
            className={`flex flex-col items-end w-[450px] ${
              ind === 2 ? "md:mt-[50px]" : ""
            }`}
          >
            <Image
              className="h-[550px]"
              src={item.img}
              alt="servicesimg"
              width={450}
              height={550}
            />
            <h3 className="font-bold text-[32px] md:text-[42px] my-5">
              {item.heading}
            </h3>
            <p className="text-[14px] md:text-[18px] text-end text-[#979797] font-semibold">
              {item.desc}
            </p>
            <button
              onClick={() => openModal(item)}
              className="mt-7 flex justify-center items-center w-[142px] h-[34px] md:w-[180px] md:h-[56px] font-semibold text-[14px] md:text-[18px] bg-[#2445CD] text-white rounded-[50px] transition-all duration-300 ease-in-out hover:bg-[#1A3BAF] hover:scale-105 hover:shadow-lg"
            >
              {item.link}
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-[90%] md:w-[370px] p-6 rounded-md shadow-lg relative">
            {/* <h2 className="text-xl font-bold mb-4">{currentService.heading}</h2> */}

            <div className="flex items-center justify-between">
              <Image
                className="w-[115px] cursor-pointer"
                src="/assets/images/logo.svg"
                width={115}
                height={48}
                alt="logo"
              />
              <button
                // onClick={handlePreviousStep}
                onClick={formStep === 1 ? closeModal : handlePreviousStep}
                className=" text-[14px] bg-[#2445CD] px-[15px] py-[8px] text-white rounded-full"
              >
                رجوع
              </button>
            </div>

            <div className="flex flex-row-reverse gap-2 mt-[42px] ">
              <div className="grow bg-[#2445CD] rounded-full h-[7px]"></div>
              <div className="grow bg-[#EDEDFC] flex justify-end rounded-full h-[7px]">
                <div
                  className={`${
                    formStep > 1 ? "bg-[#FF5101]" : "bg-[#EDEDFC]"
                  } w-[25%] h-full rounded-full`}
                ></div>
              </div>
            </div>
            <div className="flex flex-row-reverse text-[#101827] text-[12px] font-[600] mt-[12px] gap-2  ">
              <div className="grow flex justify-end ">ادخل البيانات</div>
              <div className="grow flex justify-end ">الدفع</div>
            </div>
            {/* Form Steps */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {formStep === 1 && (
                <div className="mb-4 flex flex-col gap-2 mt-[20px] py-[28px] border-[1.5px] border-[#EAECEF] rounded-[8px] px-[17px]">
                  <div className="flex flex-col">
                    <label
                      className="block self-end text-[13px] font-medium mb-1"
                      htmlFor="service"
                    >
                      الراتب
                    </label>
                    <Controller
                      name="service"
                      control={control}
                      rules={{ required: "براہ کرم ایک سروس منتخب کریں" }}
                      render={({ field }) => (
                        <div className="relative">
                          <select
                            {...field}
                            id="service"
                            className="w-full border-[#EAECEF] text-[12px]  border-[1px] border-gray-300 rounded p-2 h-[40px] pr-2 text-right appearance-none"
                            style={{
                              backgroundImage: `url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>')`,
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "8px center",
                              backgroundSize: "16px 16px",
                            }}
                          >
                            <option value="">ایک آپشن منتخب کریں</option>
                            <option value="real_estate">
                              جائداد غیر منقولہ
                            </option>
                            <option value="car_financing">
                              گاڑی کی فنانسنگ
                            </option>
                            <option value="personal_financing">
                              ذاتی فنانسنگ
                            </option>
                          </select>
                        </div>
                      )}
                    />
                    {errors.service && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label
                      className="block self-end text-[13px] font-medium mb-1"
                      htmlFor="service1"
                    >
                      الراتب
                    </label>
                    <Controller
                      name="service1"
                      control={control}
                      rules={{ required: "براہ کرم ایک سروس منتخب کریں" }}
                      render={({ field }) => (
                        <div className="relative">
                          <select
                            {...field}
                            id="service"
                            className="w-full border-[#EAECEF] text-[12px]  border-[1px] border-gray-300 rounded p-2 h-[40px] pr-2 text-right appearance-none"
                            style={{
                              backgroundImage: `url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>')`,
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "8px center",
                              backgroundSize: "16px 16px",
                            }}
                          >
                            <option value="">ایک آپشن منتخب کریں</option>
                            <option value="real_estate">
                              جائداد غیر منقولہ
                            </option>
                            <option value="car_financing">
                              گاڑی کی فنانسنگ
                            </option>
                            <option value="personal_financing">
                              ذاتی فنانسنگ
                            </option>
                          </select>
                        </div>
                      )}
                    />
                    {errors.service && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label
                      className="block self-end text-[13px] font-medium mb-1"
                      htmlFor="service2"
                    >
                      الراتب
                    </label>
                    <Controller
                      name="service2"
                      control={control}
                      rules={{ required: "براہ کرم ایک سروس منتخب کریں" }}
                      render={({ field }) => (
                        <div className="relative">
                          <select
                            {...field}
                            id="service"
                            className="w-full border-[#EAECEF] text-[12px]  border-[1px] border-gray-300 rounded p-2 h-[40px] pr-2 text-right appearance-none"
                            style={{
                              backgroundImage: `url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>')`,
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "8px center",
                              backgroundSize: "16px 16px",
                            }}
                          >
                            <option value="">ایک آپشن منتخب کریں</option>
                            <option value="real_estate">
                              جائداد غیر منقولہ
                            </option>
                            <option value="car_financing">
                              گاڑی کی فنانسنگ
                            </option>
                            <option value="personal_financing">
                              ذاتی فنانسنگ
                            </option>
                          </select>
                        </div>
                      )}
                    />
                    {errors.service && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label
                      className="block self-end text-[13px] font-medium mb-1"
                      htmlFor="service3"
                    >
                      الراتب
                    </label>
                    <Controller
                      name="service3"
                      control={control}
                      rules={{ required: "براہ کرم ایک سروس منتخب کریں" }}
                      render={({ field }) => (
                        <div className="relative">
                          <select
                            {...field}
                            id="service"
                            className="w-full border-[#EAECEF] text-[12px]  border-[1px] border-gray-300 rounded p-2 h-[40px] pr-2 text-right appearance-none"
                            style={{
                              backgroundImage: `url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>')`,
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "8px center",
                              backgroundSize: "16px 16px",
                            }}
                          >
                            <option value="">ایک آپشن منتخب کریں</option>
                            <option value="real_estate">
                              جائداد غیر منقولہ
                            </option>
                            <option value="car_financing">
                              گاڑی کی فنانسنگ
                            </option>
                            <option value="personal_financing">
                              ذاتی فنانسنگ
                            </option>
                          </select>
                        </div>
                      )}
                    />
                    {errors.service && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label
                      className="block self-end text-[13px] font-medium mb-1"
                      htmlFor="service4"
                    >
                      الراتب
                    </label>
                    <Controller
                      name="service4"
                      control={control}
                      rules={{ required: "براہ کرم ایک سروس منتخب کریں" }}
                      render={({ field }) => (
                        <div className="relative">
                          <select
                            {...field}
                            id="service4"
                            className="w-full border-[#EAECEF] text-[12px]  border-[1px] border-gray-300 rounded p-2 h-[40px] pr-2 text-right appearance-none"
                            style={{
                              backgroundImage: `url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>')`,
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "8px center",
                              backgroundSize: "16px 16px",
                            }}
                          >
                            <option value="">ایک آپشن منتخب کریں</option>
                            <option value="real_estate">
                              جائداد غیر منقولہ
                            </option>
                            <option value="car_financing">
                              گاڑی کی فنانسنگ
                            </option>
                            <option value="personal_financing">
                              ذاتی فنانسنگ
                            </option>
                          </select>
                        </div>
                      )}
                    />
                    {errors.service && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label
                      className="block self-end text-[13px] font-medium mb-1"
                      htmlFor="jawad"
                    >
                      الراتب
                    </label>
                    <Controller
                      name="jawad"
                      control={control}
                      rules={{ required: "براہ کرم ایک سروس منتخب کریں" }}
                      render={({ field }) => (
                        <div className="relative">
                          <select
                            {...field}
                            id="jawad"
                            className="w-full border-[#EAECEF] text-[12px]  border-[1px] border-gray-300 rounded p-2 h-[40px] pr-2 text-right appearance-none"
                            style={{
                              backgroundImage: `url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>')`,
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "8px center",
                              backgroundSize: "16px 16px",
                            }}
                          >
                            <option value="">اdefault</option>
                            <option value="real_estate">
                              جائداد غیر منقولہ
                            </option>
                            <option value="car_financing">
                              گاڑی کی فنانسنگ
                            </option>
                            <option value="personal_financing">
                              ذاتی فنانسنگ
                            </option>
                          </select>
                        </div>
                      )}
                    />
                    {errors.service && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.service.message}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {formStep === 2 && (
                <div className="mb-4">
                  <p className="text-sm">Thank you for selecting a service!</p>
                </div>
              )}

              <div className="flex justify-between mt-6">
                {formStep > 1 && (
                  <button
                    type="button"
                    onClick={handlePreviousStep}
                    className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400"
                  >
                    Previous
                  </button>
                )}
                {formStep < 2 && (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    // className="bg-[#2445CD] text-white py-2 px-4 rounded hover:bg-[#1A3BAF]"
                    disabled={isNextButtonDisabled}
                    className={` py-3 mt-2 text-white rounded w-full rounded-full ${
                      isNextButtonDisabled
                        ? "bg-[#2445CD] opacity-50 cursor-not-allowed"
                        : "bg-[#2445CD] opacity-100 hover:bg-blue-700"
                    }`}
                  >
                    {/* Next */}
                    التالي
                  </button>
                )}
                {formStep === 2 && (
                  <button
                    type="submit"
                    className="bg-[#2445CD] text-white py-2 px-4 rounded hover:bg-[#1A3BAF]"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Khidmatna;
