import { styled, Heading, Text } from '@ignite-ui/react'

export const Container = styled('div', {
  alignItems: 'center',
  display: 'flex',
  gap: '$20',
  height: '100vh',
  marginLeft: 'auto',
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
})

export const Hero = styled('div', {
  maxWidth: 480,
  padding: '$10',

  [`> ${Heading}`]: {
    '@media(max-width: 600px)': {
      fontSize: '$6xl',
    },
  },

  [`> ${Text}`]: {
    color: '$gray200',
    marginTop: '$2',
  },
})

export const Preview = styled('div', {
  paddingRight: '$8',
  overflow: 'hidden',

  '@media(max-width: 600px)': {
    display: 'none',
  },
})
