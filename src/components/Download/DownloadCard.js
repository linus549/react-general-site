import styled, { css } from "styled-components";
import ButtonLink from "components/styled/ButtonLink";
import { ReactComponent as Icon } from "assets/icons/download.svg";

function DownloadCard({ icon, title, description, features, url }) {
  return (
    <StyledDownloadCard>
      <Title>
        <IconWrapper>{icon}</IconWrapper>
        {title}
      </Title>
      <Description>{description}</Description>
      <FeaturesTitle>Key Features</FeaturesTitle>

      <Features>
        {features.map((feature) => (
          <Feature key={feature}>{feature}</Feature>
        ))}
      </Features>

      <DownloadLink to={url}>
        <DownloadIcon />

        <DownloadLinkText>
          <div>Download</div>
          <div>{title}</div>
        </DownloadLinkText>
      </DownloadLink>
    </StyledDownloadCard>
  );
}

const StyledDownloadCard = styled.article(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    color: ${theme.textAlt};
    background-color: ${theme.foreground};
    border: var(--divider-width) solid ${theme.divider};
    border-radius: var(--border-radius);
    padding: var(--spacing-lg);
  `
);

const IconWrapper = styled.div`
  flex-shrink: 0;
  color: ${({ theme }) => theme.primary};
  width: 2.25rem;
  margin-right: var(--spacing-md);
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text};
`;

const Description = styled.p`
  margin-bottom: var(--spacing-xl);
`;

const FeaturesTitle = styled.h3`
  font-size: var(--font-size-md);
  margin-bottom: var(--spacing-sm);
`;

const Features = styled.ul`
  list-style-position: inside;
  margin-bottom: var(--spacing-lg);
`;

const Feature = styled.li`
  margin-bottom: var(--spacing-xs);

  ::marker {
    content: "✔ ";
    font-size: var(--font-size-lg);
    color: ${({ theme }) => theme.primary};
    margin-right: 1rem;
  }
`;

const DownloadLink = styled(ButtonLink)`
  margin-top: auto;
`;

const DownloadIcon = styled(Icon)`
  flex-shrink: 0;
  width: 2rem;
  margin-right: var(--spacing-md);
`;

const DownloadLinkText = styled.div`
  line-height: normal;
`;

export default DownloadCard;
