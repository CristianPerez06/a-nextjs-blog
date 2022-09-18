import React from 'react'
import { DotLoader } from 'react-spinners'

import styles from './Loading.module.scss'

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.puffContainer}>
        <DotLoader color="#fff" size={160} />
      </div>
    </div>
  )
}

export default Loading
