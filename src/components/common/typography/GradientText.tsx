import tw, { styled } from "twin.macro";

export const GradientText = styled.span`
  ${tw`text-sun`}

  background: -webkit-linear-gradient(#ec4c27, #ec8834);
  background-clip: text;
  -webkit-text-fill-color: transparent;

  ::selection {
    background: highlight;
    -webkit-text-fill-color: #fff;
  }
`;
