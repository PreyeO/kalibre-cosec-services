import React from "react";
import ColoredTitle from "../../ui/typography/colored-title";
import NewsletterForm from "./NewsletterForm";

const NewsLetter = () => {
  return (
    <section className="bg-[#1E3A8A] md:px-[50px] px-5 md:py-[50px] pt-[35px]   ">
      <div className="md:flex flex-row ">
        <div className="w-[256px] md:w-[640px] flex flex-col gap-[10px] mb-[30px] lg:mb-0 ">
          <ColoredTitle title="SUBSCRIBE TO OUR Newsletter" />
          <p className="text-[26px] md:text-[40px] leading-[32px] md:leading-[48px] text-white">
            <span className="text-[#7FA8F6]">Join decision-makers</span> staying
            ahead in governance, ESG, and compliance
          </p>
          <div className="max-w-[359px] mt-[30px] flex flex-col gap-[10px]">
            <NewsletterForm />
            <p className="text-[12px] font-normal font-primary text-white/30">
              By subscribing to{" "}
              <span className="font-semibold text-[#F67D30]">
                Boardroom & Beyond Insights
              </span>{" "}
              you agree to the processing of our personal data as describe on
              our privacy policy
            </p>
          </div>
        </div>
        <div
          className="min-h-[300px] bg-[url('/news-image.svg')] bg-cover bg-center bg-no-repeat mix-blend-overlay w-full"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default NewsLetter;
