import { createBrowserRouter, createRoutesFromElements, Route  } from "react-router-dom";
import Auth from "./components/screens/auth/Auth";
import Layout from "./components/screens/layout/Layout";
import { navigation } from "./assets/navigation/navigation";

export const router = createBrowserRouter(createRoutesFromElements(
        <Route>
            <Route path="/" element={<Layout /> }>
                {
                    navigation.map(element => {
                        return element.items.map((item, index) => {
                            return (
                                <Route key={index} path={item.url} element={item.element}/>
                            )
                        })
                    })
            }
        </Route>
        <Route path="/auth" element={<Auth />} />
    </Route>
))