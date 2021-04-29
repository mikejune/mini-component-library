import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import Icon from '../Icon'
import { getDisplayedValue } from './Select.helpers'

/* Josh C. Solution */

// const Select = ({ label, value, onChange, children }) => {
//   const displayedValue = getDisplayedValue(value, children)

//   return (
//     <Wrapper>
//       <NativeSelect value={value} onChange={onChange}>
//         {children}
//       </NativeSelect>
//       <PresentationalBit>
//         {displayedValue}{' '}
//         <IconWrapper style={{ '--size': 24 + 'px' }}>
//           <Icon id='chevron-down' strokeWidth={1} size={24} />
//         </IconWrapper>
//       </PresentationalBit>
//     </Wrapper>
//   )
// }

// const Wrapper = styled.div`
//   position: relative;
//   width: max-content;
// `
// const NativeSelect = styled.select`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   opacity: 0;
// `
// const PresentationalBit = styled.div`
//   border-radius: 8px;
//   color: ${COLORS.gray700};
//   background-color: ${COLORS.transparentGray15};
//   font-size: ${16 / 16}rem;
//   padding: 12px 16px;
//   padding-right: 52px;

//   ${NativeSelect}:focus + & {
//     outline: 1px dotted #212121;
//     outline: 5px auto -webkit-focus-ring-color;
//   }

//   ${NativeSelect}:hover + & {
//     color: ${COLORS.black};
//   }
// `
// const IconWrapper = styled.div`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   right: 10px;
//   margin: auto;
//   width: var(--size);
//   height: var(--size);
//   pointer-events: none; /* Note 1 */
// `

/**
 * My Attempt:
 * 1. Create a Wrapper around the native select
 * 2. Make it invisible
 * 3. Add a presentational layer
 */

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)
  const iconSize = 24

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalLayer>
        {displayedValue}
        <IconWrapper style={{ '--size': iconSize + 'px' }}>
          <Icon id='chevron-down' strokeWidth={1} size={iconSize} />
        </IconWrapper>
      </PresentationalLayer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  isolation: isolate;
  width: max-content;
`
const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  opacity: 0;
`
const PresentationalLayer = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  font-size: ${16 / 16}rem;
  padding: 12px 16px;
  padding-right: 52px;

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`
const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  height: var(--size);
  width: var(--size);
  pointer-events: none;
`

export default Select
