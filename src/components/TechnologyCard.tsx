import { toast } from "react-toastify";
import type { TechnologyType } from "../types";

interface TechnologyCardProps {

  technology: TechnologyType;
  selectedTechnologies: TechnologyType[];
  setSelectedTechnologies: React.Dispatch<React.SetStateAction<TechnologyType[]>>;

}

function TechnologyCard({ technology, selectedTechnologies, setSelectedTechnologies }: TechnologyCardProps) {

  const isAdded = selectedTechnologies.find(
    (item) => item.id === technology.id
  );

  function handleTechnologyAdd() {

    const isExist = selectedTechnologies.find((item) => item.id === technology.id);

    if (isExist) {
      toast.warning(`${technology.name} is already in your stack`, {
        position: "top-right",
        autoClose: 2000,
      });

      return;
    }

    setSelectedTechnologies([...selectedTechnologies, technology]);

    toast.success(`${technology.name} added to your stack`, {
      position: "top-right",
      autoClose: 2000,
    });
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex items-start justify-between">
        <img src={technology.icon} alt={technology.name} className="h-12 w-12" />

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {technology.badge}</span>
      </div>

      <h3 className="mt-4 text-xl font-bold text-slate-900">{technology.name}</h3>

      <p className="mt-3 text-sm leading-relaxed text-slate-600">{technology.description}</p>

      <div className="mt-4 flex items-center justify-between">

        <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-600">
          {technology.category}
        </span>

        <span className="text-sm text-slate-500">{technology.difficulty}</span>

      </div>

      <div className="mt-4">
        <span className="font-medium text-slate-700"> ⭐ {technology.rating}</span>
      </div>

      <button
        onClick={handleTechnologyAdd}
        disabled={isAdded}

        className={`mt-5 w-full rounded-lg px-4 py-2 font-medium text-white ${isAdded ? 
        "cursor-not-allowed opacity-50 brand-gradient" : "cursor-pointer brand-gradient"}`}>

        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
}

export default TechnologyCard;