// react

export default function Input({displayText, inputValue, onValueChange}) {

    const handleChange = (e) => {
        onValueChange(e.target.value);
    };

    return (
        <>
        <label className="mt-2 mb-1 font-bold w-full">{ ` ${ displayText }: ` }</label>
        <br></br>
        <input 
            value = {inputValue}
            className="mt-1 mb-2 w-full" 
            type="text" 
            maxLength="50" 
            placeholder={`Enter ${displayText} here`} 
            onChange={handleChange}
            />
        </>
    );
}

