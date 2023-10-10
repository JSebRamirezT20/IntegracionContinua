import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function ProductsMenu({ tabName,route }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = React.useState(null);
const navigate=useNavigate()
  const open = Boolean(anchorEl);
  const subMenuOpen = Boolean(subMenuAnchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSubMenuClick = (event) => {
    setSubMenuAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSubMenuAnchorEl(null);
    navigate (`/${route}`)
  };

  return (
    <div>
      <Button
        sx={{
          color: "white",
          margin: "auto 0",
          padding: "0",
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {tabName}
      </Button>
      <Menu
        id="basic-menu"
        PaperProps={{
          style: {
            boxShadow: "none", // Eliminar la sombra del submenú
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleSubMenuClick}>Perro</MenuItem>
        {/* Submenú para "Perro" */}
        <Menu
          anchorEl={subMenuAnchorEl}
          open={subMenuOpen}
          onClose={handleClose}
          PaperProps={{
            style: {
              boxShadow: "none",
            },
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleClose}>Comida</MenuItem>
          <MenuItem onClick={handleClose}>Snack</MenuItem>
          <MenuItem onClick={handleClose}>Accesorios</MenuItem>
        </Menu>
        {/* Otras opciones del menú principal */}
        <MenuItem onClick={handleSubMenuClick}>Gato</MenuItem>
        {/* Submenú para "Gato" */}
        <Menu
          anchorEl={subMenuAnchorEl}
          open={subMenuOpen}
          onClose={handleClose}
          PaperProps={{
            style: {
              boxShadow: "none",
            },
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right", // Muestra el submenú a la derecha
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left", // La esquina superior izquierda del botón principal
          }}
        >
          <MenuItem onClick={handleClose}>Comida</MenuItem>
          <MenuItem onClick={handleClose}>Snack</MenuItem>
          <MenuItem onClick={handleClose}>Accesorios</MenuItem>
        </Menu>
      </Menu>
    </div>
  );
}

ProductsMenu.propTypes = {
  tabName: PropTypes.node,
  route:PropTypes.string};
