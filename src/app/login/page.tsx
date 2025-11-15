'use client'
import FormField from "@/components/formField"
import { useRouter } from "next/navigation"

export default function Login() {
    const router = useRouter()

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        router.push('/')
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
            <h1 className="text-lg font-bold">Login</h1>
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="flex flex-col w-full max-w-[400px] gap-2 p-5 bg-zinc-900 rounded-lg"
            >
                <FormField
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                />
                <FormField
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Enter your passeord"
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
                    Login
                </button>
            </form>
        </div>
    )
}