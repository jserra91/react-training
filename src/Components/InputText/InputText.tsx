import * as React from 'react';

export interface IInputTextProps {
    value?: string;
    label?: string;
    handlechange(value: any): void;
}

export const InputText: React.FC<IInputTextProps> = (props: IInputTextProps) => {

    const [value, setValue] = React.useState(props.value ? props.value : '');
    const [label, setLabel] = React.useState(props.label ? props.label : '');

    React.useEffect(
        () => {
            setValue(props.value ? props.value : '');
        },
        [props.value])

    const handleChange = (event: any) => {
        props.handlechange(event.target.value);
    }

    return (
        <>
            <div>
                {label}
                <input type="text" value={value} onChange={handleChange} />
            </div>
            {value && value.length < 5 && <div>
                Minium required 5!!!
            </div>}
        </>
    );

}

export default InputText;

