// react

export default function Input({displayText}) {

    return (
        <>
        <label className="mt-2 mb-1 font-bold w-full">{ ` ${ displayText }: ` }</label>
        <input className="mt-1 mb-2 w-full" type="text" maxLength="50" placeholder={`Enter ${displayText} here`} />
        </>
    );
}

