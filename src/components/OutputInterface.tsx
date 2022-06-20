import { FC } from "react";
import { useSelector } from "react-redux";

interface selector {
  state: any,
  infoSlice: any,
  info: any
}

const OutputInterface: FC = () => {
  const info: any = useSelector<selector>(state => state.info.info)
  
  return (
    <>
      <h5>
        {info}
      </h5>
    </>
  )
}

export default OutputInterface;