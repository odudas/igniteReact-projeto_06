import { Heading, Text, styled } from '@ignite-ui/react'

export const Container = styled('div', {
  margin: '$20 auto $4',
  maxWidth: 852,
  padding: '0 $4',
})

export const UserHeader = styled('div', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',

  [`> ${Heading}`]: {
    lineHeight: '$base',
    marginTop: '$2',
  },

  [`> ${Text}`]: {
    color: '$gray200',
  },
})
