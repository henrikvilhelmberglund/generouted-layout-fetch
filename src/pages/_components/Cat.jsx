import { useOutletContext } from "react-router-dom";

export default function Cat() {
  const { url } = useOutletContext();

  return <img src={`${url}`} />;
}
