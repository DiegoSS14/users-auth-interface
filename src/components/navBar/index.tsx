'use client'
import Link from 'next/link'
import { FaUserCircle } from 'react-icons/fa'
import { TbLogout } from 'react-icons/tb'
import { SiAuthentik } from 'react-icons/si'


export default function NavBar() {
    const styleIcons = `
        cursor-pointer 
        transition-all 
        hover:scale-102 
        text-white 
        hover:text-teal-200
    `
    const userLogin = true
    const user = {id: '1', name: 'Diego'}

    return (
        <nav
            className={`
                flex w-full 
                items-center 
                ${userLogin ? 'justify-between' : 'justify-center'} 
                h-16 
                p-6 
                bg-linear-90 
                from-teal-400 
                to-violet-500
                `}
        >
            <Link className='flex gap-2 items-center' href='/'>
                <SiAuthentik size={34} />
                <h1 className="text-lg font-semibold cursor-pointer">
                    Users Auth
                </h1>
            </Link>

            {userLogin && (
                <div className='flex gap-4'>
                    <Link
                        href='/user/id'
                        className={`flex items-center gap-1.5 ${styleIcons}`}
                    >
                        <FaUserCircle size={24} />
                        <h3 className='text-sm'>{user.name}</h3>
                    </Link>
                    <Link href='/login'>
                        <TbLogout className={styleIcons} size={24}
                        />
                    </Link>
                </div>
            )}
        </nav>
    )
}