import React from "react";
import TextGroup from "../ui/legal/textGroup";
import Heading from "../ui/typography/Heading";
import BodyContent from "../ui/typography/BodyContent";
import ListingGroup from "../ui/legal/listingGroup";
import { dataCollectionList, privacyListSeven } from "@/data";

const PrivacySection = () => {
  return (
    <section className="md:pt-[66px] pt-[35px]  md:px-[50px] px-5  md:pb-[76px] pb-[35px]">
      <div className=" max-w-[1133px] flex flex-col">
        <div className="flex flex-col md:gap-[25px] gap-4 md:pb-[50px] pb-6">
          <Heading
            heading="Introduction"
            className="text-[#122847] md:text-[54px] text-[32px] md:leading-[60px] leading-[38px] "
          />
          <BodyContent className="md:text-lg md:leading-[26px] text-[#3A3A3A] text-sm leading-[22px]">
            This is the Kalibre CoSec Limited (“Kalibre,” “we,” “us,” or “our”)
            Privacy Policy. This Privacy Policy applies to our website {""}
            <a
              href="https://www.kalibrecosec.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              www.kalibrecosec.org
            </a>{" "}
            and all related sites, services and tools regardless of how you
            access or use them. Kalibre respects your privacy and is committed
            to protecting your personal data. This privacy notice will inform
            you as to how we look after your personal data and tell you about
            your privacy rights and how the law protects you.
          </BodyContent>
          <BodyContent className="md:text-lg md:leading-[26px] text-[#3A3A3A] text-sm leading-[22px]">
            {" "}
            Kalibre respects your privacy and is committed to protecting your
            personal data. This Privacy Policy explains how we collect, use,
            disclose and safeguard your information in compliance with global
            data protection laws including the General Data Protection
            Regulation (GDPR) and the Nigeria Data Protection Act (NDPA). This
            policy applies to all visitors, clients, partners and users of our
            services or website.
          </BodyContent>
        </div>
        <div className="flex flex-col md:gap-[50px] gap-6 ">
          <TextGroup
            content="We collect information you provide directly when interacting with us, such as your 
        name, contact details, company information, payment details and correspondence. Additionally, 
        we automatically collect technical information through cookies and other tracking technologies, 
        including your IP address, browser type, device identifiers and browsing behavior on our website. 
        We may also collect information from third parties, such as publicly available sources or trusted 
        partners, to enhance our records and services."
            heading="1. Information We Collect"
          />
          <ListingGroup
            heading="2. Purpose of Data Collection and Use"
            content={
              <>
                Your personal data is processed for specific, legitimate
                business purposes, including:
              </>
            }
            list={dataCollectionList}
          />
          <TextGroup
            content="Under GDPR and NDPA, processing of your personal data is based on one or more 
            lawful grounds, such as your consent, contractual necessity, legal compliance, protection of 
            vital interests, or legitimate interests pursued by Kalibre or a third party. We always 
            ensure that data processing is fair, transparent and limited to the purpose for which it 
            was collected."
            heading="3. Legal Basis for Processing Personal Data"
          />
          <TextGroup
            content="Kalibre may share your information with trusted service providers, such as IT hosts, 
            cloud service platforms, payment processors, legal advisors and marketing partners. 
            These parties are obligated to protect your data under strict confidentiality and comply 
            ith applicable data protection laws. We do not sell, trade, or rent your personal data to
             any third parties. Disclosure of your data may also be required by law enforcement, 
             regulatory authorities, or courts in compliance with lawful requests."
            heading="4. Data Sharing and Third Parties"
          />
          <TextGroup
            content="We implement technical and organizational safeguards to protect your personal 
            data against unauthorized access, loss, alteration, or destruction. These measures include 
            secure servers, encryption, access controls, regular security audits, staff training and 
            incident response protocols. We continuously monitor and update our security practices to 
            keep pace with evolving threats."
            heading="5. Data Security Measures"
          />
          <TextGroup
            content="As a global company, Kalibre may transfer personal data to countries outside your 
            jurisdiction, including locations that may not have equivalent data protection laws. 
            Such transfers are conducted in compliance with data protection regulations and are protected 
            by appropriate safeguards, such as standard contractual clauses approved by data protection 
            authorities or binding corporate rules, to ensure your data remains secure."
            heading="6. International Data Transfers"
          />
          <ListingGroup
            heading="7. Your Rights Under Data Protection Laws"
            content={
              <>
                Depending on your jurisdiction, you may have rights regarding
                your personal data, including the right to:
              </>
            }
            list={privacyListSeven}
          />
          <TextGroup
            content="Kalibre retains your personal data only for as long as necessary to fulfill the 
            purposes for which it was collected, to comply with legal obligations, resolve disputes 
            and enforce agreements. Once data is no longer needed, it is securely deleted or anonymized 
            to prevent identification."
            heading="8.  Data Retention Policy"
          />
          <TextGroup
            content="Our website uses cookies and similar technologies to improve functionality, 
            analyze usage patterns and support marketing efforts. You can manage or disable cookies 
            through your browser settings or cookie consent tools on our site. Note that disabling 
            cookies may affect your experience on our website."
            heading="9. Cookies and Tracking Technologies"
          />
          <TextGroup
            content="Our services are not directed at children under the age of 18. We do not knowingly 
            collect personal data from minors. If you believe we have inadvertently collected such data, 
            please notify us immediately so we can take prompt action to remove it."
            heading="10. Children’s Privacys"
          />
          <TextGroup
            content="We may update this Privacy Policy periodically to reflect changes in legal 
            requirements, our practices, or new services. Updated versions will be posted on this page 
            with the effective date revised. We encourage you to review the policy regularly."
            heading="11. Changes to This Privacy Policy"
          />

          <div className="flex flex-col md:gap-[25px] gap-4 md:pb-[50px] pb-6">
            <Heading
              heading="12. Contact Information"
              className="text-[#122847] md:text-[54px] text-[32px] md:leading-[60px] leading-[38px] "
            />

            <BodyContent className="md:text-lg md:leading-[26px] text-[#3A3A3A] text-sm leading-[22px]">
              For questions, concerns, or to exercise your data protection
              rights, please contact:
              <br />
              Kalibre CoSec Limited
              <br />
              Email:
              <a
                href="https://www.kalibrecosec.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                www.kalibrecosec.org
              </a>
            </BodyContent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
