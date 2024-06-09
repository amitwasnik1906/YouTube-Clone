import React, { useEffect, useState } from 'react'
import "./_comments.scss"
import Comment from '../comment/Comment'
import { useDispatch, useSelector } from 'react-redux'
import { addComment, getCommentsOfVideoById } from '../../redux/actions/comments.action'

function Comments({ videoId, totalComments }) {
  const dispatch = useDispatch()

  const comments = useSelector((state) => state.commentList.comments)
  const { photoURL } = useSelector(state => state.auth?.user)

  const _comments = comments?.map((comment) => (
    comment.snippet.topLevelComment.snippet
  ))

  const [text, setText] = useState('')

  const handleComment = (e) => {
    e.preventDefault()
    if (text.length === 0) return

    // dispatch(addComment(videoId, text))
    setText('')
  }

  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId))
  }, [videoId, dispatch])

  return (
    <div className='comments'>
      <p>{totalComments} Comments</p>

      <div className='comments__form d-flex w-100 my-2'>
        <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
          alt=""
          className='rounded-circle mr-3'
        />
        <form onSubmit={(e) => handleComment(e)}>
          <input
            type="text"
            className='flex-grow-1'
            placeholder='Write a Comment....'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button className='border-0 p-2'>Comment</button>
        </form>
      </div>

      <div className='comments__list'>
        {
          _comments?.map((cmt, i) => (
            <Comment comment={cmt} key={i} />
          ))
        }
      </div>
    </div>
  )
}

export default Comments
