import React from 'react'

interface DescriptionProps {
  description: string
}

const Description: React.FC<DescriptionProps> = ({ description }) => (
  <p className="[ Description ]">{description}</p>
)

export default Description
