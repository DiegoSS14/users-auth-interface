'use client'

import { useParams } from "next/navigation"

export default function User() {
    const { id } = useParams()

    return (
        <div
            className="
                max-w-2xl
                mx-auto
                flex
                flex-col
                items-center
                pt-10
            "
        >
            <div className="
                    flex
                    flex-col
                    gap-5
                    bg-linear-0 from-zinc-900
                    outline
                    outline-gray-800
                    px-6
                    pt-6
                    pb-8
                    rounded-3xl
                    transition-all
                    duration-300
                    hover:scale-102
                    hover:bg-blue-800
                    cursor-pointer
                "
            >
                <img
                    className="w-90 h-90 object-cover rounded-2xl"
                    src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000"
                />
                <div className="flex flex-col items-center gap-3">
                    <h1 className="text-3xl font-bold">Pedro Nascimento</h1>
                    <span className="flex items-center justify-center w-fit h-8 px-3 outline rounded-md">
                        <h3 className="text-base">Designer</h3>
                    </span>
                </div>
            </div>
        </div>
    )
}