import React from "react";
import { styled } from "twin.macro";

interface Props {
  className?: string;
}

export const RotatingNASASun: React.FC<Props> = ({ className }: Props) => {
  return (
    <RotatingNASASunElement className={className}>
      <TheActualSun />
      <FadeGradientOverlay />
    </RotatingNASASunElement>
  );
};

const RotatingNASASunElement = styled.div`
  position: absolute;
  margin: 0 auto;
  top: 134px;
  left: 50%;
  height: 1400px;
  width: 1400px;
  overflow: hidden;
  transform: translateX(-50%);
  z-index: 0;
`;

export const FadeGradientOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 500px,
    rgba(0, 0, 0, 0.7) 1300px
  );
`;

export const TheActualSun = styled.div`
  animation-name: spin;
  animation-duration: 800000ms;
  /* animation-duration: 8.4ms; */
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  height: 1400px;
  width: 1400px;
  background: #000 url(/images/sunbg.webp);
  background-size: 1400px 1400px;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
`;
