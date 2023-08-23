//react 
import Button from './button';
import Input from './input';

export default function SignUp()    {

    function signup()   {
        console.log('Signed Up');
    }

    return (
        <>
            <Input displayText="First Name" />
            <Input displayText="Last Name" />
            <Button displayText='Sign Up' handleClick={signup} />
        </>
    );
}
