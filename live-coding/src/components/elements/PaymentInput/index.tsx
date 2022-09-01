import React, { FC, useState } from "react"

import {
  parseCardType
} from "creditcardutils"

// Styled Elements
import {
  EndEnhancer,
  EndEnhancerIcon,
  EnhancedInput,
  Input,
} from "./index.styled"

// Svg Icons
import { ReactComponent as IconMasterCard } from "@components/svgs/master_card.svg"
import { ReactComponent as IconVisaCard } from "@components/svgs/visa_card.svg"

import { TypeUseModelsInputProps } from "@app/packages/react-use-models"

// export interface PaymentInputProps {
//     register?: TypeUseModelsInputProps<any>
// }

const PaymentInput: FC<React.HTMLProps<HTMLInputElement>> = ({
  onChange,
  ...delegated
}) => {
  const [ cardType, setCardType ] = useState('')
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardType(parseCardType(e.target.value))
    onChange?.(e)
  }
  return (
    <EnhancedInput>
      <Input onChange={handleOnChange} {...delegated} />
      <EndEnhancer>
        <EndEnhancerIcon isValid={cardType === 'mastercard'}>
          <IconMasterCard/>
        </EndEnhancerIcon>
        <EndEnhancerIcon isValid={cardType === 'visa'}>
          <IconVisaCard/>
        </EndEnhancerIcon>
      </EndEnhancer>
    </EnhancedInput>
  )
}

export default PaymentInput
