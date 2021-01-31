import { useState, useEffect, useCallback } from 'react'
import Toggle from 'react-toggle'
import Gallery from 'react-photo-gallery'
import Loader from 'react-loader-spinner'
import getImages from './utils/fetchService'
import Photo from './Photo'

import './App.css';
import "react-toggle/style.css"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

/**
 * This component fetches a list of images and displays a image gallery
 */

const App = () => {
  const [data, setData] = useState({ fetched: false, images: [] })
  const [showPopup, setShowPopup] = useState(true)

  const renderImage = useCallback((props) => <Photo {...props} />)

  const handleClick = useCallback((showPopup) => {
    if (showPopup) window.alert('You are leaving this page')
  })

  const handleToggle = useCallback(() => setShowPopup(!showPopup))

  useEffect(async () => {
    const result = await getImages()
    const curatedList = result.map((image) => {
      return {
        ...image,
        src: image.download_url,
      }
    })
    setData({ fetched: true, images: curatedList })
  }, [])

  if (!data.fetched) return <div className="container"><Loader type="TailSpin" /></div>
  if (data.fetched && data.images.length === 0) return <div className="container">No Images Found</div>
  return (
    <>
      <div className="container">
        <Toggle checked={showPopup} onChange={handleToggle}/>
        <span className='toggleLabel'>Show overlay</span>
      </div>
      <Gallery
        photos={data.images}
        onClick={() => handleClick(showPopup)}
        renderImage={renderImage}
      />
    </>
  )
}

export default App;
