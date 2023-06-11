import { FC, TextareaHTMLAttributes } from "react";

interface ITextArea {
    value: string;
    changeHandler: (e: string) => void;
    name: string;
    id: string;
    className?: string;
}

const TextArea: FC<ITextArea & TextareaHTMLAttributes<any>> = ({
                                                                   value,
                                                                   changeHandler,
                                                                   name,
                                                                   id,
                                                                   className,
                                                                   ...props
                                                               }) => {
    return (
        <textarea
            className={`border rounded outline-none mx-7 h-40 mb-4 py-1 pl-4 pr-2 focus:shadow-md transition-shadow delay-75 resize-y ${className}`}
            value={value}
            onChange={(e) => changeHandler(e.target.value)}
            name={name}
            id={id}
            {...props}
        ></textarea>
    );
};

export default TextArea;
