import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {getCategories} from '../services/index.js'

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
        .then((category) => setCategories(category))
    }, [])


    return (
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <h3 className="border-b font-semibold pb-1 mb-8">
            Categories
        </h3>
        {categories.map((category, index) => (
            <div key={category.title} className="flex items-center mb-4">
                <Link key={index} href={`/category/${category.slug}`} >
                    <span className="transition duration-200 cursor-pointer hover:text-blue-500">{category.name}</span>
                </Link>
            </div>
        ))}
        
        </div>
        )
    
 }

export default Categories