import React from 'react'

const Map = () => {
    return (
        <div className='flex flex-1 h-96'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24116.684233612672!2d29.1972044!3d40.924832800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2str!4v1705170591568!5m2!1sen!2str"
                //  width="1200"
                // height="600"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className='flex flex-1'
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}

export default Map

{/* <div className='flex' style={{width:"700px"}}>
<iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24116.684233612672!2d29.1972044!3d40.924832800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2str!4v1705170591568!5m2!1sen!2str"
  width="800"
  height="600"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  className='rounded-lg flex'
  referrerPolicy="no-referrer-when-downgrade">
</iframe>
</div> */}