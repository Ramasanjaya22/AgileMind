'use client'

import Image from 'next/image'
import React from 'react'
import {MagnifyingGlassIcon, UserCircleIcon} from '@heroicons/react/20/solid'
import Avatar from 'react-avatar'

type Props = {}

const Header = (props: Props) => {

  return (
    <header>
      <div className='flex flex-col md:flex-row items-center p-5 rounded-b-2xl'>
        <div
        className='absolute
        top-0
        left-0
        w-full
        h-96
        bg-gradient-to-br from-blue-500 to-blue-900
        rounded-md
        filter
        blur-3xl
        opacity-70
        -z-50'
        />
        <Image
        src={'agilemind-logo.svg'}
        alt="Agile Mind Logo"
        width={300}
        height={100}
        className='w-44 md:w-56 pb-10 md:pb-0 object-contain'
        />
        <div className='flex items-center space-x-5 flex-1 justify-end w-full'>
            {/* search bar */}
            <form action="" className='flex items-center space-x-5 p-2 bg-white shadow-md flex-1 md:flex-initial rounded-md'>
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-400"/>
                <input type="text" placeholder='Search'
                className='flex-1 outline-none p-2'/>
                <button type='submit' hidden>Search</button>
            </form>
            {/* avatar */}
            <Avatar name='Rama Sanjaya' round color='#0055d1' size='50' />
        </div>

        </div>
        <div className='flex items-center justify-center py-2 px-5 md:py-5'>
          <p className='flex items-center text-sm font-light pr-5 py-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl'>
        <UserCircleIcon className='inline-block w-10 h-10 text-gray-400 mr-1' />
            GPT is summary your day ...</p>
        </div>
    </header>
  )
}

export default Header