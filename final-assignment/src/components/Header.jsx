import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import Switch from "@mui/material/Switch"
import { FormControlLabel } from "@mui/material"
import { NavLink } from "../router-components/NavLink"

import { Route, Routes } from "react-router-dom"
import { About } from "./About"
import { navbarItems } from "../states/navItems"
import { AboutCarrier } from "./AboutCarrier"
import { AboutContact } from "./AboutContact"
import { AboutTeam } from "./AboutTeam"
import { Products } from "./Products"

export function Header(props) {
    const { categories, selectedCategory, setSelectedCategory, setSorting } =
        props
    const categoryChange = (event) => {
        setSelectedCategory(event.target.value)
    }
    const sortChange = (event) => {
        if (event.target.checked) {
            setSorting("desc")
        } else {
            setSorting("asc")
        }
    }
    const theNavItems = navbarItems.map((el) => {
        return (
            <li key={el.key}>
                <NavLink to={el.name}>{el.label}</NavLink>
            </li>
        )
    })

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            Final Assignment
                        </Typography>
                        <nav>
                            <ul>{theNavItems}</ul>
                        </nav>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    position="static"
                    sx={{
                        backgroundColor: "#666",
                    }}
                >
                    <Toolbar>
                        <FormControlLabel
                            control={
                                <Switch onChange={sortChange} color="warning" />
                            }
                            label="Sorting Descending"
                        />
                        <label htmlFor="vategories">
                            {" "}
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1 }}
                            >
                                category:
                            </Typography>
                        </label>
                        <Select
                            name="categories"
                            id="categories"
                            value={selectedCategory}
                            onChange={categoryChange}
                            sx={{ color: "white" }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {categories.map((category) => {
                                return (
                                    <MenuItem key={category} value={category}>
                                        {category}
                                    </MenuItem>
                                )
                            })}
                        </Select>
                    </Toolbar>
                </AppBar>
            </Box>
            <div id="app-body">
                <Routes>
                    <Route path="/" element={<div>Home</div>} />
                    <Route path="products" element={<Products />} />
                    <Route path="/about" element={<About />}>
                        <Route path="carrier" element={<AboutCarrier />} />
                        <Route path="contact" element={<AboutContact />} />
                        <Route path="team" element={<AboutTeam />} />
                    </Route>
                </Routes>
            </div>
        </>
    )
}
