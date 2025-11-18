'use client'

type SelectMenuProps = {
    options: string[]
}

export default function SelectMenu({ options }: SelectMenuProps) {
    const titleName = 'Select a role'

    return (
        <label className="w-full flex flex-col gap-2 mb-3 outline-none">
            <p className="text-base">
                {titleName}
            </p>
            <select
                className="
                    text-[14px] outline outline-zinc-700 p-1.5 rounded
                "
                name={titleName}
            >
                {options.map(option => (
                    <option className="text-white bg-zinc-700" value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>
        </label>
    )
}