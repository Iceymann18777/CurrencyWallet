import React, { Component } from 'react'

import { FormattedMessage } from 'react-intl'

export default class TakerUtxoToAbTexts extends Component<any, any> {
  getTakerUtxoToAbTextText = (stepName) => {
    switch (stepName) {
      case 'sign':
        return <FormattedMessage id="SwapProgressText_FirstStep" defaultMessage="Please wait" />
      case 'submit-secret':
        return (
          <FormattedMessage
            id="SwapProgressText_CreateSecret"
            defaultMessage="Create a secret key"
          />
        )
      case 'sync-balance':
        return (
          <FormattedMessage
            id="SwapProgressText_CheckingBalance"
            defaultMessage="Checking balance.."
          />
        )
      case 'lock-utxo':
        return (
          <FormattedMessage
            id="SwapProgressText_DepositingYourSide"
            defaultMessage="Depositing {sellCurrency}.{br}It can take a few minutes"
            values={{
              br: <br />,
              sellCurrency: `${this.props.swap.sellCurrency}`,
            }}
          />
        )
      case 'wait-lock-eth':
        return (
          <FormattedMessage
            id="SwapProgressText_WaitPatricipantDeposit"
            defaultMessage="Waiting for other participant to deposit {buyCurrency}"
            values={{
              buyCurrency: `${this.props.swap.buyCurrency}`,
            }}
          />
        )
      case 'withdraw-eth':
        return (
          <FormattedMessage
            id="SwapProgressText_WithdrawRequest"
            defaultMessage="Requesting withdrawal from {buyCurrency} Contract"
            values={{
              buyCurrency: `${this.props.swap.buyCurrency}`,
            }}
          />
        )
      case 'finish':
        return (
          <FormattedMessage
            id="SwapProgressText_Finish"
            defaultMessage="{buyCurrency} tokens was transferred to your wallet. Check the balance"
            values={{
              buyCurrency: `${this.props.swap.buyCurrency}`,
            }}
          />
        )
      case 'end':
        return (
          <FormattedMessage
            id="SwapProgressText_End"
            defaultMessage="Thank you for using Swap.Online!"
          />
        )
      default:
        return null
    }
  }

  render() {
    return this.getTakerUtxoToAbTextText(this.props.stepName)
  }
}
