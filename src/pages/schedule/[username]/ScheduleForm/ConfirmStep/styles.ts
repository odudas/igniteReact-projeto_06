import { Box, Text, styled } from '@ignite-ui/react'

export const ConfirmForm = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  margin: '$6 auto 0',
  maxWidth: 540,

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },
})

export const FormHeader = styled('div', {
  alignItems: 'center',
  borderBottom: '1px solid $gray600',
  display: 'flex',
  gap: '$4',
  marginBottom: '$2',
  paddingBottom: '$6',

  [`> ${Text}`]: {
    alignItems: 'center',
    display: 'flex',
    gap: '$2',

    svg: {
      color: '$gray200',
      height: '$5',
      width: '$5',
    },
  },
})

export const FormError = styled(Text, {
  color: '#f75a68',
})

export const FormActions = styled('div', {
  display: 'flex',
  gap: '$2',
  justifyContent: 'flex-end',
  marginTop: '$2',
})
