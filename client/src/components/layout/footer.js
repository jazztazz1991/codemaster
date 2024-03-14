import { DiGithubBadge } from "react-icons/di";
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-gray-800 fixed bottom-0">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <Link href="/"><h1 className="text-white">Code Master</h1></Link>
                            <h2 className="text-gray-300">Your beginning to a better future!</h2>
                        </div>

                        <div className="hidden sm:ml-6 sm:block">
                            <Link href="https://github.com/jsong73/baby-leetcode"><DiGithubBadge style={{ color: 'aqua', fontSize: '35px' }} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}