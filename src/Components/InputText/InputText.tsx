import * as React from 'react';

export interface IInputTextProps {
    value?: string;
    handlechange(value: any): void;
}

export const InputText: React.FC<IInputTextProps> = (props: IInputTextProps) => {

    const [value, setValue] = React.useState(props.value ? props.value : '');

    React.useEffect(
        () => {
            setValue(props.value ? props.value : '');
        },
        [props.value])

    return (
        <>
            <div>
                <input type="text" value={value} onChange={props.handlechange} />
            </div>
            {value && value.length < 5 && <div>
                Minium required 5!!!
            </div>}
        </>
    );

}

export default InputText;

