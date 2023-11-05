//react 
import {useState, useEffect} from 'react';

export default function Request() {

    const [commitMessage, setCommit ] = useState(null);

    useEffect(() => {
        fetch('https://whatthecommit.com/index.json')
            .then(response => response.json())
            .then((data) => {
                setCommit(data.commit_message);
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });

    }, []);

    return (
        <div className='flex justify-center items-center mt-10'>
           <p className=' text-3xl font-bold'>{commitMessage}</p> 
        </div>
    );
}