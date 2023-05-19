import { useState, useRef, useCallback, useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "GlobalStyle";
import themes from "themes";
import useLocalStorage from "hooks/useLocalStorage";
import { ROUTE_TITLE_MAP } from "config";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/Sidebar";
import Content from "components/Content";
import GetStarted from "components/GetStarted";
import About from "components/About/About";
import Download from "components/Download/Download";
import Documentation from "components/Documentation/Documentation";

function App() {
  const [theme, setTheme] = useLocalStorage(
    "theme",
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const menuButtonRef = useRef(null);
  const lastSidebarItemRef = useRef(null);

  const handleSidebarClose = useCallback(() => {
    setIsSidebarOpen(false);

    menuButtonRef.current.focus({
      preventScroll: true,
    });
  }, []);

  useEffect(
    function setDocumentTitle() {
      const route = pathname.split("/")[1];
      document.title = ROUTE_TITLE_MAP[route] + " - General site";
    },
    [pathname]
  );

  function handleKeyDown(e) {
    if (isSidebarOpen) {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === menuButtonRef.current) {
            e.preventDefault();
            lastSidebarItemRef.current.focus();
          }
        } else {
          if (document.activeElement === lastSidebarItemRef.current) {
            e.preventDefault();
            menuButtonRef.current.focus();
          }
        }
      }
    }
  }

  function handleMenuButtonClick() {
    setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen);
  }

  function handleThemeChange(e) {
    setTheme(e.target.value);
  }

  return (
    <div onKeyDown={handleKeyDown}>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />

        <Header
          isSidebarOpen={isSidebarOpen}
          menuButtonRef={menuButtonRef}
          theme={theme}
          onThemeChange={handleThemeChange}
          onMenuButtonClick={handleMenuButtonClick}
        />

        <Container>
          <Sidebar
            open={isSidebarOpen}
            lastSidebarItemRef={lastSidebarItemRef}
            theme={theme}
            onThemeChange={handleThemeChange}
            onClose={handleSidebarClose}
          />

          <Content>
            <Switch>
              <Route path="/getstarted">
                <GetStarted />
              </Route>

              <Route path="/about">
                <About />
              </Route>

              <Route path="/download">
                <Download />
              </Route>

              <Route path="/documentation">
                <Documentation />
              </Route>

              <Route path="/">
                <Redirect to="/getstarted" />
              </Route>
            </Switch>
          </Content>
        </Container>
      </ThemeProvider>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  height: calc(100dvh - var(--header-height));
`;

export default App;
