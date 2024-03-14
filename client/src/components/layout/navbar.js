import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import React, { useState, useEffect } from 'react';

export default function Navbar({ }) {
    const router = useRouter();
    const [_, setCookies] = useCookies(['access_token']);
    const [userLoggedIn, setUserLoggedIn] = useState(null);

    useEffect(() => {
        setUserLoggedIn(window.localStorage.getItem('userID'));
    },[])
    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userID");
        router.push('/login');
    }

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <Link href="/"><img src="codemasterT.png" id="navLogo"></img></Link>
                        </div>

                        <div className="hidden content-center h-auto sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link href="/exercises" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Exercises
                                </Link>

                                {userLoggedIn && (
                                    <Link href={`/profile/${userLoggedIn}`} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"> Profile
                                    </Link>

                                )}

                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* <!-- Profile dropdown --> */}
                        <div className="relative ml-3">
                            <div>
                                {!userLoggedIn ? <Link href="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Login/Signup</Link> : <button type="button" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" id="user-menu-button" onClick={logout}>Logout</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )

}


