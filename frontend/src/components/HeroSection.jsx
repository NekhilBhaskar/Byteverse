import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const searchJobHandler = () => {
    if (query.trim()) {
      dispatch(setSearchedQuery(query))
      navigate('/browse')
    }
  }

  return (
    <section className="w-full px-4 sm:px-6 py-12 text-center">
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        <span className="mx-auto px-4 py-1.5 rounded-full bg-gray-100 text-[#F83002] text-sm sm:text-base font-medium">
          No. 1 Job Hunt Website
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Search, Apply & <br /> Get Your{' '}
          <span className="text-[#6A38C2]">Dream Jobs</span>
        </h1>

        <p className="text-gray-600 text-sm sm:text-base px-2 sm:px-6">
        Revolutionizing recruitment by bridging the gap between talent and industry leaders — because finding the right job should be simple, seamless, and stress-free.
        </p>

        {/* Search bar */}
        <div className="flex items-center w-full sm:w-[90%] md:w-[70%] lg:w-[60%] mx-auto shadow-lg border border-gray-200 rounded-full px-3 py-1.5">
          <input
            type="text"
            placeholder="Find your dream jobs"
            onChange={e => setQuery(e.target.value)}
            className="flex-1 px-3 py-2 outline-none bg-transparent text-sm sm:text-base"
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-full bg-[#6A38C2] text-white px-4 py-2"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
