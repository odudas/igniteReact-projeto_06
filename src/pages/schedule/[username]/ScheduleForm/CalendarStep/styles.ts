import { Box, styled, Text } from '@ignite-ui/react'

export const Container = styled(Box, {
  display: 'grid',
  margin: '$6 auto 0',
  padding: 0,
  position: 'relative',

  variants: {
    isTimePickerOpen: {
      true: {
        gridTemplateColumns: '1fr 280px',

        '@media(max-width: 900px)': {
          gridTemplateColumns: '1fr',
        },
      },
      false: {
        gridTemplateColumns: '1fr',
        width: 540,
      },
    },
  },
})

export const TimePicker = styled('div', {
  borderLeft: '1px solid $gray600',
  bottom: 0,
  overflowY: 'scroll',
  padding: '$6 $6 0',
  position: 'absolute',
  right: 0,
  top: 0,
  width: 280,
})

export const TimePickerHeader = styled(Text, {
  fontWeight: '$medium',

  span: {
    color: '$gray200',
  },
})

export const TimePickerList = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$2',
  marginTop: '$3',

  '@media (max-width: 900px)': {
    gridTemplateColumns: '2fr',
  },
})

export const TimePickerItem = styled('button', {
  backgroundColor: '$gray600',
  borderRadius: '$sm',
  border: 0,
  color: '$gray100',
  cursor: 'pointer',
  fontSize: '$sm',
  lineHeight: '$base',
  padding: '$2 0',

  '&:last-child': {
    marginBottom: '$6',
  },

  '&:disabled': {
    background: 'none',
    cursor: 'default',
    opacity: 0.4,
  },

  '&:not(:disabled):hover': {
    background: '$gray500',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },
})
