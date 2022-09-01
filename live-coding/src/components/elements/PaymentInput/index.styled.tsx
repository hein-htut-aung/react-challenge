import styled, {css} from "styled-components"

import {
  resetInput,
  normalTransitions,
} from "@styles/presets.styled"

export const EnhancedInput = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`

export const Input = styled.input`
    ${normalTransitions()}
    ${resetInput()}

    color: var(--input_value);
    font-size: 0.875em;
    padding: 9px 12px;
    z-index: 1;

    width: 100%;

    background-color: #fff;

    border: 1px solid var(--input_border);
    border-radius: 8px;

    &::placeholder {
        opacity: 0.5;
    }
`

export const EndEnhancer = styled.div`
  position: absolute;
  right: 0;
  margin: 12px 14px 12px 0;
  z-index: 2;
  display: flex;
  gap: 8px;
`

export const EndEnhancerIcon = styled.div`
    width: 24px;
    height: 16px;
    opacity: ${({ isValid }) => isValid ? 1: 0.5}
`
