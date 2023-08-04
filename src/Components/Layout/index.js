import Header from "./Header";

const Layout = ({children}) => {
   return (
    <>
        <Header/>
        <div className="Layout">
            {children}
        </div>
    
    </>)
}

export default Layout;