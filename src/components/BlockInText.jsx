import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import BlockInTextCard from "./BlockInTextCard";

function BlockInText() {
  return (
    <div className="flex h-screen items-center justify-center bg-neutral-100 px-8 py-24 text-neutral-800">
      <BlockInTextCard
        tag="/ Support"
        text={
          <>
            <strong>Have questions?</strong> we&apos;d love to help! Contact
            support for any issue you might have.
          </>
        }
        examples={[
          "Does your product work for SMBs?",
          "Can I pause my membership without losing my data?",
          "How do I cancel my subscription?",
          "What is your refund policy?",
        ]}
      />
    </div>
  );
}

export default BlockInText;
