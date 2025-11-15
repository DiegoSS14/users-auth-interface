
type FormFieldProps = {
    label: string
    type: string
    name: string
    placeholder: string
}

export default function FormField({label, type, name, placeholder}: FormFieldProps) {
    return (
        <div className="flex flex-col gap-2 mb-3">
            <label className="text-base">{label}</label>
            <input
                className="p-1.5 outline outline-zinc-700 rounded text-[14px]"
                type={type}
                name={name}
                placeholder={placeholder}
            />
        </div>
    )
}