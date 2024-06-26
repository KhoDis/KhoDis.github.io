import { ReactNode } from "react";

export default function Section(
  Component: () => ReactNode,
  title: string,
  center: boolean = false,
) {
  return function HOC() {
    return (
      <section
        className={`flex flex-col container mx-auto pt-4 md:pt-6 lg:pt-8 h-full`}
      >
        <h2 className="text-4xl font-bold mb-4 text-center">{title}</h2>
        <div
          className={`${center && "flex flex-col flex-grow items-center justify-center h-full"}`}
        >
          <Component />
        </div>
      </section>
    );
  };
}
