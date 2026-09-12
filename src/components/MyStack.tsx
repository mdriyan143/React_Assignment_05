import type { TechnologyType } from "../types";

interface MyStackProps {
    selectedTechnologies: TechnologyType[];
    setSelectedTechnologies: React.Dispatch<React.SetStateAction<TechnologyType[]>>;
}

function MyStack({ selectedTechnologies, setSelectedTechnologies }: MyStackProps) {

    function handleRemove(id: number) {
        const remainingTechnologies = selectedTechnologies.filter(
            (technology) => technology.id !== id);

        setSelectedTechnologies(remainingTechnologies);
    }

    function handleRemoveAll() {
        setSelectedTechnologies([]);
    }

    return (
        <div className="w-72 rounded-2xl border border-slate-200 bg-white p-5">

            <h2 className="text-lg font-bold text-slate-800"> Your Stack </h2>

            <p className="mt-1 text-sm text-slate-400">
                {selectedTechnologies.length === 0 ? "No technologies selected yet." : `${selectedTechnologies.length} Technology Selected`}
            </p>

            {selectedTechnologies.length === 0 ? (

                <div className="mt-6 rounded-xl border border-dashed border-slate-300 px-4 py-8 text-center text-sm text-slate-400">
                    Your stack is empty.
                </div>

            ) : (

                <div className="mt-4 space-y-3"> {selectedTechnologies.map((technology) => (

                    <div
                        key={technology.id} className="flex items-center gap-3 rounded-lg border border-slate-200 p-3">

                        <img className="h-8 w-8" src={technology.icon} alt={technology.name} />

                        <div className="flex-1">

                            <h3 className="text-sm font-semibold text-slate-700"> {technology.name} </h3>

                            <p className="text-xs text-slate-400"> {technology.category} </p>

                        </div>

                        <button onClick={() => handleRemove(technology.id)}
                            className="text-xl text-slate-400"> ✕ </button>


                    </div>

                ))}

                </div>

            )}

            {selectedTechnologies.length > 0 && (

                <button onClick={handleRemoveAll}
                    className="mt-8 w-full rounded-lg border border-red-300 py-2 text-sm font-semibold text-red-500">
                    Remove All </button>

            )}

        </div>
    );
}

export default MyStack;