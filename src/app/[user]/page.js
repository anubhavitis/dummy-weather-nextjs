import React from 'react'

function page({ params }) {
    return (
        <div className='flex flex-col justify-between items-center'>
            <div> Hello Mr {params.user} </div>
            <div> Welcome to Rocky's world </div>
        </div>
    )
}

export default page
