import styled, { keyframes, css, useTheme } from "styled-components";
import placeholderImage from "assets/images/placeholder.png";

function MemberCardPlaceholder() {
  const theme = useTheme();

  return (
    <StyledMemberCardPlaceholder>
      <Avatar
        src={placeholderImage}
        alt="Placeholder"
        width="340"
        height="240"
      />

      <TextContainer>
        <Placeholder $width="70%" />
        <Placeholder $color={theme.textAlt} $width="90%" $marginBottom="1rem" />
        <Placeholder $color={theme.primary} $width="50%" />
      </TextContainer>
    </StyledMemberCardPlaceholder>
  );
}

const wave = keyframes`
  100% {
    mask-position: -200% 0%;
  }
`;

const StyledMemberCardPlaceholder = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.foreground};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: var(--spacing-lg);
`;

const Placeholder = styled.div.attrs((props) => ({
  $color: props.$color || "currentColor",
  $width: props.$width || "100%",
  $height: props.$height || "1rem",
  $marginTop: props.$marginTop || "0",
  $marginBottom: props.$marginBottom || "0.5rem",
}))(
  (props) => css`
    display: inline-block;
    width: ${props.$width};
    height: ${props.$height};
    background-color: ${props.$color};
    margin-top: ${props.$marginTop};
    margin-bottom: ${props.$marginBottom};
    opacity: 0.5;
    cursor: wait;
    mask-image: linear-gradient(
      130deg,
      #000 55%,
      rgba(0, 0, 0, 0.8) 75%,
      #000 95%
    );
    mask-size: 200% 100%;
    animation: ${wave} 2s linear infinite;
  `
);

const Avatar = styled.img`
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  opacity: 0.5;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
`;

export default MemberCardPlaceholder;
