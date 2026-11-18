/*
    For my own experimentation. Do not need this as it does not provide any value.
*/
const SimpleInputBox = ({type, value, onChange, style, placeholder}) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            style={style}
            placeholder={placeholder}
        />
    );
};

export default SimpleInputBox;