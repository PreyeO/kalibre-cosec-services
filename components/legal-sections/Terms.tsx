import React from "react";
import TextGroup from "../ui/legal/textGroup";
import Heading from "../ui/typography/Heading";
import BodyContent from "../ui/typography/BodyContent";
import { termsList } from "@/data";

const TermsSection = () => {
  return (
    <section className="md:pt-[66px] pt-[35px]  md:px-[50px] px-5  md:pb-[76px] pb-[35px]">
      <div className=" max-w-[1133px] flex flex-col">
        <div className="flex flex-col md:gap-[25px] gap-4 md:pb-[50px] pb-6">
          <Heading
            heading="Introduction"
            className="text-[#122847] md:text-[54px] text-[32px] md:leading-[60px] leading-[38px] "
          />
          <BodyContent className="md:text-lg md:leading-[26px] text-[#3A3A3A] text-sm leading-[22px]">
            Welcome to Kalibre CoSec Limited{" "}
            {`("Kalibre," "we," "us," or (our)`}
            ). These Terms and Conditions {`(Terms)`} govern your access to and
            use of our website, digital platforms, and professional services. By
            visiting our website or engaging with our services, you agree to
            comply with and be bound by these Terms. If you do not agree to
            these Terms, please do not use our services.
          </BodyContent>
        </div>
        <div className="flex flex-col md:gap-[25px] gap-4 md:pb-[50px] pb-6">
          <Heading
            heading="Definitions"
            className="text-[#122847] md:text-[54px] text-[32px] md:leading-[60px] leading-[38px]"
          />
          <ul className="flex flex-col gap-2 list-disc pl-8">
            {termsList.map((list, index) => (
              <li
                key={index}
                className="md:text-lg md:leading-[26px] text-[#3A3A3A] text-sm leading-[22px]"
              >
                <span className="font-bold">{list.span}</span>
                {list.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col md:gap-[50px] gap-6 ">
          <TextGroup
            content="Kalibre provides advisory, compliance, secretarial, governance, investor readiness, 
            outsourcing, and related professional services. Service details, deliverables, timelines, and fees will 
            be outlined in a separate engagement agreement or contract. These Terms supplement those 
            agreements."
            heading="2. Scope of Services"
          />
          <BodyContent className="md:text-lg md:leading-[26px] text-[#3A3A3A] text-sm leading-[22px]">
            Kalibre does not provide legal, tax, or financial advice unless
            expressly stated in writing.
          </BodyContent>
          <TextGroup
            content="Clients must provide accurate, complete, and timely information necessary for 
            service delivery. Failure to do so may result in delays or compromised outcomes. Clients 
            warrant that they have authority to provide information and enter agreements."
            heading="3.  Client Obligations"
          />
          <BodyContent className="md:text-lg md:leading-[26px] text-[#3A3A3A] text-sm leading-[22px]">
            Clients are responsible for maintaining their own internal controls
            and compliance beyond the scope of Kalibre’s services.
          </BodyContent>
          <div className="flex flex-col md:gap-[25px] gap-4 md:pb-[50px] pb-6">
            <Heading
              heading="4. Intellectual Property"
              className="text-[#122847] md:text-[54px] text-[32px] md:leading-[60px] leading-[38px] "
            />

            <BodyContent className="md:text-lg md:leading-[26px] text-[#3A3A3A] text-sm leading-[22px]">
              <span className="font-bold">
                {" "}
                4.1 Kalibre Intellectual Property
              </span>
              <br />
              All intellectual property rights in materials, methodologies,
              reports, or technology developed by Kalibre remain our exclusive
              property. Clients receive a limited, non-transferable license to
              use deliverables solely for their internal purposes. Reproduction,
              distribution, or modification without express written permission
              is prohibited.
              <br />
              <span className="font-bold">4.2 Client Materials</span>
              <br />
              Clients retain all rights, title, and interest in their materials.
              By providing materials to Kalibre, Clients grant Kalibre a
              limited, non-exclusive, royalty-free license to use, reproduce,
              and process such materials solely for the purpose of delivering
              the agreed Services.
            </BodyContent>
          </div>
          <TextGroup
            content="Both parties agree to keep all confidential information secure and not disclose it to 
            hird parties except as required by law. 
            This obligation remains in effect indefinitely beyond the termination of services."
            heading="5. Confidentiality"
          />
          <TextGroup
            content="Kalibre processes personal data in compliance with applicable laws including the General 
            Data Protection Regulation (GDPR) and the Nigeria Data Protection Regulation (NDPR). 
            Details of data handling are described in our Privacy Policy which forms part of these Terms."
            heading="6.  Data Privacy and Protection"
          />
          <BodyContent className="md:text-lg md:leading-[26px] text-[#3A3A3A] text-sm leading-[22px]">
            Clients consent to the processing of their data for service
            delivery, compliance, and communication purposes.
          </BodyContent>

          <TextGroup
            content="Fees will be agreed upon in advance and detailed in the engagement letter. 
            Payment terms typically require payment within 30 days of invoice unless otherwise specified. 
            Late payments may attract interest or suspension of services. Clients are responsible 
            for any applicable taxes."
            heading="7. Fees and Payment Terms"
          />
          <TextGroup
            content="Kalibre’s liability for any claims related to services shall be limited to the fees 
            paid for the specific service giving rise to the claim. We disclaim liability for 
            indirect, incidental, consequential, or punitive damages including loss of profits or goodwill."
            heading="8. Limitation of Liability"
          />
          <TextGroup
            content="Clients agree to indemnify, defend, and hold harmless Kalibre and its affiliates 
            from claims, damages, liabilities, and expenses arising from client breaches of these Terms or unlawful conduct."
            heading="9. Indemnification"
          />
          <TextGroup
            content="Kalibre facilitates introductions between Clients and potential investors but does 
            not guarantee funding, investment decisions, or the outcome of any investor relationship."
            heading="10.  Investor Matchmaking Disclaimer"
          />
          <BodyContent className="md:text-lg md:leading-[26px] text-[#3A3A3A] text-sm leading-[22px]">
            All investment decisions rest solely with the investor. Clients
            remain responsible for conducting their own due diligence and
            compliance obligations.
          </BodyContent>
          <BodyContent className="md:text-lg md:leading-[26px] text-[#3A3A3A] text-sm leading-[22px]">
            Kalibre is not a broker, financial advisor, or fiduciary, and does
            not provide investment advice.
          </BodyContent>
          <TextGroup
            content="Kalibre reserves the right to modify, suspend, or discontinue any part of its 
            services or website without prior notice. We will endeavor to minimize disruptions and notify clients when feasible."
            heading="11.  Service Modifications and Interruptions"
          />
          <TextGroup
            content="Either party may terminate service agreements in accordance with the terms in the 
            engagement letter. Kalibre may suspend or terminate services immediately for non-payment, 
            breach of Terms, or unlawful activity. Termination does not relieve clients of outstanding fees or confidentiality obligations."
            heading="12.  Termination and Suspension"
          />
          <TextGroup
            content="These Terms and any disputes arising hereunder are governed by the laws of the 
            Federal Republic of Nigeria. Both parties agree to submit to the exclusive jurisdiction of 
            Nigerian courts unless alternative dispute resolution is agreed."
            heading="13. Governing Law and Jurisdiction"
          />
          <TextGroup
            content="Where disputes arise, parties will first seek amicable resolution through negotiation. 
            Failing resolution, disputes may be resolved through mediation or arbitration, as outlined 
            in the engagement agreement."
            heading="14.   Dispute Resolution"
          />
          <TextGroup
            content="Kalibre’s website may contain links to third-party websites or services for convenience. We do not control or endorse 
            these third parties and disclaim liability for any damages or losses resulting from their use."
            heading="15. Third-Party Websites and Services"
          />
          <TextGroup
            content="Kalibre may update these Terms periodically to reflect changes in law, business practices, or service offerings. Updated 
            Terms will be posted online with the effective date. Continued use of services constitutes acceptance."
            heading="16. Changes to Terms"
          />
          <TextGroup
            content="These Terms and any engagement agreements constitute the entire agreement between 
            the parties regarding the subject matter. Any prior understandings or agreements are superseded."
            heading="17. Entire Agreement"
          />
          <div className="flex flex-col md:gap-[25px] gap-4">
            <Heading
              heading="18. Contact Information"
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

export default TermsSection;
