import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, Menu, User2, X } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    const navLinks = user?.role === 'recruiter'
        ? [
            { to: '/admin/companies', label: 'Companies' },
            { to: '/admin/jobs', label: 'Jobs' }
        ]
        : [
            { to: '/', label: 'Home' },
            { to: '/jobs', label: 'Jobs' },
            { to: '/browse', label: 'Browse' }
        ];

    return (
        <div className='bg-white shadow-sm'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16 px-4 md:px-0'>
                <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Portal</span></h1>

                {/* Desktop Nav */}
                <div className='hidden md:flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
                        {navLinks.map((link, idx) => (
                            <li key={idx}><Link to={link.to}>{link.label}</Link></li>
                        ))}
                    </ul>
                    {
                        !user ? (
                            <div className='flex items-center gap-2'>
                                <Link to="/login"><Button variant="outline">Login</Button></Link>
                                <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button></Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src={user?.profile?.profilePhoto} alt="profile" />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                    <div>
                                        <div className='flex gap-2 mb-2'>
                                            <Avatar>
                                                <AvatarImage src={user?.profile?.profilePhoto} alt="profile" />
                                            </Avatar>
                                            <div>
                                                <h4 className='font-medium'>{user?.fullname}</h4>
                                                <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col text-gray-600'>
                                            {user.role === 'student' && (
                                                <div className='flex items-center gap-2'>
                                                    <User2 />
                                                    <Button variant="link"><Link to="/profile">View Profile</Link></Button>
                                                </div>
                                            )}
                                            <div className='flex items-center gap-2'>
                                                <LogOut />
                                                <Button onClick={logoutHandler} variant="link">Logout</Button>
                                            </div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }
                </div>

                {/* Mobile Nav Toggle */}
             {/* Mobile Nav (Avatar + Menu icon) */}
<div className='md:hidden flex items-center gap-3'>
    {user && (
        <Popover>
            <PopoverTrigger asChild>
                <Avatar className="w-9 h-9 cursor-pointer">
                    <AvatarImage src={user?.profile?.profilePhoto} alt="profile" />
                </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-64">
                <div className='flex gap-2 mb-2'>
                    <Avatar>
                        <AvatarImage src={user?.profile?.profilePhoto} alt="profile" />
                    </Avatar>
                    <div>
                        <h4 className='font-medium'>{user?.fullname}</h4>
                        <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                    </div>
                </div>
                <div className='flex flex-col text-gray-600'>
                    {user.role === 'student' && (
                        <Link to="/profile">
                            <Button variant="ghost" className="w-full text-left">View Profile</Button>
                        </Link>
                    )}
                    <Button variant="ghost" className="w-full text-left" onClick={logoutHandler}>Logout</Button>
                </div>
            </PopoverContent>
        </Popover>
    )}

    {/* Hamburger menu toggle */}
    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <X /> : <Menu />}
    </button>
</div>

            </div>

            {isMobileMenuOpen && (
  <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-50 px-4 py-4 space-y-4">
    <ul className='space-y-2'>
      {navLinks.map((link, idx) => (
        <li key={idx}>
          <Link
            to={link.to}
            onClick={() => setIsMobileMenuOpen(false)}
            className="block font-medium"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
    {!user && (
      <div className='flex flex-col gap-2'>
        <Link to="/login">
          <Button variant="outline" className="w-full">Login</Button>
        </Link>
        <Link to="/signup">
          <Button className="bg-[#6A38C2] hover:bg-[#5b30a6] w-full">Signup</Button>
        </Link>
      </div>
    )}
  </div>
)}


        </div>
    )
}

export default Navbar
