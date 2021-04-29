import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'

import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

// My solution

const SIZES = {
  small: {
    borderBottom: `1px solid ${COLORS.black}`,
    fontSize: 14 / 16,
    paddingLeft: 24,
  },
  large: {
    borderBottom: `2px solid ${COLORS.black}`,
    fontSize: 18 / 16,
    paddingLeft: 36,
  },
}

const MJIconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size]
  const iconSize = size === 'small' ? 16 : 24
  const iconStrokeWidth = size === 'small' ? 1 : 2

  if (!styles) throw new Error(`Unknown size passed to IconInput: ${size}`)

  return (
    <WrapperA style={{ '--borderBottom': styles.borderBottom }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapperA style={{ '--size': iconSize + 'px' }}>
        <Icon id={icon} size={iconSize} strokeWidth={iconStrokeWidth} />
      </IconWrapperA>
      <NativeInput
        style={{
          '--fontSize': styles.fontSize + 'rem',
          '--paddingLeft': styles.paddingLeft + 'px',
          '--width': width + 'px',
        }}
        type='text'
        placeholder={placeholder}
      />
    </WrapperA>
  )
}

const WrapperA = styled.div`
  position: relative;

  &:hover > * {
    color: ${COLORS.black};
  }
`
const NativeInput = styled.input`
  border: none;
  border-bottom: var(--borderBottom);
  color: ${COLORS.gray700};
  padding-left: var(--paddingLeft);
  font-size: var(--fontSize);
  font-weight: 700;
  width: var(--width);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 2px;
  }
`
const IconWrapperA = styled.div`
  color: ${COLORS.gray700};
  position: absolute;
  width: var(--size);
  height: var(--size);
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  pointer-events: none;
`

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
}

const JCIconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = STYLES[size]

  // TODO: validate size

  return (
    <WrapperB>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapperB style={{ '--size': styles.iconSize + 'px' }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapperB>
      <TextInput
        {...delegated}
        style={{
          '--width': width + 'px',
          '--height': styles.height / 16 + 'rem',
          '--border-thickness': styles.borderThickness + 'px',
          '--font-size': styles.fontSize / 16 + 'rem',
        }}
      />
    </WrapperB>
  )
}

const WrapperB = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`

const IconWrapperB = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`

const IconInput = (props) => {
  return (
    <>
      <MJIconInput {...props} />
      <br />
      <JCIconInput {...props} />
    </>
  )
}

export default IconInput
