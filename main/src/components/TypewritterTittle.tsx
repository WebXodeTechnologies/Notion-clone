"use client";
import React from "react";
import Typewriter from "typewriter-effect";

type Props = {};

export const TypewriterTitle = (props: Props) => {
  return (
    <div className="text-2xl font-semibold">
      <Typewriter
        options={{
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              `<span style="display: inline-flex; align-items: center; gap: 0.5rem;">
                <span>🚀</span> Supercharged Productivity.
              </span>`
            )
            .pauseFor(500)
            .deleteAll()
            .typeString(
              `<span style="display: inline-flex; align-items: center; gap: 0.5rem;">
                <span>🧠</span> AI-Powered Insights.
              </span>`
            )
            .pauseFor(500)
            .deleteAll()
            .typeString(
              `<span style="display: inline-flex; align-items: center; gap: 0.5rem;">
                <span>🎨</span> Unleash Your Creativity.
              </span>`
            )
            .pauseFor(500)
            .deleteAll()
            .typeString(
              `<span style="display: inline-flex; align-items: center; gap: 0.5rem;">
                <span>📊</span> Data-Driven Success.
              </span>`
            )
            .pauseFor(500)
            .deleteAll()
            .typeString(
              `<span style="display: inline-flex; align-items: center; gap: 0.5rem;">
                <span>💡</span> Ideas That Inspire.
              </span>`
            )
            .pauseFor(500)
            .deleteAll()
            .start();
        }}
      />
    </div>
  );
};
