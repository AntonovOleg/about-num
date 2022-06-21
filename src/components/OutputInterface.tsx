import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { FC } from "react";
import { useSelector } from "react-redux";

interface IData {
  text: string;
}
interface ISelector {
  data: IData;
}

const OutputInterface: FC = () => {
  const info: any = useSelector<ISelector>((state): string => {
    return state.data.text;
  });



  return (
    <Box
      sx={{
        mt: "20px",
      }}
    >
      <Container>
        <Typography variant="h6">{info}</Typography>
      </Container>
    </Box>
  );
};

export default OutputInterface;
