//react 
import Note from "./note";

export default function Sidebar({items})   {


    return (
        <aside className="w-full flex flex-col gap-2">
            <h1 className="text-white text-2xl font-bold">Your notes</h1>
            <div className="w-full h-1 bg-white/80 rounded-md"></div>
            <div className="flex flex-col gap-3 mt-2">
                { items.length === 0 ? (
                    <span className="text-black/60">List is empty...</span>
                ): 
                ( items.map(item => <div>
                    <Note 
                        item={item}
                        key={item.createdAt}
                    />

                </div>))}
                
            </div>
        </aside>
    );
}