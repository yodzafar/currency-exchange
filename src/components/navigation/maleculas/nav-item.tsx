import { NavLink } from 'react-router-dom'

type Props = {
  path: string,
  title: string
}

export const NavItem = ({ title, path }: Props) => {
  return (
    <NavLink to={path}>
      {title}
    </NavLink>
  )
}