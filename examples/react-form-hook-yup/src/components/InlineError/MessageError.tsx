import React from 'react'

interface Props {
  className?: string
  message: string

}

const MessageError: React.FC<Props> = ({ message }) => {
  return <p className="text-red-600 text-sm">{message}</p>
}

export default MessageError
