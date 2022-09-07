import React, { Fragment } from 'react'

const Member = ({ name, age, children }) => {
  return (
    <Fragment>
      <h2 style={{
        backgroundColor: age < 35 ? 'violet':'pink',
        color: age < 35 ? '#7F8487':'white' }}>
        Family member: {name} : {age}
        { children ? <span>{children}</span> : <Fragment /> }
      </h2>
    </Fragment>
  )
}

export default Member
