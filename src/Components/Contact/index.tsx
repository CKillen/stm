import ContactSection from "./ContactSection";
import Reactable from "../../Reactable";

function Contact(props: any) {
  const { id, setReactableComponents } = props;
  return (
    <Reactable
      color={"#c4c4c4"} 
      header="Contact"
      height={600}
      width={400}
      left={Math.random() * (window.innerWidth - 900) + 400}
      top={Math.random() * (window.innerHeight - 800) + 100}
      onClose={() => {
        setReactableComponents((old: any) => old.filter((component: any) => component.props.id !== id));
      }}
    >
      <ContactSection/>
    </Reactable>
  )
}

export default Contact;