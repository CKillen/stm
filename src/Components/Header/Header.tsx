import HeaderButton from "./HeaderButton";
import "../../Styles/Header.css"
import Contact from "../Contact";

function Header(props: any) {
  const { setReactableComponents, id, setId } = props;
  return (
    <div className="header">
      <HeaderButton text="Contacts" click={() => {
        setReactableComponents((old: any) => [...old, <Contact setReactableComponents={setReactableComponents} key={id} id={id} />]) 
        setId();
      }}/>
      <HeaderButton text="WIP" click={() => console.log("test")}/>
      <HeaderButton text="WIP" click={() => console.log("test")}/>
      <HeaderButton text="WIP" click={() => console.log("test")}/>
      <HeaderButton text="WIP" click={() => console.log("test")}/>
      <input type="file" id="sql-upload" hidden/>
      <label className="header-button sql-button" htmlFor="sql-upload">(WIP)SQL Upload</label>
    </div>
  )
}

export default Header;