import { Link } from 'react-router-dom';
import * as Style from './styled'

function Home() {

  return (
    <Style.Home>
       <h1>SISTEMA DE CONTROLE</h1>
      <Style.Main>
        <Link to="/clients">
          <button >Clientes</button>
        </Link>
        <Link to="/products">
          <button>Produtos</button>
        </Link>
      </Style.Main>
    </Style.Home>
  );
}
  
export default Home;