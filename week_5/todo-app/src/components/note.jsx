//react 

export default function Note({item})  {

    return (
        <div className="w-full flex flex-col gap-2 bg-white rounded-[4px] p-4 transition-all duration-300 hover:drop-shadow-xl hover:-translate-y-1 px-4">
            <div className="flex flex-col justify-start items-start">
                <h1 className="text-xl font-bold">{item.book === '' ? '--' : item.book}</h1>
                <h1 className="font-semibold text-lg text-darkGray truncate">
                    {item.ChapterName === '' ? '--' : item.ChapterName}</h1>
            </div>
            <p className={`w-full truncate`}>{item.notes}</p>
        </div>
    );
}