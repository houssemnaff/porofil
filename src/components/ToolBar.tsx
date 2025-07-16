import { HStack, Text } from "@chakra-ui/react";
import ToolBarLeft from "./ToolBarLeft";
import ToolBarRight from "./ToolBarRight";

const ToolBar = ({ onTerminalClick }: { onTerminalClick?: () => void }) => {
  return (
    <HStack justifyContent="space-between" marginX={2}>
      <ToolBarLeft onTerminalClick={onTerminalClick} />
      <Text
        fontSize={{ base: "10px", md: "13px", lg: "13px", xl: "15px" }}
        transform="translateX(-50%)"
        position="absolute"
        left="50%"
        textAlign={"center"}
      >
        NAFFOUTI HOUSSEM - Full Stack & Mobile Developer | MERN & Flutter
      </Text>
      <ToolBarRight />
    </HStack>
  );
};

export default ToolBar;
