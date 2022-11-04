import React from 'react'
import Button from 'react-bootstrap/Button'
function BS5Test() {
  return (
    <>
      <button type="button" class="btn btn-primary">
        Primary
      </button>
      <button type="button" class="btn btn-secondary">
        Secondary
      </button>
      <div class="alert alert-light" role="alert">
        A simple light alert—check it out!
      </div>
      <div class="alert alert-dark" role="alert">
        A simple dark alert—check it out!
      </div>
      <Button variant="secondary">Left</Button>
      <Button variant="secondary">Middle</Button>
    </>
  )
}
export default BS5Test
