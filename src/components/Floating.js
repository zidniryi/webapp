import React, { Fragment } from 'react'
import { Container, Button, Link } from 'react-floating-action-button'

const Floating = () => {
  return (
    <Fragment>
      <Container>
        <Link href="#" tooltip="Create note link" icon="far fa-sticky-note" />
        <Link href="#" tooltip="Create note link" icon="far fa-sticky-note" />
        <Link href="#" tooltip="Add user link" icon="fas fa-user-plus" />
        <Button
          styles={{
            backgroundColor: '#4693CC',
            color: 'white',
          }}
          tooltip="The big plus button!"
          icon="fas fa-plus"
          rotate={true}
          onClick={() => alert('FAB Rocks!')}
        />
      </Container>
    </Fragment>
  )
}

export default Floating
