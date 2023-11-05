//react 
import Note from "./note";
import PomodoroTimer from "./timer";
import ProgressBar from "./progressBar";

export default function Sidebar({items, tasks})   {


    return (
        <aside className="w-full grid grid-rows-6 gap-8">
            <div className="row-span-3 bg-gradient-to-br from-white to-lightGray  rounded-md">
                <PomodoroTimer />
                <ProgressBar 
                    items={tasks}
                />
            </div>
            <div className="row-span-3">
                <h1 className="text-white text-2xl font-bold">Your notes</h1>
                <div className="w-full h-1 bg-white/80 rounded-md"></div>
                <div className="flex flex-col gap-3 mt-2">
                    { items.length === 0 ? (
                        <span className="text-black/60">No notes yet.</span>
                    ): 
                    ( items.map(item => <div>
                        <Note 
                            item={item}
                            key={item.createdAt}
                        />

                    </div>))}
                    
                </div>
            </div>
        </aside>
    );
}