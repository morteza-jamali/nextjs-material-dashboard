import React from 'react';
import clsx from 'clsx';
import styles from './ToolBar.style';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

declare interface IToolBarProps {
  page: 'PRODUCT' | 'CUSTOMER';
  className?: any;
}

const ToolBarPropsDefaultValue: IToolBarProps = {
  page: 'PRODUCT',
  className: ''
};

let _styles: any;

export default function Toolbar(
  props: IToolBarProps = ToolBarPropsDefaultValue,
  ...rest: any
) {
  _styles = makeStyles(styles(props.page))();

  switch (props.page) {
    case 'PRODUCT':
      return ProductToolBar(props.className, rest);
    case 'CUSTOMER':
      return CustomerToolBar(props.className, rest);
  }
}

const CustomerToolBar = (className: any, ...rest: any) => (
  <div className={clsx(_styles.root, className)} {...rest}>
    <Box display="flex" justifyContent="flex-end">
      <Button className={_styles.importButton}>Import</Button>
      <Button className={_styles.exportButton}>Export</Button>
      <Button color="primary" variant="contained">
        Add customer
      </Button>
    </Box>
    <Box mt={3}>
      <Card>
        <CardContent>
          <Box maxWidth={500}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon fontSize="small" color="action">
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search customer"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  </div>
);

const ProductToolBar = (className: any, ...rest: any) => (
  <div className={clsx(_styles.root, className)} {...rest}>
    <Box display="flex" justifyContent="flex-end">
      <Button className={_styles.importButton}>Import</Button>
      <Button className={_styles.exportButton}>Export</Button>
      <Button color="primary" variant="contained">
        Add product
      </Button>
    </Box>
    <Box mt={3}>
      <Card>
        <CardContent>
          <Box maxWidth={500}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon fontSize="small" color="action">
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search product"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  </div>
);
