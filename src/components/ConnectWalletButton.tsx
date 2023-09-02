import React from 'react'
import { Button, useWalletModal } from 'parsec-swap-uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'

const ConnectButton = styled(Button).attrs({ variant: 'text', scale: 'sm' })`
  background-image: linear-gradient(to left, #991cd1,#d4307a);
  color: white;
  padding: 12px 0px;
  width: 100%;
  border-radius: 32px;
  text-align: center;
  border: 1px solid transparent;
  font-weight: 500;
  font-size: 17px;
  line-height: 26px;
  letter-spacing: 0.01em;
  text-transform: none;
  height: 3.3vw;
  box-shadow: none;
`

const ConnectWalletButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (
    <ConnectButton {...props} onClick={onPresentConnectModal}>
      <img src="/wallet-2.png" alt="wallet" style ={{paddingRight:"20px"}} />{t('Connect to Wallet')}
    </ConnectButton>
  )
}

export default ConnectWalletButton
