import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import { breakpoints } from "config";
import ButtonLink from "components/styled/ButtonLink";
import { ReactComponent as ChevronIcon } from "assets/icons/chevron-right.svg";
import { ReactComponent as BoxIcon } from "assets/icons/box.svg";

function GetStarted() {
  return (
    <>
      <Content>
        <TextContainer>
          <Heading>Brand Name</Heading>
          <Text>
            We are a group of passionate developers working on homebrews,
            emulators and documentation for the Nintendo Game Boy handheld
            console, the original gray brick from 1989!
          </Text>
        </TextContainer>

        <Image />
      </Content>

      <LinkContainer>
        <ButtonLink to="/download">Get Name 8.4.2</ButtonLink>

        <TextLink to="/documentation#introduction">
          Read the Introduction
          <LinkIcon />
        </TextLink>
      </LinkContainer>
    </>
  );
}

const Content = styled.div`
  display: flex;
  margin-bottom: var(--spacing-xl);

  @media (max-width: ${breakpoints.MEDIUM_SUB}) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextContainer = styled.div`
  margin-bottom: var(--spacing-xl);

  @media (min-width: ${breakpoints.MEDIUM}) {
    margin-right: var(--spacing-md);
    margin-bottom: 0;
  }
`;

const Heading = styled.h1`
  margin-bottom: var(--spacing-md);
`;

const Text = styled.p`
  font-size: var(--font-size-lg);

  @media (max-width: ${breakpoints.MEDIUM_SUB}) {
    margin-bottom: 0;
  }
`;

const Image = styled(BoxIcon)`
  flex-shrink: 0;
  width: 12rem;
`;

const LinkContainer = styled.div`
  font-size: var(--font-size-md);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const TextLink = styled(HashLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: var(--spacing-md) var(--spacing-xl);
`;

const LinkIcon = styled(ChevronIcon)`
  width: 1rem;
  margin-left: var(--spacing-xs);
`;

export default GetStarted;
