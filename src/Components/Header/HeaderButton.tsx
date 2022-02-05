interface props {
  text: string,
  click: () => void,
}

function HeaderButton(props: props) {
  const { text, click } = props;
  return (
    <button className="header-button" onClick={() => click()}>
      {text}
    </button>
  )
}

export default HeaderButton;