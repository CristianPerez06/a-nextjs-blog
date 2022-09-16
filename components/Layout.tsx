import styles from './Layout.module.scss'

export interface LayoutProps {
  children: React.ReactNode
}

type Component = (props: LayoutProps) => JSX.Element

export const Layout: Component = (props) => {
  const { children } = props

  return <div className={styles.container}>{children}</div>
}

export default Layout
