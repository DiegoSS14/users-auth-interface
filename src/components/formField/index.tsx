
type FormFieldProps = {
    label: string
    type: string
    name: string
    placeholder: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function FormField({label, type, name, placeholder, onChange}: FormFieldProps) {
    return (
        <div className="flex flex-col gap-2 mb-3">
            <label className="text-base">{label}</label>
            <input
                onChange={onChange}
                className="p-1.5 outline outline-zinc-700 rounded text-[14px]"
                type={type}
                name={name}
                placeholder={placeholder}
            />
        </div>
    )
}