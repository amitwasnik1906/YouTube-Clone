import React, { useEffect } from 'react'
import "./channelScreen.scss"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getVideosByChannel } from "../../redux/actions/videos.action"
import { getChannelDetails } from '../../redux/actions/channel.action'
import Video from '../../components/video/Video'
import numeral from 'numeral'
import { Col, Container, Row } from 'react-bootstrap'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

function ChannelScreen() {
  const { channelId } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVideosByChannel(channelId))
    dispatch(getChannelDetails(channelId))
  }, [dispatch, channelId])

  const { videos, loading } = useSelector(state => state.channelVideos)
  const { snippet, statistics } = useSelector(
    state => state.channelDetails.channel
  )

  return (
    <>
      <div className='px-5 py-2 my-2 d-flex justify-content-between align-items-center channelHeader'>
        <div className='d-flex align-items-center channelHeader__left'>
          <img src={snippet?.thumbnails?.default?.url} alt='' />

          <div className='ml-3 channelHeader__details'>
            <h3>{snippet?.title}</h3>
            <span>
              {numeral(statistics?.subscriberCount).format('0.a')}{' '}
              subscribers
            </span>
          </div>
        </div>

        <button>Subscribe</button>
      </div>

      <Container>
        <Row className='mt-2'>
          {!loading
            ? videos?.map(video => (
              <Col sm={6} md={4} lg={3} key={video.id}>
                <Video video={video} channelScreen />
              </Col>
            ))
            : [...Array(30)].map((j, i) => (
              <Col md={3} lg={3}>
                <SkeletonTheme
                  color='#343a40'
                  highlightColor='#3c4147'
                  key={i}
                >
                  <Skeleton width='100%' height='140px' />
                </SkeletonTheme>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  )
}

export default ChannelScreen
