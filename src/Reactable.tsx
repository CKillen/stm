import React, { useState } from 'react';
import reactable from 'reactablejs';
import { Button } from 'semantic-ui-react';

// TODO: Clean up
// It's okay for this to be ugly, but it needs to be cleaner.

interface props {
  getRef: React.Ref<HTMLDivElement>,
  x?: number,
  y?: number,
  z?: number,
  color: string,
  child: JSX.Element,
  header: string,
  width: number,
  height: number,
  onClose: () => void,
}

const Base = (props: props) => {
  const { getRef, x, y, z, color, child, header, width, height, onClose } = props;
  return (
    <div className='testr' style={{
      left: x,
      top: y,
      height: height,
      width: width,
      backgroundColor: color,
      zIndex: z,
    }}>
      <div ref={getRef}>
        <h4 style={{ padding: 0, margin: 0, textAlign: 'center', paddingTop: '10px', borderBottom: '1px solid black' }}>{header}<Button className='close-reactable' onClick={() => onClose()}>    x</Button></h4>
      </div>
      <div 
      >
        {child}
      </div>
    </div>
  )
}

// Named R to allow export of Reactable name
const R = reactable(Base);

// TODO Keep array of all dragables, update their z index based on position in array
// slice last clicked, dragged, etc to last position in array.

// TODO pass classname into reactable and propagate it down 
const Reactable = (props: any) => {
  const { header="default", color = "#c4c4c4", width=500, height=800, left=350, top=60, children, onClose } = props;
  const [coordinate, setCoordinate] = useState<{x: number, y: number}>({ x: left , y: top })
  return (
    <R 
      draggable 
      onTap={() => {
        //TODO set z index to top
      }}
      onDragEnd={() => {
        // TODO set z index to top 
      }}
      onDragMove={
        (event: any) => {
          const { dx, dy } = event;
          const { 
            offsetLeft: left, 
            offsetTop: top, 
            offsetWidth: width,
            offsetHeight: height,
          } = event.target.parentElement;

          const { 
            offsetWidth: parentWidth, 
            offsetHeight: parentHeight, 
            offsetLeft: parentLeft, 
            offsetTop: parentTop,
          } = event.target.parentElement.parentElement;
          let { x, y } = coordinate;
          const newX = left + dx;  
          const newY = top + dy;
          if(newX > parentLeft - 50 &&  newX + width < parentWidth + parentLeft + 50) {
            x = x + dx;
          } 
          if(newY > parentTop && newY + height < parentHeight + parentTop + 50) {
            y = y + dy;
          }
          setCoordinate({ x, y })
        }
      }
      x={coordinate.x}
      y={coordinate.y}
      z={1}
      color={color}
      header={header}
      child={children}
      height={height}
      width={width}
      onClose={() => onClose()}
    />

  )
}



export default Reactable;