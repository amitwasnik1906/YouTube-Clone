import React, { useEffect } from 'react'
import "./_videoMataData.scss"
import { MdThumbDown, MdThumbUp } from 'react-icons/md'
import ShowMoreText from "react-show-more-text";
import numeral from 'numeral';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { checkSubscriptionStatus, getChannelDetails } from '../../redux/actions/channel.action';
import { useNavigate } from 'react-router-dom';

function VideoMetaData({ video, videoId }) {
  const { channelId, channelTitle, description, title, publishedAt } = video?.snippet
  const { viewCount, likeCount, dislikeCount } = video?.statistics

  const dispatch = useDispatch()

  const {
    snippet: channelSnippet,
    statistics: channelStatistics,
  } = useSelector(state => state.channelDetails.channel)

  const subscriptionStatus = useSelector(
    state => state.channelDetails.subscriptionStatus
  )

  useEffect(() => {
    dispatch(getChannelDetails(channelId))
    // dispatch(checkSubscriptionStatus(channelId))
  }, [dispatch, channelId])

  const navigate = useNavigate()
  const handleClickOfChannel = () => {
    navigate(`/channel/${channelId}`)
  }

  return (
    <div className='py-2 videoMetaData'>
      <div className='videoMetaData__top'>
        <h5>{title}</h5>
        <div className='py-1 d-flex justify-content-between align-items-center'>
          <span>
            {numeral(viewCount).format('0.a')} Views •{' '}
            {moment(publishedAt).fromNow()}
          </span>

          <div>
            <span className='mr-3'>
              <MdThumbUp size={26} /> {numeral(likeCount).format('0.a')}
            </span>
            {" "}
            <span className='mr-3'>
              <MdThumbDown size={26} />{' '}
              {numeral(dislikeCount).format('0.a')}
            </span>
          </div>
        </div>
      </div>
      <div className='py-3 my-2 videoMetaData__channel d-flex justify-content-between align-items-center'>
        <div className='d-flex' >
          <img
            src={channelSnippet?.thumbnails?.default?.url}
            alt=''
            className='rounded-circle '
            onClick={handleClickOfChannel}
          />
          <div className='d-flex flex-column'>
            <span onClick={handleClickOfChannel}>{channelTitle}</span>
            <div>
              {' '}
              {numeral(channelStatistics?.subscriberCount).format(
                '0.a'
              )}{' '}
              Subscribers
            </div>
          </div>
        </div>

        <button
          className={`p-2 m-2 border-0 btn ${subscriptionStatus && 'btn-gray'}`}
        >
          {subscriptionStatus ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
      <div className='videoMetaData__description'>
        <ShowMoreText
          lines={3}
          more='SHOW MORE'
          less='SHOW LESS'
          anchorClass='showMoreText'
          expanded={false}
        >
          {description}
        </ShowMoreText>
      </div>
    </div>
  )
}

export default VideoMetaData
