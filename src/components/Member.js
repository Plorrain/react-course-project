import React, { Fragment } from 'react'

const Member = ({ name, children }) => {
  return (
    <Fragment>
      <h2>
        Members of my family: {name}
        <p>{children}</p>
      </h2>
    </Fragment>
  )
}

export default Member
