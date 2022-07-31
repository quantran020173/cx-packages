import React from 'react'
import { get, useFormContext } from 'react-hook-form'

interface Props {
  className?: string
  name: string
}

const InlineError: React.FC<Props> = ({ name }) => {
  const { formState } = useFormContext<any>()

  if (!get(formState.errors, name)) return null

  return <p className="text-red-600 text-sm">{get(formState.errors, `${name}.message`)}</p>
}

export default InlineError
