import FilterableMenuContainer from './components/FilterableMenuConainer';

import useInit from './hooks/useInit';
import './styles/reset.css';
import './styles/style.css';

export default function App() {
  const { restaurntsData } = useInit();

  return <FilterableMenuContainer restaurants={restaurntsData} />;
}
