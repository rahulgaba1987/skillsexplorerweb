import React, { PureComponent } from 'react'

export class Videos extends PureComponent {
  render() {
    return (
      <div className="main">
        <div className='videos'>
        <div className='text-center'>
                <h1>Core Java</h1>
                <iframe  src="https://www.youtube.com/embed/videoseries?si=8VXBQFjFEC0_qCOw&amp;list=PLL9sLyyoOiI4voOoojAa94Gg1T3dD8hze" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        
            <div className='text-center'>
                <h1>Java 8 Features</h1>
                <iframe  src="https://www.youtube.com/embed/videoseries?si=lp1duT5yzdsNyC9l&amp;list=PLL9sLyyoOiI6irJbG1npEzWPbwbkCn0bW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        
        </div>
        
      </div>
    )
  }
}

export default Videos
