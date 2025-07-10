import Connector from "@/components/ui/connector";
import WhyUsCard from "@/components/landing-sections/why-us/why-us-card";
import { Globe, Lightbulb, TrendingUp, UsersRound } from "lucide-react";
import React from "react";

const WhyUsDesktopContainer = () => {
  return (
    <div className="left-28 relative">
      <WhyUsCard
        title="Integrity & Accountability"
        content="We go beyond compliance to embed governance as a growth enabler and investor signal"
        icon={<UsersRound className="" size={25} color="black" />}
        className=""
      />
      <Connector src="/connector.svg" className="top-0 relative left-[25%]" />

      <div className="flex ">
        <WhyUsCard
          title="Africa-Focused, Globally Aligned"
          content="We understand the nuances of operating across African markets while meeting global standards."
          icon={<Globe className="" size={25} color="black" />}
          className="relative z-1 -translate-x-[29%]"
        />
        <Connector className=" right-[15%] relative" src="/connector-2.svg" />

        <WhyUsCard
          title="Expertise Meets Insight"
          content="Our foundation in thought leadership keeps us ahead of trends and close to our clients."
          icon={<Lightbulb className="" size={25} color="black" />}
          className="relative  bottom-10 -translate-x-[32%] z-1 "
        />
      </div>

      <Connector
        src="/connector-2.svg"
        className="relative left-[50%] bottom-15 rotate-90 "
      />
      <WhyUsCard
        title="Bespoke. Practical. Scalable."
        content="No copy-paste playbooks - only solutions tailored to your ambition and operating reality."
        icon={<TrendingUp className="" size={25} color="black" />}
        className="relative bottom-20 translate-x-[50%]"
      />
    </div>
  );
};

export default WhyUsDesktopContainer;
