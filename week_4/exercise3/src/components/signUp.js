//react 
import Button from './button';
import Input from './input';
import {useState} from 'react';

export default function SignUp()    {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");


    function signup()   {
        alert(`Hello ${firstName} ${lastName}`);
    }

    return (
        <>
            <Input inputValue={firstName} onValueChange={setFirstName} displayText="First Name" />
            <Input inputValue={lastName} onValueChange={setLastName} displayText="Last Name" />
            <Button displayText='Sign Up' handleClick={signup} />
        </>
    );
}
