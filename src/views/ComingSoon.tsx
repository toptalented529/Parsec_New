import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text } from 'parsec-swap-uikit'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
// const StyledPage = styled(Page)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `
const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 295px);
`
const NotFound = () => {
  const { t } = useTranslation()

  return (
    <StyledPage>
      <StyledNotFound>
        <img src="logo.png" alt="logo" style={{ width: '128px', height: '128px' }} />
        {/* <LogoIcon width="64px" mb="8px" /> */}
        <Heading scale="xxl">{t('Coming Soon.')}</Heading>
        {/* <Text mb="16px">{t('Coming Soon.')}</Text> */}
        <br />
        <br />
        <Button as="a" href="/" scale="sm">
          {t('Back Home')}
        </Button>
      </StyledNotFound>
    </StyledPage>
  )
}

export default NotFound
