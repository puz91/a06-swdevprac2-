import Image from "next/image";
import Banner from "@/components/Banner";
import Card from "@/components/Card"
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Banner/>
      <div style={({margin:"20px", display: "flex",
        flexDirection:"row", alignContent:"space-around",
        justifyContent:"space-around", flexWrap:"wrap"})}>
        <Card venueName='The Bloom Pavilion' imgSrc='/img/bloom.jpg'/>
        <Card venueName='Spark Space' imgSrc='/img/sparkspace.jpg'/>
        <Card venueName='The Grand Table' imgSrc='/img/grandtable.jpg'/>
      </div>
    </main>
  );
}
