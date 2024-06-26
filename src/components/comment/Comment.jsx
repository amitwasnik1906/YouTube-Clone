import React from 'react'
import "./_comment.scss"
import moment from 'moment'

function Comment({ comment }) {
    const { 
        authorDisplayName,
        authorProfileImageUrl,
        publishedAt,
        textDisplay, } = comment


    return (
        <div className='p-2 comment d-flex'>
            <img
                src= {authorProfileImageUrl}
                alt=''
                className='mr-3 rounded-circle'
            />
            <div className='comment__body'>
                <p className='mb-1 comment__header'>
                    {authorDisplayName} &nbsp; • &nbsp; {moment(publishedAt).fromNow()}
                </p>
                <p className='mb-0'>{textDisplay}</p>
            </div>
        </div>
    )
}

export default Comment
