import styled, { css } from "styled-components";

function MemberCard({ avatarUrl, name, role, handle }) {
  return (
    <StyledMemberCard>
      <Avatar
        src={avatarUrl}
        alt={handle + "'s avatar"}
        width="340"
        height="340"
      />

      <TextContainer>
        <Name>{name}</Name>
        <Role>{role}</Role>
        <Handle href="https://twitter.com/" target="_blank" rel="noreferrer">
          @{handle}
        </Handle>
      </TextContainer>
    </StyledMemberCard>
  );
}

const StyledMemberCard = styled.article(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: ${theme.foreground};
    border: var(--divider-width) solid ${theme.divider};
    border-radius: var(--border-radius);
  `
);

const TextContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-lg);
`;

const Name = styled.div`
  font-weight: bold;
`;

const Role = styled.div`
  color: ${({ theme }) => theme.textAlt};
  margin-bottom: var(--spacing-sm);
`;

const Handle = styled.a`
  text-decoration: none;
  margin-top: auto;
`;

const Avatar = styled.img(
  ({ theme }) => css`
    width: 100%;
    background-color: ${theme.background};
    border: var(--divider-width) solid ${theme.divider};
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  `
);

export default MemberCard;
