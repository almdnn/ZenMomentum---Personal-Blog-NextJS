import React from 'react'

const Author = ({author}) => {
    
    return (
        <div className="text-center relative mt-20 mb-8 bg-white shadow-lg rounded-lg p-12">
            <div className="absolute -top-11 right-0 left-0 ">
            <img src={author.photo.url} height="100px" width="100px" className="rounded-full align-middle" />
            </div>
            <h3 className="font-bold my-4 text-xl">{author.name}</h3>
            <p className="text-lg">{author.bio}</p>
            
        </div>
    )
}

export default Author