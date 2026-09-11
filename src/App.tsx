import { Suspense, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technology from "./components/Technology";
import type { TechnologyType } from "./types";

const technologiesFetch = async (): Promise<TechnologyType[]> => {

  const res = await fetch("/technologies.json");
  const data = await res.json();

  return data;

};

function App() {

  const [technologiesPromise] = useState(() => technologiesFetch());
  const [selectedTechnologies, setSelectedTechnologies] = useState<TechnologyType[]>([]);

  return (
    <>
      <Navbar />
      <Hero />

      <Suspense fallback={<h2>Loading....</h2>}>

        <Technology technologiesPromise={technologiesPromise}
         selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies}/>

      </Suspense>
    </>
  );
}

export default App;