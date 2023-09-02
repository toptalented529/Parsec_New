import React from 'react'
import styled from 'styled-components'

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 100px 16px;
  min-height: calc(100vh - 64px);
  // background-color: ${({ theme }) => (theme.isDark ? '#141c23' : '#cfcfcf')};
  background-size: 150%;
  background: #030923;
  // background-image: ${({ theme }) => (theme.isDark ? `url('/images/background1.png')` : `url('/images/light.png')`)};
  background-repeat: no-repeat;
  background-position: center;
  // background: ${({ theme }) => (theme.isDark ? '#030923' : '#E5E5E5')};
`
const Div = styled.div`
  position: relative;
  max-width: 485px;
  width: 100%;
  background-color: #141436;
  box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px, rgb(0 0 0 / 4%) 0px 16px 24px,
    rgb(0 0 0 / 1%) 0px 24px 32px;
  border-radius: 10px;
  padding: 60px 30px;
  // margin-top: 130px;

  // border: ${({ theme }) => (theme.isDark ? '1px solid white' : '1px solid #6c4b00')};
`
const Page: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <StyledPage {...props}>
      <Div>{children}</Div>
    </StyledPage>
  )
}

export default Page
