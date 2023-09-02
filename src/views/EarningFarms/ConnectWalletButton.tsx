import React from 'react'
import styled from 'styled-components'
import { Button, useWalletModal } from 'parsec-swap-uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'

const ConnectButton = styled(Button)`
  align-items: center;
  background-image: linear-gradient(to left, #991cd1,#d4307a);
  color: white;
  margin-top: 52px;
  font-weight: 400;
  padding: 0px;
  width: 100%;
  border-radius: 32px;
  padding: 12px 0px;
  font-size: 17px;
  line-height: 26px;
  box-shadow: none;
  border:0px;
`

const ConnectWalletButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (
    <ConnectButton onClick={onPresentConnectModal} {...props}>
      <img src="/wallet-2.png" alt="wallet" style ={{paddingRight:"20px"}} />{t('Connect to a wallet')}
    </ConnectButton>
  )
}

export default ConnectWalletButton
