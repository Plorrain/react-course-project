import React, { Fragment } from 'react'

const Member = ({ name, age, children }) => {
  return (
    <Fragment>
      <h2>
        Family member: {name} : {age}
        { children ? <span>{children}</span> : <Fragment /> }
      </h2>
    </Fragment>
  )
}

export default Member
