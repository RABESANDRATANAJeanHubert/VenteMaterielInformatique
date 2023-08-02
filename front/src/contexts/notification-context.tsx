/* eslint-disable @typescript-eslint/no-empty-function */
import { useReducer, createContext } from 'react'
import PropTypes from 'prop-types'

export type MessageType = 'error' | 'warning' | 'success' | 'info'
export interface State {
  message: string
  severity: MessageType
  open: boolean
}

type NotificationShow = { message: string; severity: MessageType }

export const initialState: State = {
  message: '',
  severity: 'info',
  open: true
}

export const NotificationContext = createContext({
  ...initialState,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  show: (data: NotificationShow) => {},
  close: () => {}
})

type Action = {
  type: string
  payload: any
}

const contactReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'show':
      return {
        ...state,
        ...action.payload
      }
    case 'close':
      return {
        ...state,
        open: false
      }
    default:
      return state
  }
}
export const NoticficationProvider = (props: any) => {
  const [notify, dispatch] = useReducer(contactReducer, initialState)

  const show = (data: NotificationShow) => {
    dispatch({ type: 'show', payload: { ...data, open: true } })
  }

  const close = () => {
    dispatch({ type: 'close', payload: {} })
  }

  return (
    <NotificationContext.Provider value={{ ...notify, show, close }}>{props.children}</NotificationContext.Provider>
  )
}

NoticficationProvider.propTypes = {
  children: PropTypes.node
}

export const NotificationConsumer = NotificationContext.Consumer
