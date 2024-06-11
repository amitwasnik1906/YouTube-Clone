import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
import { getSubscribedChannels } from '../../redux/actions/videos.action'
import './subscriptionsScreen.scss'

const SubscriptionsScreen = () => {
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getSubscribedChannels())
    // }, [dispatch])

    // const { loading, videos } = useSelector(state => state.subscriptionsChannel)

    return (
        // <Container fluid>
        //     {!loading ? (
        //         videos?.map(video => (
        //             <VideoHorizontal video={video} key={video.id} subScreen />
        //         ))
        //     ) : (
        //         <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
        //             <Skeleton width='100%' height='160px' count={20} />
        //         </SkeletonTheme>
        //     )}
        // </Container>
        <div className='text-center mt-12'>
           <h1 className=''>SubscriptionsScreen</h1>
           <h4 className=''>Currently Not Available</h4>
        </div>
    )
}

export default SubscriptionsScreen