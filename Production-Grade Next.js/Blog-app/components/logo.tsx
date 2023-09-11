import React from 'react'
import Link from 'next/link'
import { Text } from 'evergreen-ui'

const Logo = ({ ...styles }) => {
  return (
    (<Link href="/">

      <Text fontSize="30px" color="#47B881" {...styles}>
        <strong>Known.</strong>
      </Text>

    </Link>)
  );
}

export default Logo
