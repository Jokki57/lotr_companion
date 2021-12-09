import { Button, Paper, Stack, Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import React from "react";
import "./NumberView.css";

interface IPropTypes {
  label: string;
  value: number;
  id?: string;
  textColor?: string;
  textType?: Variant;
  onChange: (v: number, id: string | undefined) => void;
}

const NumberView: React.FC<IPropTypes> = ({
  value,
  label,
  id,
  textColor,
  textType = "h5",
  onChange,
}) => {
  return (
    <div className="NumberView">
      <Paper elevation={3} sx={{ padding: "16px" }}>
        <Typography variant={textType} color={textColor}>
          {label}: {value}
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Button
            variant="outlined"
            size="large"
            onClick={() => onChange(Math.max(0, value - 1), id)}
          >
            -
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => onChange(value + 1, id)}
          >
            +
          </Button>
        </Stack>
      </Paper>
    </div>
  );
};
NumberView.displayName = "NumberView";

export default React.memo(NumberView);
