import { Children, Fragment, useState, ReactNode } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import CustomParagraph from '../Paragraph/paragraph.tsx';
import CustomDiv from '../Div/div.tsx';
import { MarkerAnottationIcon } from '../../assets/svgs';
import CustomInput from '../Input/input.tsx';
import { LocationState } from '../../pages/HomePage/types/location.ts';
import { LocationList } from '../../model/enum.ts';
import { useAppSelector } from '../../store/reduxHook.ts';

interface StyledLinkProps {
  selected: boolean;
  to: string;
  onClick: () => void;
}

const StyledLink = styled(Link)<StyledLinkProps>`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  text-decoration: none;
  color: inherit;
  background-color: ${props => (props.selected ? '#1F4782' : 'transparent')};

  &:hover {
    background-color: #1f4782;

    svg {
      fill: white;
    }

    path {
      fill: #ffffff;
    }
  }
`;

interface MyComponentProps {
  children: ReactNode;
}

export const Sidebar: React.FC<MyComponentProps> = ({ children }) => {
  const { pathname } = useLocation();
  const [selected, setSelected] = useState<string>(pathname);
  const { loading, payload }: LocationState = useAppSelector(state => state?.locationData);

  return (
    <Fragment>
      <CustomDiv
        {...{
          display: 'flex',
          flexdirection: ' column',
          zindex: 9999,
          left: '0',
          top: '0',
          width: ' 60px',
          height: '100vh',
          backgroundcolor: '#FFFFFF',
          boxshadow: '0px 3.2px 7.2px 0px #00000021',
        }}
      >
        <CustomDiv
          {...{
            display: 'flex',
            flexdirection: ' column',
            alignitems: 'center',
            height: '100%',
          }}
        >
          <CustomDiv
            {...{
              display: 'flex',
              flexdirection: ' column',
              alignitems: 'center',
              justifycontent: 'center',
              width: '100%',
              padding: '8px 8px',
              gap: '5px',
            }}
          >
            {Children.map(children, (child: any, index) => (
              <StyledLink
                key={index}
                to={(child as React.ReactElement).props.to}
                selected={selected?.trim() === (child as React.ReactElement).props.to?.trim()}
                onClick={() => setSelected((child as React.ReactElement).props.to)}
              >
                {child.props.children}
              </StyledLink>
            ))}
          </CustomDiv>
        </CustomDiv>
      </CustomDiv>
      <CustomDiv
        {...{
          display: 'flex',
          flexdirection: selected === '/' ? 'column' : 'row',
          width: '306px',
          height: '100vh',
          backgroundcolor: '#FBFBFB',
          boxshadow: ' 0px 0.6px 1.8px 0px #0000001A',
        }}
      >
        {selected === '/Measurement' ? (
          <CustomDiv
            {...{
              display: 'flex',
              justifycontent: 'center',
              width: '100%',
              alignitems: 'center',
            }}
          >
            <CustomParagraph
              {...{
                fontFamily: 'Noto Sans, sans-serif',
                fontWeight: '700',
                fontSize: ' 13px',
                lineheight: ' 17.71px',
                textalign: 'center',
              }}
            >
              Measurement
            </CustomParagraph>
          </CustomDiv>
        ) : selected === '/CAD Overlay' ? (
          <CustomDiv
            {...{
              display: 'flex',
              justifycontent: 'center',
              width: '100%',
              alignitems: 'center',
            }}
          >
            <CustomParagraph
              {...{
                fontFamily: 'Noto Sans, sans-serif',
                fontWeight: '700',
                fontSize: ' 13px',
                lineheight: ' 17.71px',
                textalign: 'center',
              }}
            >
              CAD Overlay
            </CustomParagraph>
          </CustomDiv>
        ) : (
          <CustomDiv
            {...{
              display: 'flex',
              width: '100%',
              alignitems: 'center',
              padding: '12px 0 0 24px',
              bordertop: '1px solid #F4F4F4',
              flexwrap: 'wrap',
            }}
          >
            {loading === false &&
              Object.values(LocationList).map((_, locationIndex: number) => (
                <Fragment key={locationIndex}>
                  <CustomDiv
                    {...{
                      display: 'flex',
                      width: '100%',
                      alignitems: 'center',
                      gap: '10px',
                    }}
                  >
                    <MarkerAnottationIcon />

                    <CustomParagraph
                      {...{
                        fontFamily: 'Noto Sans, sans-serif',
                        fontWeight: '400',
                        fontSize: ' 15px',
                        lineheight: ' 20.43px',
                      }}
                    >{`Location ${locationIndex + 1}`}</CustomParagraph>
                  </CustomDiv>

                  <CustomDiv
                    id={'inputLabel'}
                    {...{
                      display: 'flex',
                      width: '100%',
                      alignitems: 'center',
                      gap: '10px',
                      marginbottom: '6px',
                    }}
                  >
                    <CustomParagraph
                      {...{
                        fontFamily: 'Noto Sans, sans-serif',
                        fontWeight: '700',
                        fontSize: ' 13px',
                        lineheight: ' 17.71px',
                      }}
                    >
                      Lat:
                    </CustomParagraph>

                    <CustomInput type="number" locationIndex={locationIndex} value={payload[locationIndex]?.lat} />
                  </CustomDiv>

                  <CustomDiv
                    id={'inputLabel'}
                    {...{
                      display: 'flex',
                      width: '100%',
                      alignitems: 'center',
                      gap: '10px',
                    }}
                  >
                    <CustomParagraph
                      {...{
                        fontFamily: 'Noto Sans, sans-serif',
                        fontWeight: '700',
                        fontSize: ' 13px',
                        lineheight: ' 17.71px',
                      }}
                    >
                      Lat:
                    </CustomParagraph>

                    <CustomInput type="number" locationIndex={locationIndex} value={payload[locationIndex]?.lng} />
                  </CustomDiv>
                </Fragment>
              ))}
          </CustomDiv>
        )}
      </CustomDiv>
    </Fragment>
  );
};
