import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import Main from '../components/section/Main'
import Loding from '../components/section/Loding'

const SearchPage = () => {
    const { searchID } = useParams();
    const [videos, setVideos] = useState([]);
    const [loding, setloding] = useState(true);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=48&q=${searchID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
                const data = await response.json();
                setVideos(data.items);
                // console.log(data)

                //최소 로딩 소스 1초 유지
                setTimeout(() => {
                    setloding(false);
                }, 1000);
            } catch (error) {
                console.log(error);
                setloding(false);
            }
        }
        fetchVideos();


    }, [searchID])


    return (
        <Main
            title={`어트랙션 검색 : ${searchID}`}
            desciption={`어트랙션 서치 페이지입니다. - 검색 키워드 : ${searchID}`}
        >
            {loding ? (
                <Loding />
            ) : (
                <section id='searchPage' className='fade-in'>
                    <h2><em>{`${searchID}`}</em> 검색 결과입니다.</h2>
                    <div className='video__inner search'>
                        {videos.map((video, index) => (
                            <div className='video' key={index}>
                                <div className="video__thumb play__icon">
                                    <Link
                                        to={`/video/${video.id.videoId}`}
                                        style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }}>

                                    </Link>
                                </div>
                                <div className="video__info">
                                    <div className='title'>
                                        <Link to={`/video/${video.id.videoId}`}>
                                            {video.snippet.title}
                                        </Link>
                                    </div>
                                    <div className='author'>
                                        <Link to={`/video/${video.snippet.channelId}`}>
                                            {video.snippet.channelTitle}
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </section>
            )}



        </Main>
    )
}

export default SearchPage
