import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoMetaData from "../../components/videoMetaData/VideoMetaData"
import Comments from "../../components/comments/Comments"
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal"
import "./watchScreen.scss"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getRelatedVideos, getVideoById } from '../../redux/actions/videos.action'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

function WatchScreen() {
  const { id } = useParams()

  const dispatch = useDispatch()

  const { video, loading } = useSelector(state => state.selectedVideo)

  const channelTitle = video?.snippet.channelTitle

  const { videos, loading: relatedVideosLoading } = useSelector(
    state => state.relatedVideos
  )

  useEffect(() => {
    dispatch(getVideoById(id))
    if (channelTitle) {
      dispatch(getRelatedVideos(id, channelTitle))
    }
  }, [dispatch, id, channelTitle])

  return (
    <Row>
      <Col lg={8}>
        <div className='watchScreen__player' >
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder='0'
            title="MY VIDEO"
            allowFullScreen
            width='100%'
            height='100%'>
          </iframe>
        </div>
        {!loading ? (
          <VideoMetaData video={video} videoId={id} />
        ) : (
          <h6>Loading...</h6>
        )}
        <Comments videoId={id} totalComments={video?.statistics?.commentCount} />
      </Col>

      <Col lg={4}>
        {!relatedVideosLoading ? (
          videos
            ?.filter(video => video.snippet)
            .map(video => (
              <VideoHorizontal video={video} key={video.id.videoId} />
            ))
        ) : (
          [...Array(15)].map((j, i) => (
            <SkeletonTheme color='#343a40' highlightColor='#3c4147' key={i}>
              <Skeleton width='100%' height='160px' count={20} />
            </SkeletonTheme>
          ))
        )}
      </Col>
    </Row>
  )
}

export default WatchScreen
