import { Flex, Text, Button, useBreakpointValue } from "@aws-amplify/ui-react";
import Modal from "react-modal";
import { CloseIcon } from "../../ui-components";
import { YoutubeEmbed } from "../YoutubeEmbed";

export function YoutubeModal({
  modalIsOpen,
  closeModal,
  courseTitle,
  courseTrailerEmbedId,
}: {
  modalIsOpen: boolean;
  closeModal: any;
  courseTitle: string;
  courseTrailerEmbedId: string;
}) {
  Modal.setAppElement("#__next");

  const modalWidth = useBreakpointValue({
    base: "100vw",
    small: "100vw",
    medium: "90vw",
    large: "75vw",
    xl: "50vw"
  }) as string;

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={{
        content: {
          width: modalWidth,
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
      contentLabel={`Course trailer for ${courseTitle}`}
    >
      <Flex direction="column">
        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text
            fontFamily="Amazon Ember Display"
            fontWeight="300"
            fontSize="1.5rem"
          >{`Trailer for ${courseTitle}`}</Text>
          <Button onClick={closeModal}>
            <CloseIcon ariaLabel="Close modal" overrides={
              {
                "Vector 3": {
                  // @ts-ignore
                  paths: [
                    {
                      d: "M1 0C1 -0.552285 0.552285 -1 0 -1C-0.552285 -1 -1 -0.552285 -1 0L1 0ZM-1 16C-1 16.5523 -0.552285 17 0 17C0.552285 17 1 16.5523 1 16L-1 16ZM-1 0L-1 16L1 16L1 0L-1 0Z",
                      fillRule: "nonzero",
                      strokeWidth: 2,
                    },
                  ]
                },
                "Vector 4":{
                  // @ts-ignore
                  paths: [
                    {
                      d: "M1 0C1 -0.552285 0.552285 -1 0 -1C-0.552285 -1 -1 -0.552285 -1 0L1 0ZM-1 16C-1 16.5523 -0.552285 17 0 17C0.552285 17 1 16.5523 1 16L-1 16ZM-1 0L-1 16L1 16L1 0L-1 0Z",
                      fillRule: "nonzero",
                      strokeWidth: 2,
                    },
                  ]
                }
              }
            } />
          </Button>
        </Flex>
        <YoutubeEmbed embedId={courseTrailerEmbedId || ""} />
      </Flex>
    </Modal>
  );
}
