import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes, Dispatch, SetStateAction } from 'react';

interface IProps extends React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  mode: 'prev' | 'next';
  color?: string;
  size: number;
  isDisable?: boolean;
  setEl: Dispatch<SetStateAction<HTMLElement | null>>;
}

const SliderBtn = ({ mode, color = '#fff', size, isDisable = false, setEl, ...props }: IProps) => {
  const properties = {
    ...props,
    disabled: isDisable,
  };

  return (
    <Button ref={setEl} {...properties} type="button" mode={mode}>
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_706_5003)">
          <path d="M10.8431 8.34314L16.5 14L10.8431 19.6568" stroke={color} />
        </g>
        <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" stroke={color} />
        <defs>
          <clipPath id="clip0_706_5003">
            <rect width="16" height="16" fill={color} transform="translate(6 6)" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  );
};

export default SliderBtn;

const Button = styled.button<Pick<IProps, 'mode'>>`
  display: flex;
  transform: ${({ mode }) => mode === 'prev' && css`rotate(180deg)`};
  border-radius: 50%;

  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
