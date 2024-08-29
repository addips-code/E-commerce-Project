"use client";

import { Grid2x2, Heart, LayoutGrid, Search, ShoppingCart, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

function Header() {
    const router = useRouter();

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault;

        const input = e.currentTarget.input.value;
        router.push(`/search?q=${input}`);
    }
  return (
    <header className="flex flex-col bg-walmart md:flex-row items-center px-10 py-7 space-x-5">
        <Link href="/" className="mb-5 md:mb-0">
            <Image
                src="https://i.imgur.com/5V4wehM.png"
                alt="logo of store"
                width={150}
                height={150}
            />
        </Link>

        <form onSubmit={handleSubmit} className="flex items-center rounded-full w-full bg-white flex-1">
            <input 
                type="text" 
                name="input"
                placeholder="Search Products..."
                className="flex-1 px-4 rounded-l-full outline-none placeholder:text-xs text-black"
            />
            <button type="submit">
                <Search
                    className="rounded-full h-10 px-2 w-10 cursor-pointer bg-yellow-400"
                />
            </button>
        </form>

        <div className="flex space-x-5">
            <Link
               href={"/"}
               className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm" 
            >
               <Grid2x2 size={20}/>
               <p>Departments</p> 
            </Link>

            <Link
               href={"/"}
               className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm" 
            >
               <LayoutGrid size={20}/>
               <p>Services</p> 
            </Link>

            <Link
               href={"/"}
               className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm" 
            >
               <Heart size={20}/>
               <p className="text-xs font-extralight">Reorder</p>
               <p>My Items</p> 
            </Link>

            <Link
               href={"/"}
               className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm" 
            >
               <User size={20}/>
               <p className="text-xs font-extralight">Sign In</p>
               <p>Account</p> 
            </Link>

            <Link
               href={"/basket"}
               className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm" 
            >
               <ShoppingCart size={20}/>
               <p className="text-xs font-extralight">No items</p>
               <p>$0.00</p> 
            </Link>
        </div>
    </header>
  )
}

export default Header