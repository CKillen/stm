import { useEffect, useState } from 'react';
import { Checkbox, Dropdown, Input, Segment, Popup, Button } from 'semantic-ui-react';
import './Contact.css';
import ContactTraitLists from '../../json/ContactTrait.json';
import ContactType from '../../json/Contact.json';
import GameContact from '../../json/GameContact.json'

function ContactInside() {
  const [name, setName] = useState('');
  const [createNew, setCreateNew] = useState(true);
  const [contactType, setContactType] = useState<any>(null);
  const [known, setKnown] = useState(true);
  const [startRep, setStartRep] = useState(0);
  const [startInf, setStartInf] = useState(0);
  const [peakInf, setPeakInf] = useState(0);
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFourth, setShowFourth] = useState(false);
  const [link1Id, setLink1Id] = useState<any>(null);
  const [link2Id, setLink2Id] = useState<any>(null);
  const [link1name, setLink1name] = useState<any>('');
  const [link2name, setLink2name] = useState<any>('');
  const [link1feeling, setLink1feeling] = useState(0);
  const [link2feeling, setLink2feeling] = useState(0);

  const [contactTrait1, setContactTrait1] = useState<any>(null);
  const [contactTrait2, setContactTrait2] = useState<any>(null);
  const [contactTrait3, setContactTrait3] = useState<any>(null);
  const [contactTrait4, setContactTrait4] = useState<any>(null);

  const [contactTypeList, setContactTypeList] = useState<any>([]);
  const [contactTraitList1, setContactTraitList1] = useState<any>([]);
  const [contactTraitList2, setContactTraitList2] = useState<any>([]);
  const [contactTraitList3, setContactTraitList3] = useState<any>([]);
  const [contactTraitList4, setContactTraitList4] = useState<any>([]);
  const [gameContacts, setGameContacts] = useState<any>([]);
  useEffect(() => {
    // TODO: Possibly combine down to 1 loop?
    for(let i = 0; i < ContactTraitLists.length; i++) {
      let contact = ContactTraitLists[i];
      let formattedEntry = {
        key: contact._id,
        text: contact.name,
        value: contact._id,
        description: contact.traitDesc,
      }
      if(contact.traitGroupId === 1) {
        setContactTraitList1((old: any) => [...old, formattedEntry])
      } 
      if(contact.traitGroupId === 2) {
        setContactTraitList2((old: any) => [...old, formattedEntry])
      } 
      if(contact.traitGroupId === 3) {
        setContactTraitList3((old: any) => [...old, formattedEntry])
      } 
      if(contact.traitGroupId === 4) {
        setContactTraitList4((old: any) => [...old, formattedEntry])
      } 

    }

    for(let i = 0; i < ContactType.length; i++) {
      let currentContact = ContactType[i];
      setContactTypeList((old: any) => [...old, {
        key: currentContact._id,
        text: currentContact.typeName,
        description: currentContact.description,
        value: currentContact._id,
      }])
    }

    for(let i = 0; i < GameContact.length; i++) {
      let currentContact = GameContact[i];
      setGameContacts((old: any) => [...old, {
        text: currentContact.displayName,
        faceId: currentContact.faceId,
        key: currentContact._id,
        value: currentContact._id,
      }])
    }

  }, [ContactTraitLists, ContactType])
  return (
    <div className="contact">
      <Segment.Group className="segment-no-margin">
        <Segment className={!showFirst ? "light" : "dark"} onClick={() => setShowFirst(!showFirst)}> {!showFirst ? "Click to show general" : "Click to hide"} </Segment>
        {!showFirst
          ? <></>
          : <><Segment>
            <Popup 
              content={createNew 
                ? "Click to use existing contact" 
                : "Click to create a new contact"
              } 
              trigger={<Checkbox checked={createNew} label="Create New" onClick={() => setCreateNew(!createNew)} />} 
            />
            
          </Segment>
          <Segment>
            {createNew 
              ? <Popup content="Required fields must be filled out before contact is added"  trigger={<Input  placeholder="Name" value={name} onChange={(event, { value }) => setName(value)}/>} />
              //TODO: Dropdown populated with db and created contacts
              // This should be the list grabbed from sql file uploads
              : <Dropdown selection placeholder='Pick Contact' fluid  options={[]} onChange={(event, { value }) => setName(value?.toString() || '')} />
            }
          </Segment>
          <Segment>
            <Popup 
              content="Known contacts are immiediately available, unknown contacts must be found"
              trigger={<Checkbox label="Known" checked={known} onClick={() => setKnown(!known)}/> } 
            />
          </Segment>
          <Segment>
            <Dropdown selection placeholder='Pick Contact Type' fluid options={contactTypeList} value={contactType} onChange={(event, target) => setContactType(target.value)}  />
          </Segment>
          <Segment>
            {
              //TODO: Grab face files from gamefolder 
            }
            <Dropdown selection placeholder='Pick Contact Face' fluid options={[]} />
          </Segment></>
          }
        </Segment.Group>



      <Segment.Group  className="segment-no-margin" horizontal>
          <Segment className={!showSecond ? "light" : "dark"} onClick={() => setShowSecond(!showSecond)}> {!showSecond ? "Click to show Rep/Influence" : "Click to hide"} </Segment>
          {!showSecond ? <></> : <>
            <Segment>
              <p>Starting Reputation</p><p> {startRep}</p>
              <Popup
                position='bottom center'
                content="Reputation contact has towards you"
                trigger={<Input type={'range'} className="contact-rep" defaultValue={0} min={-100} max={100} onChange={(event, { value }) => setStartRep(parseInt(value))} />}
                
              />
            </Segment>
            <Segment>
              <p>Starting Influence:</p> <p>{startInf}</p>
              <Popup
                position='bottom center'
                content="Current Influence contact has with faction"
                trigger={<Input type={'range'} className="contact-rep" defaultValue={0} min={0} max={100} onChange={(event, { value }) => setStartInf(parseInt(value))}/>}
                value={0}
              />
            </Segment>
            <Segment>
              <p>Historical Influence:</p><p> {peakInf}</p>
              <Popup
                position='bottom center'
                content="Peak influece contact has ever had with faction"
                trigger={<Input type={'range'} className="contact-rep" defaultValue={0} min={0} max={100} onChange={(event, { value }) => setPeakInf(parseInt(value))}/>}
              />
            </Segment></>
          }
      </Segment.Group>



      <Segment.Group className="segment-no-margin">
        <Segment className={!showThird ? "light" : "dark"} onClick={() => setShowThird(!showThird)}> {!showThird ? "Click to show traits" : "Click to hide"} </Segment>
        {!showThird ? <></> : <>
          <Segment>
            <Dropdown selection placeholder='Pick trait' fluid options={contactTraitList1} value={contactTrait1} onChange={(event, target) => setContactTrait1(target.value)}  />
          </Segment>
          <Segment>
            <Dropdown selection placeholder='Pick trait' fluid options={contactTraitList2} value={contactTrait2} onChange={(event, target) => setContactTrait2(target.value)}  />
          </Segment>
          <Segment>
            <Dropdown selection placeholder='Pick trait' fluid options={contactTraitList3} value={contactTrait3} onChange={(event, target) => setContactTrait3(target.value)}  />
          </Segment>
          <Segment>
            <Dropdown selection placeholder='Pick trait' fluid options={contactTraitList4} value={contactTrait4} onChange={(event, target) => setContactTrait4(target.value)}  />
          </Segment></>
        }
      </Segment.Group>



      <Segment.Group className="segment-no-margin">
        <Segment className={!showFourth ? "light" : "dark"} onClick={() => setShowFourth(!showFourth)}> {!showFourth ? "Click to show linked contacts" : "Click to hide"} </Segment>
        {!showFourth ? <></> : <>
          <Segment>
            {
              //TODO: Each of these 4 dropdowns will contain relative trait values from db
              // Check Notion.so documentation  
            }
            <Dropdown selection placeholder='Pick Contact' fluid options={gameContacts} value={link1Id} onChange={(event, target: any) => {
              setLink1name(target.options[target.value - 1].text)
              setLink1Id(target.value)
            }} />
          </Segment>
          <Segment>
            <p>Feelings toward {link1name} : {link1feeling}</p>
            <Input type={'range'} className="contact-rep" defaultValue={0} min={-100} max={100} onChange={(event, { value }) => setLink1feeling(parseInt(value))} />
          </Segment>
          <Segment>
            <Dropdown selection placeholder='Pick Contact' fluid options={gameContacts} value={link2Id} onChange={(event, target: any) => {
              setLink2name(target.options[target.value - 1].text)
              setLink2Id(target.value)
            }}/>
          </Segment>
          <Segment>
            <p>Feelings toward {link2name} : {link2feeling}</p>
            <Input type={'range'} className="contact-rep" defaultValue={0} min={-100} max={100} onChange={(event, { value }) => setLink2feeling(parseInt(value))} />
          </Segment></>
        }
      </Segment.Group>

      {/* <Segment.Group className="segment-no-margin">
        {!createNew ? <></> : 
          <Segment>
            <Button onClick={() => {

            }}>Delete</Button>
          </Segment>
        }
      </Segment.Group> */}
    </div>
  )
}

export default ContactInside;