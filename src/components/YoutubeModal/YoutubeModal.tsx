import { Flex, useBreakpointValue, View } from "@aws-amplify/ui-react";
import {
  ClassAttributes,
  HTMLAttributes,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import Modal from "react-modal";
import { CloseIcon } from "../../ui-components";
import { YoutubeEmbed } from "../YoutubeEmbed";
import styles from "./YoutubeModal.module.scss";

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
  const modalWidth = useBreakpointValue({
    base: "100vw",
    small: "100vw",
    medium: "90vw",
    large: "75vw",
    xl: "50vw",
  }) as string;

  // Custom overlay element to hold the close button outside of the actual modal
  const OverlayElement = (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLDivElement> &
      HTMLAttributes<HTMLDivElement>,
    contentElement:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | ReactFragment
      | ReactPortal
      | null
      | undefined
  ) => {
    return (
      <div {...props}>
        <View onClick={closeModal} position="absolute" right="20px" top="20px">
          <CloseIcon
            color="white"
            tabIndex="0"
            role="button"
            className={styles["close-modal"]}
            ariaLabel="Close modal"
            overrides={{
              "Vector 3": {
                // @ts-ignore
                paths: [
                  {
                    d: "M1 0C1 -0.552285 0.552285 -1 0 -1C-0.552285 -1 -1 -0.552285 -1 0L1 0ZM-1 16C-1 16.5523 -0.552285 17 0 17C0.552285 17 1 16.5523 1 16L-1 16ZM-1 0L-1 16L1 16L1 0L-1 0Z",
                    fillRule: "nonzero",
                    strokeWidth: 2,
                  },
                ],
              },
              "Vector 4": {
                // @ts-ignore
                paths: [
                  {
                    d: "M1 0C1 -0.552285 0.552285 -1 0 -1C-0.552285 -1 -1 -0.552285 -1 0L1 0ZM-1 16C-1 16.5523 -0.552285 17 0 17C0.552285 17 1 16.5523 1 16L-1 16ZM-1 0L-1 16L1 16L1 0L-1 0Z",
                    fillRule: "nonzero",
                    strokeWidth: 2,
                  },
                ],
              },
            }}
          />
        </View>
        {contentElement}
      </div>
    );
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      overlayElement={OverlayElement}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.800)",
        },
        content: {
          width: modalWidth,
          padding: "0px",
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
      <Flex>
        <YoutubeEmbed embedId={courseTrailerEmbedId || ""} />
      </Flex>
    </Modal>
  );
}
