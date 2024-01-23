import colors from "../services/colors";

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Dashboard from "./Dashboard/Index";
import Catalog from "./Catalog/Index";
import Cart from "./Cart/Index";
import Profile from "./Profile/Index";
import Details from "./Catalog/Details";


//STACKS
const DashboardStackNative = createNativeStackNavigator();
export const DashboardStack = () => {
    return(
        <DashboardStackNative.Navigator>
            <DashboardStackNative.Screen name="dashboard" component={Dashboard} />
        </DashboardStackNative.Navigator>
    )
}

const CatalogStackNative = createNativeStackNavigator();
export const CatalogStack = () => {
    return(
        <CatalogStackNative.Navigator>
            <CatalogStackNative.Screen name="catalog" component={Catalog} />
            <CatalogStackNative.Screen name="details" component={Details} />
        </CatalogStackNative.Navigator>
    )
}


//TABS NAVIGATOR
const AppTabs = createMaterialBottomTabNavigator();
export const Tabs = () => {
    return(
        <AppTabs.Navigator barStyle={{backgroundColor:colors.onyx}} activeColor={colors.white} inactiveColor={colors.raisin_black}>
            

            <AppTabs.Screen 
                name="dashboardTab" 
                component={DashboardStack}
                options={{ 
                    tabBarLabel: "Dashboard",
                    tabBarIcon: ({focused, color}) => {
                        return (<MaterialCommunityIcons 
                            size={30} 
                            color={color} 
                            name={focused ? "view-dashboard" : "view-dashboard-outline"} />)}
                }}
             />

            <AppTabs.Screen 
                name="catalogTab" 
                component={CatalogStack}
                options={{ 
                    tabBarLabel: "Catalog",
                    tabBarIcon: ({focused, color}) => {
                        return (<MaterialCommunityIcons 
                            size={30} 
                            color={color} 
                            name={focused ? "monitor-cellphone-star" : "monitor-cellphone"} />)}
                }}
            />

            <AppTabs.Screen 
                name="cartTab" 
                component={Cart} 
                options={{ 
                    tabBarLabel: "Cart",
                    tabBarIcon: ({size, focused, color}) => {
                        return (<MaterialCommunityIcons 
                            size={30} 
                            color={color} 
                            name={focused ? "cart" : "cart-outline"} />)}
                }}
            />

            <AppTabs.Screen 
                name="profileTab" 
                component={Profile} 
                options={{ 
                    tabBarLabel: "Profile",
                    tabBarIcon: ({size, focused, color}) => {
                        return (<MaterialCommunityIcons 
                            size={30} 
                            color={color} 
                            name={focused ? "account" : "account-outline"} />)}
                }}
            />

        </AppTabs.Navigator>
    )
}