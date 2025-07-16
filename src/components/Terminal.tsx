import { useState, useRef, useEffect } from "react";
import { Box, Input, Text, VStack, HStack, IconButton, Flex } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

interface TerminalProps {
  onClose: () => void;
}

const commandToRoute: Record<string, string> = {
  home: "/",
  about: "/about",
  projects: "/projects",
  contact: "/contact",
};

const PROMPT = "PS C:\\Users\\houssemnaffouti>";

const Terminal = ({ onClose }: TerminalProps) => {
  const [history, setHistory] = useState<string[]>(["Welcome to the VSCode Terminal! Type 'home', 'about', 'projects', or 'contact' to navigate."]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const command = input.trim().toLowerCase();
    setHistory((h) => [
      ...h,
      `${PROMPT} ${command}`
    ]);
    if (commandToRoute[command]) {
      setHistory((h) => [...h, `Navigating to ${command}...`]);
      navigate(commandToRoute[command]);
      setInput("");
      return;
    }
    setHistory((h) => [...h, `Unknown command: ${command}`]);
    setInput("");
  };

  return (
    <Box
      position="fixed"
      left={0}
      bottom={0}
      width="100vw"
      maxWidth="100vw"
      height={{ base: "200px", md: "250px" }}
      bg="#1e1e1e"
      color="#d4d4d4"
      borderTop="1px solid #333"
      boxShadow="0 -2px 8px rgba(0,0,0,0.2)"
      zIndex={2000}
      fontFamily="'Fira Mono', 'Consolas', 'Menlo', monospace"
      display="flex"
      flexDirection="column"
    >
      {/* Top bar like VSCode terminal tabs */}
      <Flex align="center" justify="space-between" bg="#232323" borderBottom="1px solid #222" px={3} py={1}>
        <HStack spacing={3}>
          <Box bg="#232323" color="#d4d4d4" px={3} py={1} borderRadius="4px 4px 0 0" fontWeight="bold" fontSize="sm" borderTop="2px solid #3794ff">TERMINAL</Box>
        </HStack>
        <IconButton aria-label="Close terminal" icon={<CloseIcon />} size="sm" onClick={onClose} bg="transparent" color="#d4d4d4" _hover={{ bg: "#333" }} />
      </Flex>
      {/* Terminal content */}
      <VStack align="start" spacing={1} flex={1} overflowY="auto" px={4} py={2}>
        {history.map((line, idx) => (
          <Text key={idx} fontFamily="inherit" fontSize="sm">{line}</Text>
        ))}
      </VStack>
      <Box px={4} pb={3} pt={1} borderTop="1px solid #222" bg="#232323">
        <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
          <Text as="span" fontFamily="inherit" fontSize="sm" color="#4ec9b0" mr={2}>{PROMPT}</Text>
          <Input
            ref={inputRef}
            value={input}
            onChange={handleInput}
            placeholder="Type a command..."
            autoFocus
            bg="#1e1e1e"
            color="#d4d4d4"
            fontFamily="inherit"
            border="none"
            borderRadius="0"
            _focus={{ boxShadow: "none", border: "none" }}
          />
        </form>
      </Box>
    </Box>
  );
};

export default Terminal; 