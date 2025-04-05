import React, { useRef, useState } from 'react'

import Events from '../Components/events/events'

const EventsPage = (data) => {

  

  return (
    <div className="EventsPage">
      <Events data = {data} />
      {/* <GComp styles={styles[0]}/> */}
    </div>
  )
}

export default EventsPage
