import React from 'react'

const NotFound = () => {
  return (
    <div className='notfound d-flex justify-content-center align-items-center'>
        <div className="animation">
            <h4>Something went wrong</h4>
            <small>Sorry, we can't find the page you're looking for.</small>
            <h6>Error Code 404</h6>
            <button className='btn btn-primary px-3'>Go Back</button>
        </div>
    </div>
  )
}

export default NotFound