import { useEffect, useReducer } from "react";
import styled, { useTheme } from "styled-components";
import { FETCH_DELAY } from "config";
import Grid from "components/styled/Grid";
import MemberCard from "components/About/MemberCard";
import MemberCardPlaceholder from "components/About/MemberCardPlaceholder";

function MemberCards() {
  const theme = useTheme();
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    isError: false,
    data: [],
  });

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      dispatch({ type: "init" });

      try {
        const response = await fetch("./data.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          signal: abortController.signal,
        });

        if (!abortController.signal.aborted) {
          const data = await response.json();

          dispatch({
            type: "success",
            payload: data,
          });
        }
      } catch (error) {
        console.error(error);
        dispatch({ type: "failure" });
      }
    }

    // delay to demonstrate loader (will cause "state update on an unmounted component" warning)
    setTimeout(fetchData, FETCH_DELAY);

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      {state.isError && <p>Unable to fetch data</p>}

      {state.isLoading ? (
        <Grid $columns={3}>
          <VisuallyHidden>Loading...</VisuallyHidden>
          <MemberCardPlaceholder />
          <MemberCardPlaceholder />
          <MemberCardPlaceholder />
        </Grid>
      ) : (
        <Grid as="ul" $columns={3}>
          {state.data.map((member) => (
            <li key={member.handle}>
              <MemberCard
                {...member}
                avatarUrl={
                  theme.name === "dark" ? member.avatarDark : member.avatar
                }
              />
            </li>
          ))}
        </Grid>
      )}
    </>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "init":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "success":
      return {
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "failure":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: none;
`;

export default MemberCards;
