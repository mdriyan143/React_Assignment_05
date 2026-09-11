import { use } from "react";
import type { TechnologyType } from "../types";
import TechnologyCard from "./TechnologyCard";

interface TechnologyProps {

  technologiesPromise: Promise<TechnologyType[]>;
  selectedTechnologies: TechnologyType[];
  setSelectedTechnologies: React.Dispatch<React.SetStateAction<TechnologyType[]>>;

}

function Technology({technologiesPromise, selectedTechnologies, setSelectedTechnologies}: TechnologyProps) {

  const technologies = use(technologiesPromise);

  return (
    <section id="technologies" className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-center text-3xl font-bold text-slate-900 md:text-4xl">
        Explore Technologies
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
        Discover modern technologies and choose the perfect tools for your
        development stack.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => (
          <TechnologyCard key={technology.id} technology={technology} 
          selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies}/>
        ))
        }
      </div>
    </section>
  );
}

export default Technology;