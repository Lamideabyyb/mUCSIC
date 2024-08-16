import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import Home  from '../pages/Home.js'
import Documentation from '../pages/Documentation'
import Developer from '../pages/Developer'
import Courses from '../pages/Developer'
import Community from '../pages/Community'
import Blog from '../pages/Blog'
import About from '../pages/About'

const RouterLink = () => {
    return (
    <Router>
        <div>
            <nav>i
                <ul>
                    <li>
                       <Link to='/'>Home.</Link>
                    </li>
                    <li>
                       <Link to="/blog">Blog.</Link>
                    </li>
                    <li>
                       <Link to="/documentation">Documentation.</Link>
                    </li>
                    <li>
                       <Link to="/community">Community</Link>
                    </li>
                    <li>
                       <Link to="/courses">Courses</Link>
                    </li>
                    <li>
                       <Link to="/developer">Developers</Link>
                    </li>
                    <li>
                       <Link to="/about">About</Link>                        
                    </li>
                </ul>
            </nav>
        </div>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/blog" element={<Blog />} />
         <Route path="/documentation" element={<Documentation />} />
         <Route path="/community" element={<Community />} />
         <Route path="/courses" element={<Courses />} />
         <Route path="/developer" element={<Developer />} />
         <Route path="/about" element={<About />} />
        </Routes>
    </Router>
    )
}
export default RouterLink