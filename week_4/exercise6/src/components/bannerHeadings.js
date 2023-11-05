// react 
import {useState, useEffect} from 'react';

export default function BannerHeadings({date, comment, shares})    {

    const [commitMessage, setCommit] = useState(null);

    useEffect(() => {
        fetch('https://whatthecommit.com/index.json')
        .then((response) => response.json())
        .then((data) => {
            setCommit(data.commit_message);
            console.log(data.commit_message);
        })
        .catch((error) => {
            console.error(error);
        })
    }, []);

    return (
        <div className="ml-4 mr-4 p-3">
            <h1 className="font-bold text-lg">{commitMessage}</h1>
            <div className="flex gap-2 text-sm text-gray-500 font-semibold">
                <span>{date}</span>
                &#x2022;
                <span>{comment} comments</span>
                &#x2022;
                <span>{shares} shares</span>
            </div>
        </div>

    );
}