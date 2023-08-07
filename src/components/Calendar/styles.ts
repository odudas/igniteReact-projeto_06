import { Text, styled } from '@ignite-ui/react'

export const CalendarContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  padding: '$6',
})

export const CalendarHeader = styled('div', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
})

export const CalendarTitle = styled(Text, {
  fontWeight: '$medium',

  span: {
    color: '$gray200',
  },
})

export const CalendarActions = styled('div', {
  color: '$gray200',
  display: 'flex',
  gap: '$2',

  button: {
    all: 'unset',
    borderRadius: '$sm',
    cursor: 'pointer',
    lineHeight: 0,

    svg: {
      height: '$5',
      width: '$5',
    },

    '&:hover': {
      color: '$gray100',
    },

    '&:focus': {
      boxShadow: '0 0 0 2px $colors$gray100',
    },
  },
})

export const CalendarBody = styled('table', {
  fontFamily: '$default',
  borderSpacing: '0.25rem',
  tableLayout: 'fixed',
  width: '100%',

  'thead th': {
    color: '$gray200',
    fontSize: '$sm',
    fontWeight: '$medium',
  },

  'tbody:before': {
    content: '.',
    color: '$gray800',
    display: 'block',
    lineHeight: '0.75rem',
  },

  tbody: {
    boxSizing: 'border-box',
  },
})

export const CalendarDay = styled('button', {
  all: 'unset',
  aspectRatio: '1 / 1',
  backgroundColor: '$gray600',
  borderRadius: '$sm',
  cursor: 'pointer',
  textAlign: 'center',
  width: '100%',

  '&:disabled': {
    background: 'none',
    cursor: 'default',
    opacity: 0.4,
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$gray600',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },
})
