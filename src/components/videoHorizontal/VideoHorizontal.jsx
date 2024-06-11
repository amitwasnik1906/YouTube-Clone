import React, { useEffect, useState } from 'react'
import "./_videoHorizontal.scss"
import { Col, Row } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { AiFillEye } from 'react-icons/ai'
import numeral from 'numeral'
import moment from 'moment'
import request from '../../api'
import { useNavigate } from 'react-router-dom'

function VideoHorizontal({ video, searchScreen, subScreen }) {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails: { medium },
      resourceId,
    },
  } = video

  const isVideo = !(id.kind === 'youtube#channel' || subScreen)

  const [views, setViews] = useState(null)
  const [duration, setDuration] = useState(null)
  const [channelIcon, setChannelIcon] = useState(null)

  const seconds = moment.duration(duration).asSeconds()
  const _duration = moment.utc(seconds * 1000).format('mm:ss')

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request('/videos', {
        params: {
          part: 'contentDetails,statistics',
          id: id.videoId,
        },
      })
      setDuration(items[0].contentDetails.duration)
      setViews(items[0].statistics.viewCount)
    }
    if (isVideo) get_video_details()
  }, [id, isVideo])

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request('/channels', {
        params: {
          part: 'snippet',
          id: channelId,
        },
      })
      setChannelIcon(items[0].snippet.thumbnails.default)
    }
    get_channel_icon()
  }, [channelId])

  const navigate = useNavigate()
  const _channelId = resourceId?.channelId || channelId

  const handleClick = () => {
    isVideo
      ? navigate(`/watch/${id.videoId}`)
      : navigate(`/channel/${_channelId}`)
  }
  const handleChannelClick = () => {
    navigate(`/channel/${_channelId}`)
  }

  const thumbnail = !isVideo && 'videoHorizontal__thumbnail-channel'

  return (
    <Row
      className='py-2 m-1 videoHorizontal align-items-center'
    >
      {/* //TODO refractor grid */}
      <Col
        onClick={handleClick}
        xs={6}
        md={searchScreen ? 4 : 6}
        className='videoHorizontal__left'>
        <LazyLoadImage
          src={medium.url}
          effect='blur'
          className={`videoHorizontal__thumbnail ${thumbnail}`}
          wrapperClassName='videoHorizontal__thumbnail-wrapper'
        />

        {isVideo && (
          <span className='videoHorizontal__duration'>{_duration}</span>
        )}
      </Col>

      <Col
        xs={6}
        md={searchScreen ? 8 : 6}
        className='p-0 videoHorizontal__right'>
        <p className={`mb-1 videoHorizontal__title ${!isVideo && 'videoHorizontal__titleChannel'}`} onClick={handleClick}>
          {title}
        </p>

        {isVideo && (
          <div className='videoHorizontal__details'>
            <AiFillEye /> {numeral(views).format('0.a')} Views •
            {moment(publishedAt).fromNow()}
          </div>
        )}

        <div className='my-1 videoHorizontal__channel d-flex align-items-center' onClick={handleChannelClick}>
          {isVideo && (
            <LazyLoadImage src={channelIcon?.url} effect='blur' onClick={handleChannelClick}/>
          )}
          <p className='mb-0 '>{channelTitle}</p>
        </div>

        {(searchScreen || subScreen) && (
          <p className='mt-3 videoHorizontal__desc'>{description}</p>
        )}

      </Col>
    </Row>
  )
}

export default VideoHorizontal
