import styled from "styled-components";
import TextSection from "components/styled/TextSection";
import MemberCards from "components/About/MemberCards";
import { ReactComponent as GithubIcon } from "assets/icons/github.svg";
import { ReactComponent as FacebookIcon } from "assets/icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "assets/icons/twitter.svg";
import { ReactComponent as InstagramIcon } from "assets/icons/instagram.svg";

function About() {
  return (
    <>
      <h1>About</h1>

      <CommunitySection>
        <TextSection>
          <h2>Community</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl vel
            pretium lectus quam.
          </p>
          <p>
            Tempor orci dapibus ultrices in iaculis nunc. Molestie a iaculis at
            erat pellentesque adipiscing commodo elit. Odio ut sem nulla
            pharetra diam.
          </p>
        </TextSection>

        <CommunityLinkList>
          {communityItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.url}
                title={item.name}
                target="_blank"
                rel="noreferrer"
              >
                <IconWrapper>{item.icon}</IconWrapper>
              </a>
            </li>
          ))}
        </CommunityLinkList>
      </CommunitySection>

      <h2>Development Team</h2>
      <MemberCards />
    </>
  );
}

const CommunitySection = styled.div`
  margin-bottom: var(--spacing-xxl);
`;

const CommunityLinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  & > li:not(:last-of-type) {
    margin-right: var(--spacing-lg);
  }
`;

const IconWrapper = styled.div`
  width: 2.5rem;
`;

const communityItems = [
  {
    name: "Github",
    url: "https://github.com/",
    icon: <GithubIcon />,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: <FacebookIcon />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/",
    icon: <TwitterIcon />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: <InstagramIcon />,
  },
];

export default About;
