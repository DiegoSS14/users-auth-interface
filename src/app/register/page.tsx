'use client'
import FormField from "@/components/formField"
import Link from "next/link"
import { useState } from "react"
import SelectMenu from "@/components/selectMenu"
import { SiAuthentik } from "react-icons/si"

export default function Register() {
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    return (
        <div className="
                max-w-2xl
                min-h-[calc(100vh-64px)]
                mx-auto
                gap-4
                flex flex-col
                items-center 
                justify-center
            "
        >
            <div className="flex items-center justify-center h-40 w-40 bg-violet-600 pr-3 rounded-full">
                <SiAuthentik color="#fff" size={85} />
            </div>
            <h1 className="text-2xl font-bold">Register</h1>
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="flex flex-col w-full max-w-[400px] gap-2 p-5 bg-zinc-900 rounded-lg"
            >
                <FormField
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setEmailInput(e.target.value) }}
                />
                <FormField
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Enter your passeord"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setPasswordInput(e.target.value) }}
                />
                <SelectMenu
                    options={['Item 1', 'item 2', 'Item 3']}
                />
                <button
                    type="submit"
                    className="
                        h-10
                        bg-violet-600
                        cursor-pointer
                        transition-all
                        duration-500
                        hover:bg-violet-800
                        hover:text-violet-200
                        active:scale-98
                        rounded-md
                        text-base
                    "
                >
                    Register
                </button>
            </form>
            <p className="text-[14px]">
                Já tem uma conta? <Link href='/login' className="font-bold">Faça login</Link>
            </p>
        </div>
    )
}