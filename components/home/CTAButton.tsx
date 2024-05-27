import { Button } from "@/components/ui/button";
import { ALL_BTNS } from "@/config/Btns";
import Link from "next/link";
import React from "react";

const CTAButton = ({ locale }: { locale: any }) => {
  const BTNS = ALL_BTNS[`BTNS_${'en'.toUpperCase()}`];
  return (
    <div className="flex flex-wrap gap-4">
      {BTNS?.map((item) => (
        <Link
          href={item.content}
          target="_blank"
          rel="noopener noreferrer nofollow"
          key={item.title}
        >
          <Button
            variant="default"
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
            aria-label={item.title}
          >
            {item.icon &&
              React.createElement(item.icon, { className: "text-2xl" })}
            {item.title}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default CTAButton;