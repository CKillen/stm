import Section from "./Section";
import '../../Styles/SideSection.css'

function SideSection() {
  const ro = [
    { level: 1, title: "WIP 1" },
    { level: 1, title: "WIP 2" },
    { level: 1, title: "WIP 3" },
    { level: 2, title: "WIP 4" },
    { level: 3, title: "WIP 5" },
    { level: 4, title: "WIP 6" },
    { level: 2, title: "WIP 11" },
    { level: 2, title: "WIP 12" },
    { level: 1, title: "WIP 13" },
    { level: 1, title: "WIP 14" },
    { level: 1, title: "WIP 15" },
  ]
  // 
  return (
    <div className="side">
      <ol className="side-list">
        {ro.map((ele) => <Section level={ele.level} title={ele.title} /> )}
      </ol>
    </div>
  )
}

export default SideSection;