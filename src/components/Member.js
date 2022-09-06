import React, { Fragment } from 'react'

const Member = ({ name, children }) => {
  return (
    <Fragment>
      <h2>
        Members of my family: {name}
        { children ? <span>{children}</span> : <Fragment /> }
      </h2>
    </Fragment>
  )
}

export default Member
