import React from 'react'

type TitleProps = {
  title: string
}

const Title: React.FC<TitleProps> = ({ title }) => <h1 className="[ Title ]">{title}</h1>

export default Title
