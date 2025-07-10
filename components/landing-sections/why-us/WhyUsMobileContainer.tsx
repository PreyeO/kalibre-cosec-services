import WhyUsCard from "@/components/landing-sections/why-us/why-us-card";
import { Globe, Lightbulb, TrendingUp, UsersRound } from "lucide-react";
import React from "react";

const WhyUsMobileContainer = () => {
  return (
    <div className="flex flex-col gap-6">
      <WhyUsCard
        title="Integrity & Accountability"
        content="We go beyond compliance to embed governance as a growth enabler and investor signal"
        icon={<UsersRound className="" size={20} color="black" />}
        className=""
      />
      <WhyUsCard
        title="Africa-Focused, Globally Aligned"
        content="We understand the nuances of operating across African markets while meeting global standards."
        icon={<Globe className="" size={20} color="black" />}
        className=""
      />

      <WhyUsCard
        title="Expertise Meets Insight"
        content="Our foundation in thought leadership keeps us ahead of trends and close to our clients."
        icon={<Lightbulb className="" size={20} color="black" />}
        className=" "
      />
      <WhyUsCard
        title="Bespoke. Practical. Scalable."
        content="No copy-paste playbooks - only solutions tailored to your ambition and operating reality."
        icon={<TrendingUp className="" size={20} color="black" />}
        className=""
      />
    </div>
  );
};

export default WhyUsMobileContainer;
