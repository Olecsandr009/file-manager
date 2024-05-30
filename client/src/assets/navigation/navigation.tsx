import { ReactNode } from "react"
import Home from "../../components/screens/home/Home"
import { IoSpeedometerOutline } from "react-icons/io5"
import { GoClock, GoPeople } from "react-icons/go"
import { FaRegFolderOpen, FaRegStar, FaRegTrashAlt } from "react-icons/fa"
import { MdComputer } from "react-icons/md"

interface INavigation {
    category: string
    items: IItem[]
}

interface IItem {
    name: string
    element: ReactNode
    url: string
    icon?: ReactNode
}

export const navigation: INavigation[] = [
    {
        category: "General",
        items: [
            {
                name: "Home",
                url: "/home",
                element: <Home />,
                icon: <IoSpeedometerOutline />
            },
            {
                name: "Computer",
                url: "/computer",
                element: <Home />,
                icon: <MdComputer />
            },
            {
                name: "Shared",
                url: "/shared",
                element: <Home />,
                icon: <GoPeople />
            }
        ]
    },
    {
        category: "File",
        items: [
            {
                name: "Folder",
                url: "/folder",
                element: <Home />,
                icon: <FaRegFolderOpen />
            },
            {
                name: "Favorites",
                url: "/аavorites",
                element: <Home />,
                icon: <FaRegStar />
            },
            {
                name: "Latest",
                url: "/latest",
                element: <Home />,
                icon: <GoClock />
            },
            {
                name: "Rubbish",
                url: "/rubbish",
                element: <Home />,  
                icon: <FaRegTrashAlt />
            }
        ]
    }
]