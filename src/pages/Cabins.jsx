import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(() => {
    getCabins().then((data) => console.log(data));
  }, []);
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img
        src="https://jnyumtavqjuqlgpqushg.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2024-07-30T08%3A19%3A22.117Z"
        alt=""
      />
    </Row>
  );
}

export default Cabins;
