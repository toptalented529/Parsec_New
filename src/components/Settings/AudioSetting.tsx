import React from "react";
import { Box, Flex, Text, Toggle, useMatchBreakpoints } from "parsec-swap-uikit";
import { useAudioModeManager } from "state/user/hooks";

type AudioSettingModalProps = {
  translateString: (translationId: number, fallback: string) => string;
};

const AudioSetting = () => {
  const { isSm, isXs } = useMatchBreakpoints();
  const [audioPlay, toggleSetAudioMode] = useAudioModeManager();

  return (
    <Box mb="16px">
      <Flex alignItems="center" mb="8px">
        <Text bold>Audio</Text>
      </Flex>
      <Box>
        <Toggle
          scale={isSm || isXs ? "sm" : "md"}
          checked={audioPlay}
          onChange={toggleSetAudioMode}
        />
      </Box>
    </Box>
  );
};

export default AudioSetting;
