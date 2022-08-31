import {
  Button,
  Flex,
  Icon,
  Text,
  View,
  VisuallyHidden,
} from "@aws-amplify/ui-react";
import {
  createContext,
  useMemo,
  useState,
  useContext,
  useLayoutEffect,
  useRef,
  useEffect,
} from "react";
import styles from "./GlobalNav.module.scss";

// Helper function to create the twitter and discord icons
function IconLink({ iconType }: { iconType: string }) {
  let icon;
  switch (iconType) {
    case "twitter":
      icon = (
        <Icon
          ariaLabel="Twitter icon"
          width="20"
          height="18"
          viewBox={{ width: 20, height: 18 }}
          pathData="M20 2.79906C19.2641 3.12541 18.4733 3.34598 17.6433 3.44517C18.4905 2.93733 19.1411 2.1332 19.4475 1.17508C18.6547 1.64525 17.7765 1.98675 16.8419 2.1708C16.0933 1.37334 15.027 0.875 13.8468 0.875C11.5807 0.875 9.74344 2.71216 9.74344 4.97815C9.74344 5.29974 9.7798 5.61292 9.84974 5.91322C6.43952 5.74211 3.41607 4.10855 1.3923 1.62609C1.0391 2.23211 0.836753 2.93696 0.836753 3.68893C0.836753 5.11246 1.56121 6.3684 2.6622 7.1042C1.98954 7.08291 1.35689 6.89834 0.803614 6.59101C0.803321 6.60813 0.803321 6.62532 0.803321 6.64258C0.803321 8.63066 2.21771 10.2891 4.09481 10.666C3.75047 10.7598 3.38798 10.8099 3.01372 10.8099C2.74933 10.8099 2.49226 10.7842 2.24178 10.7363C2.76389 12.3665 4.27923 13.5528 6.07476 13.5859C4.67047 14.6864 2.9012 15.3424 0.978821 15.3424C0.647646 15.3424 0.321007 15.323 0 15.2851C1.81587 16.4493 3.97271 17.1286 6.28992 17.1286C13.8372 17.1286 17.9644 10.8762 17.9644 5.45395C17.9644 5.27604 17.9604 5.09908 17.9525 4.92314C18.7542 4.34462 19.4499 3.62192 20 2.79906Z"
          fill="#545B64"
          fr={undefined}
        />
      );
      break;
    case "discord":
      icon = (
        <Icon
          ariaLabel="Discord icon"
          width="20"
          height="16"
          viewBox={{ width: 20, height: 16 }}
          pathData="M16.9419 1.6144C15.6473 1.01435 14.263 0.578267 12.8157 0.329956C12.638 0.648282 12.4304 1.07644 12.2872 1.41703C10.7488 1.18784 9.22445 1.18784 7.7143 1.41703C7.57116 1.07644 7.3588 0.648282 7.17947 0.329956C5.73067 0.578267 4.3448 1.01596 3.05016 1.61757C0.438869 5.52654 -0.269009 9.33842 0.0849306 13.0962C1.81688 14.3774 3.49534 15.1557 5.14548 15.665C5.55291 15.1096 5.91628 14.5191 6.22931 13.8968C5.63313 13.6723 5.06211 13.3954 4.52256 13.0739C4.6657 12.9689 4.80571 12.859 4.94098 12.746C8.23183 14.2708 11.8074 14.2708 15.0589 12.746C15.1958 12.859 15.3358 12.9689 15.4774 13.0739C14.9362 13.397 14.3637 13.6739 13.7675 13.8984C14.0805 14.5191 14.4423 15.1112 14.8513 15.6666C16.503 15.1573 18.1831 14.379 19.915 13.0962C20.3303 8.73998 19.2056 4.96311 16.9419 1.6144ZM6.67765 10.7852C5.68977 10.7852 4.87963 9.8716 4.87963 8.75907C4.87963 7.64655 5.67247 6.73138 6.67765 6.73138C7.68285 6.73138 8.49297 7.64495 8.47567 8.75907C8.47723 9.8716 7.68285 10.7852 6.67765 10.7852ZM13.3223 10.7852C12.3344 10.7852 11.5243 9.8716 11.5243 8.75907C11.5243 7.64655 12.3171 6.73138 13.3223 6.73138C14.3275 6.73138 15.1376 7.64495 15.1203 8.75907C15.1203 9.8716 14.3275 10.7852 13.3223 10.7852Z"
          fill="#545B64"
          fr={undefined}
        />
      );
      break;
    default:
      icon = <></>;
      break;
  }

  return icon;
}

// Helper function to create an external icon link
function ExternalLink({ children }: { children: any }) {
  const externalIcon = (
    <Icon
      ariaLabel="External link icon"
      width="18"
      height="18"
      viewBox={{ width: 18, height: 18 }}
      paths={[
        {
          d: "M9.79505 1.59277L16.3138 1.59278M16.3138 1.59278L16.3138 8.11155M16.3138 1.59278L9.79504 8.11156",
          stroke: "#545B64",
          strokeWidth: "1.5",
          strokeLinecap: "round",
        },
        {
          d: "M17.0834 12.3333C17.0834 11.9191 16.7476 11.5833 16.3334 11.5833C15.9192 11.5833 15.5834 11.9191 15.5834 12.3333H17.0834ZM5.66675 2.41663C6.08096 2.41663 6.41675 2.08084 6.41675 1.66663C6.41675 1.25241 6.08096 0.916626 5.66675 0.916626V2.41663ZM15.5834 12.3333V13.6666H17.0834V12.3333H15.5834ZM13.6667 15.5833H4.33341V17.0833H13.6667V15.5833ZM4.33341 15.5833C3.27487 15.5833 2.41675 14.7252 2.41675 13.6666H0.916748C0.916748 15.5536 2.44644 17.0833 4.33341 17.0833V15.5833ZM15.5834 13.6666C15.5834 14.7252 14.7253 15.5833 13.6667 15.5833V17.0833C15.5537 17.0833 17.0834 15.5536 17.0834 13.6666H15.5834ZM4.33341 2.41663H5.66675V0.916626H4.33341V2.41663ZM2.41675 4.33329C2.41675 3.27475 3.27487 2.41663 4.33341 2.41663V0.916626C2.44644 0.916626 0.916748 2.44632 0.916748 4.33329H2.41675ZM2.41675 13.6666V4.33329H0.916748V13.6666H2.41675Z",
          fill: "#545B64",
        },
      ]}
      fr={undefined}
    />
  );

  return (
    <div
      style={{ display: "flex", alignItems: "center", columnGap: "10.67px" }}
    >
      {children}
      {externalIcon}
    </div>
  );
}

// Helper function to create the nav menu links
function NavMenuLink({
  navMenuItem,
  currentMenuItem = "",
  customKey,
  isMobile = false,
}: {
  navMenuItem: NavMenuItem;
  currentMenuItem: string;
  customKey?: string;
  isMobile?: boolean;
}) {
  const { setShowGlobalNav } = useContext(NavMobileContext);

  let linkContent;

  switch (navMenuItem.type) {
    case "EXTERNAL":
      linkContent = <ExternalLink>{navMenuItem.label}</ExternalLink>;
      break;
    case "ICON":
      linkContent = (
        <IconLink iconType={navMenuItem.icon ? navMenuItem.icon : ""} />
      );
      break;
    default:
      linkContent = navMenuItem.label;
      break;
  }

  if (navMenuItem.type === "DEFAULT") {
    if (isMobile) {
      if (navMenuItem.label === currentMenuItem) {
        return (
          <View
            tabIndex={0}
            className={`${styles["nav-menu-item"]}`}
            {...(customKey ? { key: customKey } : {})}
            onClick={() => setShowGlobalNav(false)}
            ariaLabel={`Show ${linkContent} nav bar`}
          >
            {linkContent}
          </View>
        );
      } else {
        return (
          <a
            className={`${styles["nav-menu-item"]}`}
            {...(customKey ? { key: customKey } : {})}
            href={navMenuItem.url}
          >
            {linkContent}
          </a>
        );
      }
    } else {
      return (
        <a
          className={`${styles["nav-menu-item"]} ${
            navMenuItem.label === currentMenuItem
              ? styles["current-nav-menu-item"]
              : ""
          }`}
          {...(customKey ? { key: customKey } : {})}
          href={navMenuItem.url}
        >
          {linkContent}
        </a>
      );
    }
  } else {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={styles["nav-menu-item"]}
        {...(customKey ? { key: customKey } : {})}
        href={navMenuItem.url}
      >
        {linkContent}
      </a>
    );
  }
}

export interface NavMenuItem {
  type: "DEFAULT" | "EXTERNAL" | "ICON";
  label: string;
  url: string;
  order: number;
  placement: "LEFT" | "RIGHT";
  icon?: string;
}

interface NavProps {
  links: NavMenuItem[];
  currentSite: string;
  secondaryNavDesktop?: JSX.Element;
  secondaryNavMobile?: JSX.Element;
  setIsMobileState?: any;
}

type NavMobileContextType = {
  showGlobalNav: boolean;
  setShowGlobalNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavMobileContext = createContext<NavMobileContextType>({
  showGlobalNav: false,
  setShowGlobalNav: () => ({}),
});

export function GlobalNav({
  links,
  currentSite,
  secondaryNavDesktop,
  secondaryNavMobile,
}: NavProps) {
  const leftLinks: NavMenuItem[] = links.filter((e) => e.placement === "LEFT");
  const rightLinks: NavMenuItem[] = links.filter(
    (e) => e.placement === "RIGHT"
  );

  leftLinks.sort((a, b) => a.order - b.order);
  rightLinks.sort((a, b) => a.order - b.order);

  const [isMobileState, setIsMobileState] = useState(false);
  const [windowWidth, setWindowWidth] = useState(Infinity);
  const [currentWindowWidth, setCurrentWindowWidth] = useState(
    window.innerWidth
  );
  const navDesktopRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const handleWindowSizeChange = () => {
      setCurrentWindowWidth(window.innerWidth);

      if (navDesktopRef.current !== null) {
        if (
          navDesktopRef.current.scrollHeight >
          navDesktopRef.current.clientHeight
        ) {
          setWindowWidth(window.innerWidth);
          setIsMobileState(true);
        }
      }
    };

    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useLayoutEffect(() => {
    if (currentWindowWidth > windowWidth) {
      setIsMobileState(false);
      setWindowWidth(Infinity);
    }
  }, [windowWidth, currentWindowWidth]);

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showGlobalNav, setShowGlobalNav] = useState(false);

  const value = useMemo(
    () => ({ showGlobalNav, setShowGlobalNav }),
    [showGlobalNav]
  );

  return (
    <>
      <div style={{ display: isMobileState ? "block" : "none" }}>
        <NavMobileContext.Provider value={value}>
          <nav className={styles.navbar}>
            <div className={styles["mobile-nav-container"]}>
              <div
                style={{
                  display: "flex",
                  columnGap: "8px",
                  alignItems: "center",
                }}
              >
                <Icon
                  ariaLabel="Amplify Dev Center logo"
                  width="24"
                  height="22"
                  viewBox={{ width: 24, height: 22 }}
                  pathData="M20.6144 19L10.1205 1H13.5019L24 19H20.6144ZM7.80721 5.3588L15.4882 19H18.7952L9.45719 2.42859L7.80721 5.3588ZM4.89082 10.5419L0 19H13.8795L12.1271 15.9696H5.2705L8.70006 10.043L6.94038 7L4.89082 10.5419Z"
                  fr={undefined}
                  fill="#FF9900"
                />
                <Text fontSize="22px">
                  <strong>Amplify</strong> Dev Center
                </Text>
              </div>
              <Button
                border="none"
                onClick={() => {
                  setIsCollapsed(!isCollapsed);
                }}
              >
                <VisuallyHidden>
                  {isCollapsed ? "Open menu" : "Close menu"}
                </VisuallyHidden>
                {isCollapsed ? (
                  <Icon
                    ariaLabel="Icon"
                    width="20"
                    height="18"
                    viewBox={{ minX: 0, minY: 0, width: 20, height: 18 }}
                    fr={undefined}
                  >
                    <line
                      x1="1"
                      y1="1"
                      x2="19"
                      y2="1"
                      stroke="#545B64"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="1"
                      y1="9"
                      x2="19"
                      y2="9"
                      stroke="#545B64"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="1"
                      y1="17"
                      x2="19"
                      y2="17"
                      stroke="#545B64"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </Icon>
                ) : (
                  <Icon
                    width="20"
                    height="18"
                    viewBox={{ minX: 2, minY: 4, width: 20, height: 18 }}
                    paths={[
                      {
                        d: "M7.05025 5.63603C6.65972 5.24551 6.02656 5.24551 5.63603 5.63603C5.24551 6.02656 5.24551 6.65972 5.63603 7.05025L7.05025 5.63603ZM16.9497 18.364C17.3403 18.7545 17.9734 18.7545 18.364 18.364C18.7545 17.9734 18.7545 17.3403 18.364 16.9497L16.9497 18.364ZM5.63603 7.05025L16.9497 18.364L18.364 16.9497L7.05025 5.63603L5.63603 7.05025Z",
                        fill: "#545B64",
                      },
                      {
                        d: "M18.364 7.05025C18.7545 6.65972 18.7545 6.02656 18.364 5.63603C17.9734 5.24551 17.3403 5.24551 16.9498 5.63603L18.364 7.05025ZM5.63605 16.9497C5.24552 17.3403 5.24552 17.9734 5.63605 18.364C6.02657 18.7545 6.65973 18.7545 7.05026 18.364L5.63605 16.9497ZM16.9498 5.63603L5.63605 16.9497L7.05026 18.364L18.364 7.05025L16.9498 5.63603Z",
                        fill: "#545B64",
                      },
                    ]}
                    ariaLabel="Icon"
                    fr={undefined}
                  />
                )}
              </Button>
            </div>
            {isCollapsed ? (
              <></>
            ) : (
              <>
                {showGlobalNav ? (
                  <View className={styles["mobile-nav-menu-container"]}>
                    {links
                      .filter((link) => link.type !== "ICON")
                      .map((link) => (
                        <View
                          className={styles["mobile-nav-menu-items"]}
                          key={`${link.order}`}
                        >
                          <NavMenuLink
                            navMenuItem={link}
                            currentMenuItem={currentSite}
                            isMobile={true}
                          />
                        </View>
                      ))}
                    <View
                      className={`${styles["mobile-nav-menu-items"]} ${styles["mobile-nav-icons"]}`}
                    >
                      {links
                        .filter((link) => link.type === "ICON")
                        .map((link) => (
                          <View style={{ width: "100%" }} key={`${link.order}`}>
                            <NavMenuLink
                              navMenuItem={link}
                              currentMenuItem={currentSite}
                            />
                          </View>
                        ))}
                    </View>
                  </View>
                ) : (
                  <>
                    <Flex
                      tabIndex={0}
                      onClick={() => setShowGlobalNav(true)}
                      padding="12px"
                      alignItems="center"
                      columnGap="9px"
                      className={styles["back-nav-button"]}
                      ariaLabel={`Back to nav button`}
                    >
                      <VisuallyHidden>Learn</VisuallyHidden>
                      <Icon
                        viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
                        pathData="M13.4102 5.41L8.83016 10L13.4102 14.59L12.0002 16L6.00016 10L12.0002 4L13.4102 5.41Z"
                        ariaLabel="Icon to"
                        fr={undefined}
                      />
                      <Text>{`${currentSite}`}</Text>
                    </Flex>

                    {secondaryNavMobile}
                  </>
                )}
              </>
            )}
          </nav>
        </NavMobileContext.Provider>
      </div>
      <div style={{ display: isMobileState ? "none" : "block" }}>
        <nav
          className={`${styles.navbar}`}
          aria-label="Amplify Dev Center Global"
        >
          <Flex
            id="nav-desktop"
            height="80px"
            alignItems="center"
            justifyContent="space-between"
            padding={{
              base: "0px 18px",
              small: "0px 18px",
              medium: "0px 18px",
              large: "0px 18px",
              xl: "0px 32px",
            }}
          >
            <Flex
              height="100%"
              columnGap="16px"
              alignItems="center"
              id="left-nav"
            >
              {/* Left side of nav bar */}
              <Flex height="100%" columnGap="8px" alignItems="center">
                {/* Dev Center logo */}
                <Icon
                  ariaLabel="Amplify Dev Center logo"
                  width="24"
                  height="22"
                  viewBox={{ width: 24, height: 22 }}
                  pathData="M20.6144 19L10.1205 1H13.5019L24 19H20.6144ZM7.80721 5.3588L15.4882 19H18.7952L9.45719 2.42859L7.80721 5.3588ZM4.89082 10.5419L0 19H13.8795L12.1271 15.9696H5.2705L8.70006 10.043L6.94038 7L4.89082 10.5419Z"
                  fr={undefined}
                  fill="#FF9900"
                />
                <Text fontSize="1.375rem">
                  <strong>Amplify</strong> Docs
                </Text>
              </Flex>
              {leftLinks.map((link) => (
                <NavMenuLink
                  navMenuItem={link}
                  currentMenuItem={currentSite}
                  key={link.order}
                />
              ))}
            </Flex>
            <Flex
              columnGap="16px"
              alignItems="center"
              id="right-nav"
              ref={navDesktopRef}
            >
              {/* Right side of nav bar */}
              {rightLinks.map((link) => (
                <NavMenuLink
                  navMenuItem={link}
                  currentMenuItem={currentSite}
                  key={link.order}
                />
              ))}
            </Flex>
          </Flex>
        </nav>
        {secondaryNavDesktop}
      </div>
    </>
  );
}
