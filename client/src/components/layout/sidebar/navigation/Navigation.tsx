import { FC } from "react";
import { navigation } from "../../../../assets/navigation/navigation";
import { Button, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import './Navigation.scss'

const Navigation:FC<{}> = ({}) => {
    return (
        <nav className='nav'>
            {
                navigation.map((category, index) => {
                    return (
                        <div key={index} className='nav__category'>
                            <h3 className='nav__title'>{category.category}</h3>

                            <List className="nav__list">
                                {
                                    category.items.map((item, index) => {
                                        return (
                                            <ListItemButton key={index} className="nav__item" component={Link} to={item.url}>
                                                <ListItemIcon>
                                                    {item.icon}
                                                </ListItemIcon>
                                                <ListItemText className="nav__text" primary={item.name} />
                                            </ListItemButton>
                                          
                                        )
                                    })
                                }
                            </List>
                        </div>
                    )
                })
            }
        </nav>
    )
}

export default Navigation