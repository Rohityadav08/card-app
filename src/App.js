import Home from './Containers/HomeContainer';
import Header from './Containers/HeaderContainer';
import {mobiledata} from "./data/mobileData";
const App = ()=>{
    return (
      <>
        <Header />
       {mobiledata.map((data,index)=><Home brand={data.brand} model={data.model} price={data.price} path={data.image} key={index} />)};
      </>
    )
}
export default App;