'use client'
import Link from 'next/link'
import { FaUserCircle, FaUserFriends } from 'react-icons/fa'
import { TbLogout } from 'react-icons/tb'


export default function NavBar() {
    const styleIcons = `
        cursor-pointer 
        transition-all 
        hover:scale-102 
        text-white 
        hover:text-teal-200
    `
    const nameUser = 'Searching'

    return (
        <nav
            className='
                flex w-full 
                items-center 
                justify-between 
                h-16 
                p-6 
                bg-linear-90 
                from-teal-400 
                to-violet-500
                '
        >
            <Link href='/'>
                <h1 className="text-lg font-semibold cursor-pointer">
                    Users Auth
                </h1>
            </Link>

            <div className='flex gap-4'>
                <Link
                    href='/profile'
                    className={`flex items-center gap-1.5 ${styleIcons}`}
                >
                    <h3 className='text-sm'>{nameUser}</h3>
                    <FaUserCircle
                        size={24}
                    />
                </Link>
                <Link href='users'>
                    <FaUserFriends
                        className={styleIcons}
                        size={24}
                    />
                </Link>
                <Link href='/login'>
                    <TbLogout
                        className={styleIcons}
                        size={24}
                    />
                </Link>
            </div>
        </nav>
    )
}