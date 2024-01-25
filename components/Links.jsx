"use client"
import React, { useEffect, useState } from 'react'
import "../app/globals.css"
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const Links = () => {
    const [selectedItem, setSelectedItem] = useState(null)
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre')
    // console.log(genre, 'genre')
    const tabs1 = [
        { id: 1, name: 'Popüler Filmler', url: 'popular' },
        { id: 2, name: 'En İyiler', url: 'top_rated' },
        { id: 3, name: 'Yakında', url: 'upcoming' },
    ];
    const tabs2 = [
        { id: 4, name: 'Favoriler', url: 'favorite'},
        { id: 5, name: 'Oyuncular', url: 'actors' },
        { id: 6, name: 'İletişim', url: 'contact' },
        
    ];
    const pathname = usePathname();
    const router = useRouter();

    const handleItemClick = (index, path) => {

        if (selectedItem === index) {
            setSelectedItem(null)
        } else {
            setSelectedItem(index)
        }

        if (path) {
            router.push(path);
        }
    }
    useEffect(() => {

    }, [pathname])
    console.log(selectedItem, "selectedItem")
    return (
        <header className='flex items-center justify-around gap-5 h-20 bg-slate-900 px-3 '>
            <div className='flex-column md:flex items-center justify-center p-5 m-5 gap-3 lg:gap-7 '>
                {
                    tabs1.map((tab, i) => {
                        return (
                            <Link key={tab.id} href={`/?genre=${tab.url}`} className={`text-neutral-content text-xs lg:text-lg capitalize cursor-pointer hover:opacity-75 transition-opacity ${tab.url === genre ? "underline underline-offset-8 text-yellow-400" : ""}`}>
                                {tab.name}
                            </Link>
                        )
                    })
                }
                {
                    tabs2.map((tab, id) => {
                        return (
                            <Link key={id}
                                href={`${tab.url}`}
                                onClick={() => handleItemClick(id, tab.url)}
                                className={`text-neutral-content text-xs lg:text-lg overflow-auto capitalize cursor-pointer hover:opacity-75 transition-opacity ${(pathname === tab.url && id === selectedItem) ? "underline underline-offset-8 text-yellow-400" : ""}`}>
                                {tab.name}
                            </Link>
                        )
                    })
                }
            </div>
        </header>
    )
}

export default Links
