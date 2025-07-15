import { siteConfig } from '@/config/site'
import Link from 'next/link'
import React from 'react'
import { GithubIcon, SearchIcon, TwitterIcon } from '../icons'
import {Input} from '@heroui/input'

const Navbar = () => {
  return (
    <nav className='sticky top-0 text-black bg-[#fafafa] px-[20px] py-[20px]'>
      <div className='container flex items-center justify-between'>
        <div>
          <Link href={'/'} className='text-[22px] font-bold uppercase'>Blogify</Link>
        </div>
        <ul className='flex text-[18px] items-center gap-[20px]'>
          {
            siteConfig.navItems.map((item, index) => (
              <Link href={item.href} key={index}>{item.label}</Link>
            ))
          }
          <li>
            <a target='_blank' href={siteConfig.links.github}>
              <GithubIcon />
            </a>
          </li>
          <li>
            <a target='_blank' href={siteConfig.links.twitter}>
              <TwitterIcon />
            </a>
          </li>
        </ul>

        <Input
          classNames={{
            base: "max-w-full sm:max-w-[16rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 ",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
      </div>
    </nav>
  )
}

export default Navbar