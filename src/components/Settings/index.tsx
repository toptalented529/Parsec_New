import React, { ReactNode } from "react";
import styled from "styled-components";
import {
  Heading,
  IconButton,
  Text,
  Flex,
  useModal,
  TuneIcon,
  HistoryIcon,
} from "parsec-swap-uikit";
import SettingsModal from "./SettingsModal";

interface PageHeaderProps {
  children?: ReactNode;
}

const StyledPageHeader = styled.div`
  padding: 0 px;
  background:#141436;

`;

const StyledFlex = styled(Flex)`
  justify-content: flex-end;
  padding-right: 2vw;
`;

const Details = styled.div`
  flex: 1;
`;

const Settings = ({ children }: PageHeaderProps) => {
  const [onPresentSettings] = useModal(<SettingsModal />);

  return (
    <StyledPageHeader>
      <StyledFlex alignItems="center">
        <IconButton variant="text" onClick={onPresentSettings} title="Settings">
          <TuneIcon width="24px" color="currentColor" />
        </IconButton>
      </StyledFlex>
      {children && <Text mt="16px">{children}</Text>}
    </StyledPageHeader>
  );
};

export default Settings;
