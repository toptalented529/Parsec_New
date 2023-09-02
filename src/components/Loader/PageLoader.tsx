import React from 'react'
import styled from 'styled-components'
// import { Spinner } from 'parsec-swap-uikit'
import Page from '../Layout/Page'
// import Spinner from '../../../public/images/spinner.gif'

// const Wrapper = styled(Page)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 295px);
`

const PageLoader: React.FC = () => {
  return (
    <Wrapper>
      {/* <Spinner /> */}
      <img src="/images/spinner.gif" alt="icon" width="256px" height="256px" />
    </Wrapper>
  )
}

export default PageLoader
