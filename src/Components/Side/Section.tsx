interface props {
  level: number,
  title: string,
}

function Section(props: props) {
  const { level, title } = props;
  const textIndent = 30 * (level - 1);
  return (
    <li className="section-list" onClick={() => console.log("clicked this ", level, title)}>
      <span  style={{ paddingLeft: textIndent + 'px' }}>
        {title}
      </span>
    </li>
  )
}

export default Section;