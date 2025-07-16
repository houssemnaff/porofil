import {
  VStack,
  Image,
  Text,
  HStack,
  Link,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Box,
  Slider,
} from "@chakra-ui/react";
import ProjectTech from "./ProjectTech";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

interface Props {
  ImageURL: string | string[];
  Title: string;
  Description: string;
  Technologies: string[];
  Source?: string;
  Demo?: string;
}

const Project = ({
  ImageURL,
  Title,
  Description,
  Technologies,
  Source,
  Demo,
}: Props) => {
  const cardBg = useColorModeValue("rgba(1, 22, 39, 0.8)", "gray.900");
  const textColor = useColorModeValue("nightOwl.text", "whiteAlpha.900");
  const secondaryText = useColorModeValue("gray.400", "gray.300");
  const borderColor = useColorModeValue(
    "rgba(126, 87, 194, 0.3)",
    "rgba(86, 156, 214, 0.3)"
  );
  const accentColor = useColorModeValue("syntax.keyword", "#0BCEAF");
  const techBorderColor = useColorModeValue("purple.500", "#0BCEAF");

  // Modal controls
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Convert ImageURL to array for slider usage
  const images = Array.isArray(ImageURL) ? ImageURL : [ImageURL];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <>
      <VStack
        bg={cardBg}
        borderRadius="10px"
        height="100%"
        border="1px solid"
        borderColor={borderColor}
        transition="all 0.3s ease"
        _hover={{
          transform: "translateY(-5px)",
          boxShadow: useColorModeValue(
            "0 10px 20px rgba(126, 87, 194, 0.2)",
            "0 10px 20px rgba(86, 156, 214, 0.2)"
          ),
          cursor: "pointer",
        }}
        onClick={onOpen} // ouvre la modal au clic sur la carte entière (ou mets sur Image si tu préfères)
      >
        {/* Image principale */}
        <Image
          width="100%"
          src={images[0]}
          alt={Title}
          borderTopRadius="10px"
          borderBottom="1px solid"
          borderBottomColor={borderColor}
          objectFit="cover"
          maxH="250px"
          loading="lazy"
        />
        <VStack align="left" width="100%" padding={5} height="100%" spacing={3}>
          <Text fontWeight="bold" fontSize="lg" color={textColor}>
            {Title}
          </Text>
          <Text color={secondaryText} fontSize="sm">
            {Description}
          </Text>
          <HStack wrap="wrap" spacing={2} marginY={2}>
            {Technologies.map((t) => (
              <ProjectTech
                key={t}
                label={t}
                borderColor={techBorderColor}
                textColor={textColor}
              />
            ))}
          </HStack>

          {(Source || Demo) && (
            <HStack spacing={4} marginTop="auto">
              {Source && (
                <Link
                  href={Source}
                  color={accentColor}
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize="sm"
                  fontWeight="semibold"
                  _hover={{ textDecoration: "underline" }}
                  onClick={(e) => e.stopPropagation()} // pour éviter ouverture modal au clic sur ce lien
                >
                  Source
                </Link>
              )}
              {Demo && (
                <Link
                  href={Demo}
                  color={accentColor}
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize="sm"
                  fontWeight="semibold"
                  _hover={{ textDecoration: "underline" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  Demo
                </Link>
              )}
            </HStack>
          )}
        </VStack>
      </VStack>

      {/* Modal affichant le slider d’images */}
<Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent bg={cardBg} borderRadius="md" maxW="800px">
          <ModalCloseButton />
          <ModalBody padding="1rem">
            <Box>
              <Slider {...sliderSettings}>
                {images.map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    alt={`${Title}-${i}`}
                    width="100%"
                    maxH="500px"
                    objectFit="contain"
                    borderRadius="md"
                    userSelect="none"
                    draggable={false}
                  />
                ))}
              </Slider>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Project;
