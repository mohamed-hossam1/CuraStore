import Image from "next/image";
import {getProductsFromServer} from "../lib/services/productService"
import Slider from '../_components/Slider';
import CardList from '../_components/CardList';
import SubTitle from '../_components/SubTitle';

export default async function Home() {

  const data = await getProductsFromServer();

  return (
    <div>
      <Slider />
      <SubTitle title1={"Grab the best deal on"} title2={"Smartphones"} link={"Products"} />
      <CardList initialData={data || []} />
    </div>
  );
}
