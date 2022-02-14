import { NavList } from '../atoms';
import { NavItem } from '../maleculas';

const data = [{ title: 'Converter', path: '/' }, { title: 'Currencies', path: '/currencies' }]

export const Navigation = () => {
  return (
    <NavList>
      {
        data.map((item, idx) => (<NavItem key={idx + 1} {...item} />))
      }
    </NavList>
  );
}